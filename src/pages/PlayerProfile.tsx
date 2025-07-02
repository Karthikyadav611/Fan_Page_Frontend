import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "lucide-react";

type Stat = {
  format: string;
  matches: string;
  innings: string;
  runs?: string;
  hundreds?: string;
  fifties?: string;
  highScore?: string;
  strikeRate?: string;
  average?: string;
  fours?: string;
  sixes?: string;
  wickets?: string;
  economy?: string;
  bestFigures?: string;
  threeWickets?: string;
  fiveWickets?: string;
};

type PlayerData = {
  id: string;
  name: string;
  role: string;
  image: string;
  team: string;
  dob: string;
  nationality: string;
  batting?: {
    matches: number;
    runs: number;
    average: number;
    strikeRate: number;
  };
  bowling?: {
    matches: number;
    wickets: number;
    economy: number;
  };
  gallery?: string[];
  teamsPlayed?: string[];
  careerStats?: {
    batting?: Stat[];
    bowling?: Stat[];
  };
};

const PlayerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewStat, setViewStat] = useState<"batting" | "bowling">("batting");

 useEffect(() => {
  const fetchPlayer = async () => {
    try {
      const res = await fetch(`https://fan-page-backend.onrender.com/api/players/${id}`);
      if (!res.ok) throw new Error("Player not found");
      const data = await res.json();
      setPlayer(data);
    } catch (err) {
      console.error("Failed to load player:", err);
    } finally {
      setLoading(false);
    }
  };
  fetchPlayer();
}, [id]);

  useEffect(() => {
    if (player) {
      const isBowler = player.role.toLowerCase().includes("bowler");
      const isAllRounder = player.role.toLowerCase().includes("all");
      const defaultView: "batting" | "bowling" = isBowler && !isAllRounder ? "bowling" : "batting";
      setViewStat(defaultView);
    }
  }, [player]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-10 h-10 text-yellow-500" />
      </div>
    );
  }

  if (!player) {
    return <div className="text-center mt-20 text-xl text-red-600">Player not found.</div>;
  }

  const isBatsman = player.role.toLowerCase().includes("batsman");
  const isBowler = player.role.toLowerCase().includes("bowler");
  const isAllRounder = player.role.toLowerCase().includes("all");
  const isKeeper = player.role.toLowerCase().includes("wicket");
  const showBatting = isBatsman || isKeeper || isAllRounder;
  const showBowling = isBowler || isAllRounder;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Player Image and Info */}
          <div className="bg-yellow-100 flex flex-col items-center justify-center p-6 w-full md:w-1/3">
            <img
              src={player.image || "/images/default.jpg"}
              alt={player.name}
              className="w-48 h-48 object-cover rounded-full border-4 border-yellow-300 shadow-md"
              onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
            />
            <h2 className="text-xl font-bold mt-4 text-yellow-800">{player.name}</h2>
            <p className="text-gray-700">{player.role}</p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Nationality:</strong> {player.nationality}
            </p>
            <p className="text-sm text-gray-600">
              <strong>DOB:</strong> {player.dob}
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="p-6 w-full md:w-2/3 space-y-6">
            {(showBatting || showBowling) && (
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-700">Career Stats</h3>
                  {isAllRounder && (
                    <div className="space-x-2">
                      <button
                        onClick={() => setViewStat("batting")}
                        className={`px-3 py-1 rounded text-sm ${
                          viewStat === "batting" ? "bg-yellow-500 text-white" : "bg-gray-200"
                        }`}
                      >
                        Batting
                      </button>
                      <button
                        onClick={() => setViewStat("bowling")}
                        className={`px-3 py-1 rounded text-sm ${
                          viewStat === "bowling" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                      >
                        Bowling
                      </button>
                    </div>
                  )}
                </div>

                {/* Batting Stats */}
                {viewStat === "batting" && showBatting && player.careerStats?.batting?.length ? (
                  <div className="overflow-x-auto mt-2">
                    <table className="w-full text-sm border">
                      <thead className="bg-yellow-300 text-left text-sm">
                        <tr>
                          {["Format", "Mat", "Inns", "Runs", "Avg", "SR", "HS", "100s", "50s", "4s", "6s"].map((col) => (
                            <th key={col} className="px-2 py-1">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {player.careerStats.batting.map((stat, i) => (
                          <tr key={i} className="odd:bg-white even:bg-yellow-50">
                            <td className="px-2 py-1">{stat.format}</td>
                            <td className="px-2 py-1">{stat.matches}</td>
                            <td className="px-2 py-1">{stat.innings}</td>
                            <td className="px-2 py-1">{stat.runs}</td>
                            <td className="px-2 py-1">{stat.average}</td>
                            <td className="px-2 py-1">{stat.strikeRate}</td>
                            <td className="px-2 py-1">{stat.highScore}</td>
                            <td className="px-2 py-1">{stat.hundreds}</td>
                            <td className="px-2 py-1">{stat.fifties}</td>
                            <td className="px-2 py-1">{stat.fours}</td>
                            <td className="px-2 py-1">{stat.sixes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : viewStat === "batting" && showBatting ? (
                  <p className="text-sm text-gray-500 mt-2">No batting data available.</p>
                ) : null}

                {/* Bowling Stats */}
                {viewStat === "bowling" && showBowling && player.careerStats?.bowling?.length ? (
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-sm border">
                      <thead className="bg-blue-200 text-left text-sm">
                        <tr>
                          {["Format", "Mat", "Inns", "Wkts", "Eco", "Avg", "Best", "3W", "5W", "SR"].map((col) => (
                            <th key={col} className="px-2 py-1">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {player.careerStats.bowling.map((stat, i) => (
                          <tr key={i} className="odd:bg-white even:bg-blue-50">
                            <td className="px-2 py-1">{stat.format}</td>
                            <td className="px-2 py-1">{stat.matches}</td>
                            <td className="px-2 py-1">{stat.innings}</td>
                            <td className="px-2 py-1">{stat.wickets}</td>
                            <td className="px-2 py-1">{stat.economy}</td>
                            <td className="px-2 py-1">{stat.average}</td>
                            <td className="px-2 py-1">{stat.bestFigures}</td>
                            <td className="px-2 py-1">{stat.threeWickets}</td>
                            <td className="px-2 py-1">{stat.fiveWickets}</td>
                            <td className="px-2 py-1">{stat.strikeRate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : viewStat === "bowling" && showBowling ? (
                  <p className="text-sm text-gray-500 mt-2">No bowling data available.</p>
                ) : null}
              </div>
            )}

            {/* Teams Played */}
            {player.teamsPlayed?.length ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Teams Played</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  {player.teamsPlayed.map((team, i) => (
                    <li key={i}>{team}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* About */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">About</h3>
              <p className="text-gray-600">More about {player.name} will be available soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;

import React from "react";
import { useNavigate } from "react-router-dom";
// For routing
import { Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type LegendaryPlayer = {
  name: string;
  role: string;
  matches: string;
  runs: string;
  achievement: string;
  isActive: boolean;
  description: string;
  image: string;
};

type CurrentStar = {
  id: string;
  name: string;
  role: "Wicket-keeper" | "Batsman" | "All-rounder" | "Bowler";
  form: string;
  image?: string;
};

const Players: React.FC = () => {
  const navigate = useNavigate();
  const legendaryPlayers: LegendaryPlayer[] = [
    {
      name: "MS Dhoni(Thala)",
      role: "Captain & Wicket-keeper",
      matches: "264",
      runs: "5,243",
      achievement: "5x IPL Winner",
      isActive: true,
      description: "The greatest finisher and captain in IPL history",
      image: "/images/dhoni.png",
    },
    {
      name: "Suresh Raina(Kutty Thala)",
      role: "Batsman",
      matches: "205",
      runs: "5,528",
      achievement: "Mr. IPL",
      isActive: false,
      description: "The backbone of CSK's batting lineup",
      image: "/images/raina.png",
    },
    {
      name: "Ravindra Jadeja(Thalapathy)",
      role: "All-rounder",
      matches: "178",
      runs: "2,756",
      achievement: "Sir Jadeja",
      isActive: true,
      description: "The ultimate team player and match-winner",
      image: "/images/ravindra.png",
    },
  ];

  const currentStars: CurrentStar[] = [
    { id: "DHONI", name: "MS Dhoni", role: "Wicket-keeper", form: "👑", image: "/images/dhoni.png" },
    { id: "URVIL", name: "Urvil Patel", role: "Wicket-keeper", form: "🔥", image: "/images/urvil.png" },
    { id: "AYUSH", name: "Ayush Matre", role: "Batsman", form: "🔥", image: "/images/ayush.png" },
    { id: "RAHUL", name: "Rahul Tripati", role: "Batsman", form: "⭐", image: "/images/rahul.png" },
    { id: "RASHEED", name: "Shaik Rasheed", role: "Batsman", form: "💥", image: "/images/rasheed.png" },
    { id: "BREVIS", name: "Dewald Brevis", role: "Batsman", form: "🎯", image: "/images/brevis.png" },
    { id: "ANDRE", name: "Andre Siddarth", role: "Batsman", form: "🔥", image: "/images/default.png" },
    { id: "RUTURAJ", name: "Ruturaj Gaikwad", role: "Batsman", form: "🔥", image: "/images/Ruturaj.png" },
    { id: "JADEJA", name: "Ravindra Jadeja", role: "All-rounder", form: "🏏", image: "/images/ravindra.png" },
    { id: "ASHWIN", name: "R Ashwin", role: "All-rounder", form: "🔁", image: "/images/ashwin.png" },
    { id: "CURRAN", name: "Sam Curran", role: "All-rounder", form: "⚡", image: "/images/curran.png" },
    { id: "SHANKAR", name: "Vijay Shanker", role: "All-rounder", form: "🏃", image: "/images/shankar.png" },
    { id: "RACHIN", name: "Rachin Ravindra", role: "All-rounder", form: "💪", image: "/images/rachin.png" },
    { id: "HOODA", name: "Deepak Hooda", role: "All-rounder", form: "🔥", image: "/images/hooda.png" },
    { id: "GHOSH", name: "Ramakrishna Ghosh", role: "All-rounder", form: "🎯", image: "/images/default.png" },
    { id: "KAMBOJ", name: "Anshul Kamboj", role: "All-rounder", form: "🔥", image: "/images/kamboj.png" },
    { id: "DUBE", name: "Shivam Dube", role: "All-rounder", form: "💪", image: "/images/dube.png" },
    { id: "NOOR", name: "Noor Ahmed", role: "Bowler", form: "🔥", image: "/images/noor.png" },
    { id: "KHALEEL", name: "Khaleel Ahmed", role: "Bowler", form: "⭐", image: "/images/khaleel.png" },
    { id: "ELLIS", name: "Nathan Ellis", role: "Bowler", form: "🎯", image: "/images/ellis.png" },
    { id: "GOPAL", name: "Shreyas Gopal", role: "Bowler", form: "🔥", image: "/images/default.png" },
    { id: "CHOWDARY", name: "Mukesh Chowdary", role: "Bowler", form: "⭐", image: "/images/chowdary.png" },
    { id: "OVERTON", name: "Jamie Overton", role: "Bowler", form: "💥", image: "/images/overton.png" },
    { id: "NAGARKOTI", name: "Kamlesh Nagarkoti", role: "Bowler", form: "🎯", image: "/images/default.png" },
    { id: "PATHIRANA", name: "Matheesha Pathirana", role: "Bowler", form: "⚡", image: "/images/pathirana.png" },
  ];

 const handleViewProfile = (id: string) => {
  navigate(`/players/${id}`);
};

  const groupedPlayers = {
    "Wicket-keeper": currentStars.filter(p => p.role === "Wicket-keeper"),
    "Batsman": currentStars.filter(p => p.role === "Batsman"),
    "All-rounder": currentStars.filter(p => p.role === "All-rounder"),
    "Bowler": currentStars.filter(p => p.role === "Bowler"),
  };
  return (
    <section id="players" className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-yellow-500">Legendary</span> <span className="text-blue-600">Warriors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the champions who have made CSK the most successful franchise in IPL history
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Hall of Fame</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {legendaryPlayers.map((player, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-yellow-50 border-2 border-yellow-200">
                  <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full shadow-md bg-white">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover"
                        onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
                      />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{player.name}</CardTitle>
                    <div className="flex justify-center gap-2 mt-1">
                      <Badge variant={player.isActive ? "default" : "secondary"} className={player.isActive ? "bg-green-500" : ""}>
                        {player.isActive ? "Active" : "Retired"}
                      </Badge>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                        {player.role}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4 italic">{player.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{player.matches}</div>
                        <div className="text-gray-500">Matches</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-600">{player.runs}</div>
                        <div className="text-gray-500">Runs</div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                      <div className="flex items-center justify-center">
                        <Award className="w-4 h-4 text-yellow-600 mr-2" />
                        <span className="text-yellow-800 font-semibold">{player.achievement}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-600">Current Squad</h2>
        {Object.entries(groupedPlayers).map(([role, players]) => (
          <div key={role} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{role}s</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {players.map(player => (
                <Card key={player.id} className="p-4 hover:shadow-lg transition-all">
                  <div className="flex justify-center items-center bg-white rounded-md mb-4 overflow-hidden h-48">
                    <img
                      src={player.image || "/images/default.jpg"}
                      alt={player.name}
                      className="object-contain h-full"
                      onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
                    />
                  </div>
                  <CardContent className="text-center space-y-2">
                    <div className="text-2xl">{player.form}</div>
                    <div className="font-semibold text-lg text-gray-800">{player.name}</div>
                    <div className="text-sm text-gray-500">{player.role}</div>
                    <button
                      onClick={() => handleViewProfile(player.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    >
                      View Profile
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Players;

import { Trophy, Medal, Target, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  const trophies = [
    {
      year: "2010",
      title: "IPL Champions",
      opponent: "vs Mumbai Indians",
      image: "/images/2010ipl.jpeg",
    },
    {
      year: "2011",
      title: "IPL Champions",
      opponent: "vs Royal Challengers Bangalore",
      image: "/images/2011ipl.jpg",
    },
    {
      year: "2018",
      title: "IPL Champions",
      opponent: "vs Sunrisers Hyderabad",
      image: "/images/2018ipl.jpeg",
    },
    {
      year: "2021",
      title: "IPL Champions",
      opponent: "vs Kolkata Knight Riders",
      image: "/images/2021ipl.jpg",
    },
    {
      year: "2023",
      title: "IPL Champions",
      opponent: "vs Gujarat Titans",
      image: "/images/ipl2023.jpeg",
    },
  ];

  const records = [
    { icon: Trophy, stat: "10", label: "Final Appearances", desc: "Most by any team" },
    { icon: Target, stat: "12", label: "Playoff Appearances", desc: "Consistency is key" },
    { icon: Medal, stat: "120+", label: "Wins", desc: "Highest win percentage" },
    { icon: Calendar, stat: "15", label: "Years", desc: "Of excellence" },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Trophy</span> <span className="text-yellow-500">Cabinet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy built on victories, records, and unforgettable moments
          </p>
        </div>

        {/* Championship Years */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">IPL Championships</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {trophies.map((trophy, index) => (
              <Card
                key={index}
                className="text-center group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-cover bg-center text-white border-0"
                style={{ backgroundImage: `url('${trophy.image}')`,
               backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/70 to-blue-600/80 "></div>
                <CardHeader className="relative pb-4 z-10">
                  <Trophy className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl font-bold">{trophy.year}</CardTitle>
                </CardHeader>
                <CardContent className="relative pt-0 z-10">
                  <p className="font-semibold mb-2">{trophy.title}</p>
                  <p className="text-sm opacity-90">{trophy.opponent}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Records & Stats */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Record Breaking Stats</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {records.map((record, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-yellow-200"
              >
                <CardContent className="p-0">
                  <record.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{record.stat}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{record.label}</div>
                  <div className="text-sm text-gray-600">{record.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Notable Achievements */}
        <div className="bg-gradient-to-r from-yellow-400 to-blue-600 text-white p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-center mb-8">Notable Milestones</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Team Records</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Only team to qualify for playoffs in first 12 seasons</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Highest successful chase in IPL final: 2018 vs SRH</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Most wins by any team at home ground</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Best win percentage in IPL history</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Individual Records</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>MS Dhoni: Most successful captain (5 titles)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Suresh Raina: Most runs for CSK (5,528)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Dwayne Bravo: Most wickets for CSK (183)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>MS Dhoni: Most dismissals by wicket-keeper</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

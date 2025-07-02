
import { Trophy, Users, Calendar, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Trophy, label: "IPL Titles", value: "5", color: "text-yellow-500" },
    { icon: Users, label: "Yellow Army", value: "Millions", color: "text-blue-500" },
    { icon: Calendar, label: "Established", value: "2008", color: "text-yellow-500" },
    { icon: Target, label: "Finals", value: "10", color: "text-blue-500" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The <span className="text-yellow-500">Yellow</span> <span className="text-blue-600">Legacy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chennai Super Kings is more than just a cricket team - it's an emotion, a family, and a legacy of excellence that has captured hearts across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-gray-100">
              <CardContent className="p-0">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2008, Chennai Super Kings has been the most consistent team in the Indian Premier League. Under the leadership of MS Dhoni, the team has achieved unprecedented success and built a fanbase that spans continents.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Known for their never-give-up attitude and the famous "Whistle Podu" chant, CSK has redefined cricket entertainment and sportsmanship in India.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-yellow-800 font-semibold italic">
                "Cricket is not just a game for CSK - it's a celebration of passion, dedication, and the undying spirit of Chennai."
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-400 to-blue-600 p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-6">Team Philosophy</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Experience over youth - Building a team of seasoned players</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Loyalty and trust - Players and fans are family</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Never give up - Fighting till the last ball</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Team first - Individual glory comes second</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

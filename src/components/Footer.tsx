
import { Crown, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl font-bold">Chennai Super Kings</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              More than a team, we are a family. Join the Yellow Army and be part of the greatest cricket legacy in IPL history. Whistle Podu!
            </p>
            <div className="flex items-center text-yellow-400">
              <Heart className="w-5 h-5 mr-2 fill-current" />
              <span className="font-semibold">Made with love by CSK Fans</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">About CSK</a></li>
              <li><a href="#players" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Players</a></li>
              <li><a href="#achievements" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Trophies</a></li>
              <li><a href="#gallery" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Connect With Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-blue-200">
                <MapPin className="w-4 h-4 mr-3 text-yellow-400" />
                Chennai, Tamil Nadu
              </li>
              <li className="flex items-center text-blue-200">
                <Mail className="w-4 h-4 mr-3 text-yellow-400" />
                fans@csk.com
              </li>
              <li className="flex items-center text-blue-200">
                <Phone className="w-4 h-4 mr-3 text-yellow-400" />
                +91 44 WHISTLE
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 mb-4 md:mb-0">
              © 2024 Chennai Super Kings Fan Page. Built with passion for the Yellow Army.
            </p>
            <div className="flex space-x-6">
              <span className="text-blue-300">Whistle Podu</span>
              <span className="text-yellow-400">•</span>
              <span className="text-blue-300">Yellow Army</span>
              <span className="text-yellow-400">•</span>
              <span className="text-blue-300">CSK Forever</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Icon, {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-[#091e79] to-[#00d4ff] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Amar Kumar Prajapati</h3>
              <p className="text-gray-200">MERN Stack developer</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection(heroRef)}
                  className="block text-gray-200 hover:text-white !rounded-button whitespace-nowrap"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection(portfolioRef)}
                  className="block text-gray-200 hover:text-white !rounded-button whitespace-nowrap"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection(experienceRef)}
                  className="block text-gray-200 hover:text-white !rounded-button whitespace-nowrap"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection(skillsRef)}
                  className="block text-gray-200 hover:text-white !rounded-button whitespace-nowrap"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="block text-gray-200 hover:text-white !rounded-button whitespace-nowrap"
                >
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/amarkumarprajapati?tab=repositories"
                  target="_blanks"
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  <GithubOutlined />
                </a>
                <a
                  href="https://www.linkedin.com/in/amar-kumar-prajapati-76255072/"
                  className="text-white hover:text-gray-200 text-2xl"
                  target="_blanks"
                >
                  <LinkedinOutlined />
                </a>
                <a
                  href="https://www.facebook.com/amarkk1/"
                  className="text-white hover:text-gray-200 text-2xl"
                  target="_blanks"
                >
                  <Icon type="facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-gray-200">
              © 2025 John Anderson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

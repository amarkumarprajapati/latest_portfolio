import { Button } from "antd"; 
import React from "react"; 
import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

import image2 from '../../assets/image2.jpeg'; 
// Import the PDF file from assets
import resumePdf from '../../assets/Amar Kumar Prajapati.pdf';

const HeroSection = () => {
  const handleDownload = () => {
    // Creating an anchor element and triggering download
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Amar_Kumar_Prajapati_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section
        className="pt-24 bg-gradient-to-br from-[#091e79]/5 to-[#00d4ff]/5"
      >
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
                Amar Kumar Prajapati
              </h1>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
                MERN Stack Developer
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                I specialize in creating innovative solutions and building scalable web applications.
              </p>
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                size="large"
                className="bg-gradient-to-r from-[#091e79] to-[#00d4ff] border-none !rounded-button whitespace-nowrap hover:from-[#00d4ff] hover:to-[#091e79] transition-all duration-300"
                onClick={handleDownload}
                style={{
                  background: 'linear-gradient(to right, #091e79, #00d4ff)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #00d4ff, #091e79)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #091e79, #00d4ff)';
                }}
              >
                Download CV
              </Button>
            </div>
            <div className="relative">
              <img
                src={image2}
                alt="Profile"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
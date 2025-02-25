import React from 'react'

const Header = ({ heroRef, portfolioRef, experienceRef, skillsRef, contactRef }) => {
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
       <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-[#091e79] to-[#00d4ff] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://public.readdy.ai/ai/img_res/e1a4d2f363034ed1303c4864a1eeb927.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-white"
              onClick={() => scrollToSection(heroRef)}
            />
            <span className="text-white text-xl font-bold">John Anderson</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection(heroRef)}
              className="text-white hover:text-gray-200 !rounded-button whitespace-nowrap"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className="text-white hover:text-gray-200 !rounded-button whitespace-nowrap"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="text-white hover:text-gray-200 !rounded-button whitespace-nowrap"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-white hover:text-gray-200 !rounded-button whitespace-nowrap"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-white hover:text-gray-200 !rounded-button whitespace-nowrap"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header

import React from 'react'

const SkillsSection = () => {
  return (
    <div>
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                icon: "fa-laptop-code",
                skills: [
                  { name: "React/Next.js", level: 95 },
                  { name: "Vue/Nuxt.js", level: 90 },
                  { name: "TypeScript", level: 88 },
                  { name: "Tailwind CSS", level: 92 },
                  { name: "WebGL/Three.js", level: 85 },
                ],
              },
              {
                category: "Backend",
                icon: "fa-server",
                skills: [
                  { name: "Node.js/Express", level: 92 },
                  { name: "Python/Django", level: 88 },
                  { name: "Java Spring", level: 85 },
                  { name: "GraphQL", level: 90 },
                  { name: "RESTful APIs", level: 94 },
                ],
              },
              {
                category: "Database",
                icon: "fa-database",
                skills: [
                  { name: "PostgreSQL", level: 90 },
                  { name: "MongoDB", level: 92 },
                  { name: "Redis", level: 88 },
                  { name: "Elasticsearch", level: 85 },
                  { name: "Firebase", level: 89 },
                ],
              },
              {
                category: "DevOps",
                icon: "fa-cloud",
                skills: [
                  { name: "Docker/K8s", level: 88 },
                  { name: "AWS/Azure", level: 90 },
                  { name: "CI/CD", level: 92 },
                  { name: "Terraform", level: 85 },
                  { name: "Linux/Shell", level: 89 },
                ],
              },
            ].map((category) => (
              <div
                key={category.category}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <i
                    className={`fas ${category.icon} text-2xl bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent mr-3`}
                  ></i>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#091e79] to-[#00d4ff] rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsSection

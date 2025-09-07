'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Calendar, Zap, Database, Globe, Brain, Activity } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "SmartConnect 6G",
      subtitle: "Optimizing M2M Communication in Future IoT Networks",
      description: "Developed an AI-based Q-learning framework with adaptive preamble selection to optimize LTE-A Random Access in dense M2M/IoT networks, reducing collisions and access delays.",
      year: "2024",
      category: "AI/ML Research",
      icon: Brain,
      achievements: [
        "90%+ reduction in collision probability",
        "92% decrease in average access delay (to 0.8 ms)",
        "50% improvement in average SINR"
      ],
      technologies: ["Q-Learning", "Reinforcement Learning", "LTE-A Simulation", "IoT Networks"],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "MediConnect",
      subtitle: "Healthcare Management System",
      description: "Built a comprehensive healthcare management web application using MERN stack for efficient patient-doctor interaction with secure authentication and real-time features.",
      year: "2025",
      category: "Full Stack Web App",
      icon: Activity,
      achievements: [
        "Secure JWT authentication system",
        "Responsive design across all devices",
        "Real-time notifications and messaging",
        "Cloud deployment with CI/CD"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "JWT", "Vercel", "Render"],
      links: {
        github: "#",
        demo: "#"
      },
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-900/20 to-emerald-900/20"
    },
    {
      title: "Real-Time Weather Dashboard",
      subtitle: "Dynamic Weather Information App",
      description: "Built a weather web app that displays real-time data including temperature, humidity, pressure, visibility, and weather condition based on user-input city with excellent UX.",
      year: "2024 (Updated 2025)",
      category: "Frontend Application",
      icon: Globe,
      achievements: [
        "Real-time weather data integration",
        "Advanced error handling",
        "Responsive UI design",
        "Loading states optimization"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Fetch API", "OpenWeatherMap API"],
      links: {
        demo: "#",
        github: "#"
      },
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work in web development, AI/ML, and innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300`}></div>
                
                <div className="relative bg-dark-800/40 backdrop-blur-sm rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left Column - Project Info */}
                      <div className="flex-1">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                              <project.icon className="text-white" size={28} />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium">
                                  {project.category}
                                </span>
                              </div>
                              <p className="text-lg text-primary-400 font-medium">{project.subtitle}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar size={16} className="mr-2" />
                            {project.year}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-primary-400 mb-3 flex items-center">
                            <Zap size={20} className="mr-2" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + i * 0.1 }}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                                {achievement}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-primary-400 mb-3 flex items-center">
                            <Database size={20} className="mr-2" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3, delay: 1 + index * 0.2 + i * 0.05 }}
                                className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-600/50"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Project Links */}
                        {project.links && (
                          <div className="flex gap-4">
                            {project.links.github && (
                              <motion.a
                                href={project.links.github}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-gray-500"
                              >
                                <Github size={20} />
                                View Code
                              </motion.a>
                            )}
                            {project.links.demo && (
                              <motion.a
                                href={project.links.demo}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all duration-300 hover:shadow-lg`}
                              >
                                <ExternalLink size={20} />
                                Live Demo
                              </motion.a>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Right Column - Visual Element */}
                      <div className="lg:w-80">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                          className="relative h-48 lg:h-full min-h-[200px] rounded-xl overflow-hidden"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ 
                                rotate: 360,
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ 
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                              }}
                              className={`w-24 h-24 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center shadow-2xl`}
                            >
                              <project.icon className="text-white" size={40} />
                            </motion.div>
                          </div>
                          {/* Floating particles */}
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                x: [0, 30, -30, 0],
                                y: [0, -20, 20, 0],
                                opacity: [0.3, 0.8, 0.3]
                              }}
                              transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5
                              }}
                              className={`absolute w-2 h-2 bg-gradient-to-br ${project.color} rounded-full`}
                              style={{
                                left: `${20 + i * 10}%`,
                                top: `${15 + i * 12}%`
                              }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-900/20 to-purple-900/20 rounded-2xl p-8 border border-primary-500/20 max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">Want to see more?</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                These are just a few highlights of my work. I'm constantly building new projects 
                and exploring emerging technologies. Check out my GitHub for more projects and contributions.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Github size={20} />
                View All Projects
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
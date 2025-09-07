'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa"
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "CSS3", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "React", level: 80, color: "from-cyan-400 to-cyan-600" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-teal-600" },
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 75, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 80, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", level: 70, color: "from-green-500 to-green-700" },
        { name: "RESTful APIs", level: 75, color: "from-purple-400 to-purple-600" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 80, color: "from-gray-600 to-gray-800" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "Vercel", level: 75, color: "from-black to-gray-600" },
        { name: "JWT Auth", level: 70, color: "from-red-400 to-red-600" },
      ]
    }
  ]

  const floatingSkills = [
    { icon: <FaReact className="text-white text-2xl" />, x: 10, y: 20, delay: 0, color: "bg-cyan-500" },
    { icon: <FaNodeJs className="text-white text-2xl" />, x: 80, y: 15, delay: 0.5, color: "bg-green-500" },
    { icon: <SiMongodb className="text-white text-2xl" />, x: 15, y: 70, delay: 1, color: "bg-green-600" },
    { icon: <SiExpress className="text-white text-2xl" />, x: 75, y: 65, delay: 1.5, color: "bg-gray-600" },
    { icon: <SiTailwindcss className="text-white text-2xl" />, x: 50, y: 10, delay: 2, color: "bg-teal-500" },
    { icon: <FaJs className="text-white text-2xl" />, x: 60, y: 80, delay: 2.5, color: "bg-yellow-500" },
    { icon: <FaHtml5 className="text-white text-2xl" />, x: 25, y: 40, delay: 3, color: "bg-orange-500" },
    { icon: <FaCss3Alt className="text-white text-2xl" />, x: 85, y: 45, delay: 3.5, color: "bg-blue-500" },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Floating Skills Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative h-96 lg:h-[500px]"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-purple-900/20 rounded-full blur-3xl"></div>
              
              {/* Floating Skill Balls */}
              {floatingSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    x: [0, 20, -20, 0],
                    y: [0, -15, 15, 0]
                  } : { opacity: 0, scale: 0 }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: skill.delay },
                    scale: { duration: 0.6, delay: skill.delay },
                    x: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    position: 'absolute',
                    left: `${skill.x}%`,
                    top: `${skill.y}%`,
                  }}
                  className={`skill-ball w-16 h-16 md:w-20 md:h-20 ${skill.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-110`}
                >
                  {skill.icon}
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - Skill Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                  className="bg-dark-800/30 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20"
                >
                  <h3 className="text-xl font-bold text-primary-400 mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-primary-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute right-0 top-0 w-2 h-full bg-white/30 rounded-full"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 text-center"
          >
            <h4 className="text-xl font-semibold text-primary-400 mb-6">Also Familiar With</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['Framer Motion', 'ShadCN', 'DaisyUI', 'Aceternity UI', 'Local Storage API', 'Fetch API', 'JSON Processing', 'DOM Manipulation'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

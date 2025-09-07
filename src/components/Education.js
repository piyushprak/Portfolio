'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Birla Institute of Technology, Mesra",
      duration: "Nov 2022 – May 2026",
      location: "Ranchi, Jharkhand",
      description: "Final year student focusing on modern web development technologies alongside core ECE subjects.",
      status: "Current",
      color: "from-primary-500 to-blue-500"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Park Mount Public School",
      duration: "May 2021",
      location: "Patna, Bihar",
      description: "Completed higher secondary education with strong foundation in mathematics and sciences.",
      status: "Completed",
      color: "from-green-500 to-emerald-500"
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "DAV Public School",
      duration: "May 2019",
      location: "Patna, Bihar",
      description: "Successfully completed secondary education with excellent academic performance.",
      status: "Completed",
      color: "from-purple-500 to-violet-500"
    }
  ]

  return (
    <section id="education" className="py-20 relative">
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
              My <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My educational journey that shaped my technical foundation and passion for technology
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center z-10">
                    <GraduationCap size={16} className="text-white" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    } ml-16 md:ml-0`}
                  >
                    <div className="bg-dark-800/30 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 hover-lift">
                      {/* Status Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                          edu.status === 'Current' 
                            ? 'bg-primary-500/20 text-primary-300' 
                            : 'bg-green-500/20 text-green-300'
                        }`}
                      >
                        {edu.status}
                      </motion.div>

                      {/* Degree */}
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      
                      {/* Institution */}
                      <h4 className="text-lg text-primary-400 font-semibold mb-3">{edu.institution}</h4>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-900/20 to-purple-900/20 rounded-2xl p-8 border border-primary-500/20 max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-primary-400 mb-4">Academic Focus</h4>
              <p className="text-gray-300 leading-relaxed">
                While pursuing my degree in Electronics and Communication Engineering, I've developed a strong 
                passion for software development, particularly in web technologies. This unique combination of 
                hardware understanding and software expertise gives me a comprehensive approach to problem-solving.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
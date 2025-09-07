'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Lightbulb, Rocket, Users } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Innovative solutions to complex technical challenges"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized applications for speed and user experience"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    }
  ]

  return (
    <section id="about" className="py-20 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl md:text-3xl font-semibold text-primary-400"
              >
                Passionate Full Stack Developer
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-4 text-gray-300 leading-relaxed"
              >
                <p>
                  I'm a final-year B.Tech student in Electronics and Communication Engineering 
                  from BIT Mesra, specializing in MERN stack development. My journey in web 
                  development started with curiosity and has evolved into a passion for creating 
                  innovative digital experiences.
                </p>
                <p>
                  Proficient in modern web technologies including HTML, CSS, JavaScript, React, 
                  Node.js, Express.js, and MongoDB. I'm continuously expanding my skill set by 
                  learning Next.js and Svelte.js to stay current with industry trends.
                </p>
                <p>
                  My goal is to create responsive, scalable web applications with clean, 
                  intuitive user interfaces and robust backend architectures. I believe in 
                  writing code that not only works but is also maintainable and scalable.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                <div className="bg-dark-800/50 p-4 rounded-lg border border-primary-500/20">
                  <div className="text-2xl font-bold text-primary-400">5+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="bg-dark-800/50 p-4 rounded-lg border border-primary-500/20">
                  <div className="text-2xl font-bold text-primary-400">2024</div>
                  <div className="text-gray-400">Year Started</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-dark-800/30 backdrop-blur-sm p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 hover-lift"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-900/20 to-purple-900/20 rounded-2xl p-8 border border-primary-500/20">
              <h4 className="text-xl font-semibold text-primary-400 mb-4">Currently Learning</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['Next.js', 'Svelte.js', 'TypeScript', 'GraphQL'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

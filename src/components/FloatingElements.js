'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Geometric Shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5
          }}
          className={`absolute w-4 h-4 ${
            i % 3 === 0 ? 'bg-primary-500/20' : 
            i % 3 === 1 ? 'bg-purple-500/20' : 'bg-cyan-500/20'
          } ${
            i % 4 === 0 ? 'rounded-full' : 
            i % 4 === 1 ? 'rounded-none rotate-45' : 
            i % 4 === 2 ? 'rounded-lg' : 'rounded-full'
          }`}
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
        />
      ))}

      {/* Glowing Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0],
            scale: [0.8, 1.5, 0.8],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary-400/10 to-purple-400/10 blur-xl"
          style={{
            left: `${(i * 15) % 90}%`,
            top: `${(i * 20) % 90}%`,
          }}
        />
      ))}

      {/* Code-like Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`code-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
            y: [0, -200],
            x: [-50, 50]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
          className="absolute text-primary-400/20 font-mono text-xs"
          style={{
            left: `${20 + (i * 10) % 60}%`,
            top: `${80 + (i * 5) % 20}%`,
          }}
        >
          {['<div>', '</>', '{}', '[]', '()', 'fn()', 'const', 'let'][i]}
        </motion.div>
      ))}

      {/* Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${(i * 7) % 100}%`}
            y1={`${(i * 11) % 100}%`}
            x2={`${((i + 1) * 7) % 100}%`}
            y2={`${((i + 1) * 11) % 100}%`}
            stroke="url(#gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.3, 0] 
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
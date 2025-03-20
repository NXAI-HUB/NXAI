import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
                <span className="block text-white">The Future of</span>
                <span className="block gradient-text mt-2">AI-Powered Predictions</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                NXAI seamlessly integrates advanced artificial intelligence with blockchain 
                technology to revolutionize prediction markets and deliver actionable insights.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/markets" className="btn-primary">
                  Explore Markets
                </Link>
                <Link href="/about" className="btn-outline">
                  Learn More
                </Link>
              </div>
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-gray-800"></div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-gray-400">
                  Join <span className="text-white font-semibold">5,000+</span> users already using NXAI
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  y: [0, -10, 0, -10, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <div className="w-96 h-96 relative">
                  {/* Replace this with actual 3D visualization of the NXAI logo/platform */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-20 animate-pulse-slow"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-40 animate-pulse-slow"></div>
                  <div className="absolute inset-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-60 animate-pulse-slow"></div>
                  <div className="absolute inset-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-80 animate-pulse-slow"></div>
                  <div className="absolute inset-32 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-100 animate-pulse-slow"></div>
                </div>
              </motion.div>
              
              {/* Floating UI elements */}
              <motion.div 
                className="absolute top-1/4 -left-4 glass-effect p-4 rounded-lg w-48"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="ml-2 text-xs text-white font-medium">BTC Prediction</p>
                </div>
                <p className="text-sm font-bold text-white mt-1">+12.5%</p>
                <p className="text-xs text-gray-400">Confidence: 85%</p>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 -right-4 glass-effect p-4 rounded-lg w-48"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <p className="ml-2 text-xs text-white font-medium">ETH Prediction</p>
                </div>
                <p className="text-sm font-bold text-white mt-1">-3.2%</p>
                <p className="text-xs text-gray-400">Confidence: 72%</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AIDemo() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                AI-Powered Market Insights
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Our state-of-the-art AI models analyze vast amounts of market data to provide accurate predictions.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Real-time market sentiment analysis',
                  'Price movement predictions with probability indicators',
                  'Pattern recognition for market cycles',
                  'Anomaly detection for market-moving events',
                  'Personalized insights based on your portfolio'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="h-6 w-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <button className="btn-primary">
                  Try Demo
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Interactive Demo */}
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <motion.div
              className="relative glass-effect rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="p-1 bg-gradient-to-r from-primary to-accent rounded-t-xl">
                <div className="flex items-center px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium text-white">NXAI Insight Engine</div>
                </div>
              </div>

              <div className="p-6">
                {/* Mock AI Analysis Interface */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="card p-4">
                    <h4 className="text-sm font-medium text-gray-400">Market Sentiment</h4>
                    <div className="mt-2 flex items-center">
                      <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-2 text-green-400 font-medium">67%</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-400">Bullish sentiment increasing</p>
                  </div>
                  
                  <div className="card p-4">
                    <h4 className="text-sm font-medium text-gray-400">Volume Analysis</h4>
                    <div className="mt-2 flex items-center">
                      <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-accent to-blue-500 rounded-full"></div>
                      </div>
                      <span className="ml-2 text-accent font-medium">75%</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-400">Above average volume detected</p>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="relative bg-background-dark/50 rounded-lg p-4 h-64">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Mock Chart UI */}
                    <div className="w-full h-full flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="text-white font-medium">BTC/USD</span>
                          <span className="ml-2 text-green-400">$42,568.32</span>
                          <span className="ml-2 text-green-400 text-sm">+2.4%</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-2 py-1 text-xs bg-background-light rounded">1H</button>
                          <button className="px-2 py-1 text-xs bg-primary/30 text-primary rounded">1D</button>
                          <button className="px-2 py-1 text-xs bg-background-light rounded">1W</button>
                          <button className="px-2 py-1 text-xs bg-background-light rounded">1M</button>
                        </div>
                      </div>
                      
                      {/* Simple mock chart line */}
                      <div className="flex-grow relative">
                        <svg className="w-full h-full" viewBox="0 0 100 40">
                          <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          
                          {/* Area fill */}
                          <path 
                            d="M0,35 L5,32 L10,33 L15,30 L20,31 L25,29 L30,25 L35,24 L40,26 L45,24 L50,20 L55,18 L60,16 L65,18 L70,15 L75,14 L80,10 L85,12 L90,8 L95,10 L100,5 L100,40 L0,40 Z"
                            fill="url(#chartGradient)" 
                          />
                          
                          {/* Line */}
                          <path 
                            d="M0,35 L5,32 L10,33 L15,30 L20,31 L25,29 L30,25 L35,24 L40,26 L45,24 L50,20 L55,18 L60,16 L65,18 L70,15 L75,14 L80,10 L85,12 L90,8 L95,10 L100,5"
                            strokeWidth="2" 
                            stroke="#00C2FF" 
                            fill="none" 
                          />
                          
                          {/* Prediction zone */}
                          <path 
                            d="M80,10 L85,12 L90,8 L95,10 L100,5" 
                            strokeWidth="2" 
                            stroke="#FF007A" 
                            strokeDasharray="2 2"
                            fill="none" 
                          />
                          
                          {/* Indicator circles */}
                          <circle cx="80" cy="10" r="2" fill="#FFFFFF" />
                          <circle cx="100" cy="5" r="2" fill="#FF007A" />
                        </svg>
                        
                        {/* AI Prediction Indicator */}
                        <div className="absolute top-2 right-2 glass-effect p-2 rounded-lg text-xs">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <span className="ml-1 text-white">AI Prediction</span>
                          </div>
                          <div className="mt-1 flex items-center text-secondary font-bold">
                            <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <span>+4.8%</span>
                            <span className="ml-1 text-gray-400 font-normal">(24h)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="ml-3">
                      <p className="text-sm text-primary font-medium">AI Analysis suggests strong upward momentum.</p>
                      <p className="mt-1 text-xs text-gray-400">Based on increasing volume, positive market sentiment, and key technical indicators forming bullish patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
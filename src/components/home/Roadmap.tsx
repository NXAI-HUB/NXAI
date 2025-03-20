import { motion } from 'framer-motion'

const roadmapSteps = [
  {
    phase: 'Phase 1',
    title: 'Foundation & MVP',
    timeframe: 'Q2-Q3 2025',
    description: 'Build core AI models and initial platform infrastructure.',
    features: [
      'NXAI Insight Engine Alpha',
      'Web application with core functionality',
      'Basic prediction creation interface',
      'Token staking mechanism',
      'Community building initiatives'
    ],
    status: 'current'
  },
  {
    phase: 'Phase 2',
    title: 'Platform Launch',
    timeframe: 'Q4 2025',
    description: 'Expand core features and release public beta.',
    features: [
      'Comprehensive prediction marketplace',
      'Portfolio tracking integration',
      'Mobile-responsive web application',
      'User reputation system',
      'Strategic partnerships'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase 3',
    title: 'Token Launch & Growth',
    timeframe: 'Q1 2026',
    description: 'Launch NXAI token and expand ecosystem.',
    features: [
      'Full platform launch',
      'Advanced prediction market tools',
      'Enhanced AI insights with alerts',
      'Community-driven prediction categories',
      'Initial governance functionality'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem Expansion',
    timeframe: 'Q2-Q3 2026',
    description: 'Expand to mobile and develop advanced features.',
    features: [
      'NXAI Mobile App (iOS and Android)',
      'Advanced Portfolio Integration',
      'API access for developers',
      'Additional prediction categories',
      'Enhanced governance dashboard'
    ],
    status: 'upcoming'
  },
]

export default function Roadmap() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Product Roadmap
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Our journey to revolutionize prediction markets with AI and blockchain technology.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 hidden md:block"></div>

          {/* Roadmap Steps */}
          <div className="relative space-y-12">
            {roadmapSteps.map((step, index) => (
              <motion.div 
                key={step.phase}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`card p-6 md:p-8 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  } ${
                    step.status === 'current' ? 'border-2 border-primary' : ''
                  }`}>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      step.status === 'current' ? 'bg-primary/30 text-primary' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {step.phase} • {step.timeframe}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-gray-400">{step.description}</p>
                    
                    <ul className={`mt-4 space-y-2 ${
                      index % 2 === 0 ? 'md:ml-auto md:text-right' : ''
                    }`}>
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className={`w-1 h-1 rounded-full ${
                            step.status === 'current' ? 'bg-primary' : 'bg-gray-600'
                          } mr-2`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Dot in the middle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 rounded-full border-4 border-background hidden md:flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${
                      step.status === 'current' ? 'bg-primary' : 'bg-gray-600'
                    }`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Final section - Join the journey */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-white">Join Us on This Journey</h3>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Be part of the revolution in AI-powered prediction markets. Stay updated with our progress 
              and get early access to platform features.
            </p>
            <div className="mt-8">
              <button className="btn-outline">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
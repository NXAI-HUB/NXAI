import { motion } from 'framer-motion'

// AI Model metrics data
const models = [
  {
    id: 1,
    name: 'NX-Predictor',
    type: 'Price Prediction',
    accuracy: 87.4,
    dataPoints: '1.2M',
    updated: '2 hours ago',
    capabilities: [
      'Short-term price movement prediction',
      'Market trend identification',
      'Support/resistance level detection',
    ],
    status: 'operational'
  },
  {
    id: 2,
    name: 'NX-Sentiment',
    type: 'Market Sentiment',
    accuracy: 91.2,
    dataPoints: '3.5M',
    updated: '1 hour ago',
    capabilities: [
      'Social media sentiment analysis',
      'News impact assessment',
      'Community reaction prediction',
    ],
    status: 'operational'
  },
  {
    id: 3,
    name: 'NX-Correlator',
    type: 'Asset Correlation',
    accuracy: 82.9,
    dataPoints: '845K',
    updated: '4 hours ago',
    capabilities: [
      'Cross-asset correlation mapping',
      'Market sector relationship analysis',
      'Divergence detection',
    ],
    status: 'operational'
  },
]

export default function AIModelOverview() {
  return (
    <section className="relative">
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold text-white">Our AI Models</h2>
        <p className="mt-2 text-gray-400">
          Cutting-edge machine learning models powering NXAI predictions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <motion.div
            key={model.id}
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6 border-b border-gray-800">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white">{model.name}</h3>
                  <p className="text-sm text-gray-400">{model.type}</p>
                </div>
                <div className={`px-2 py-1 text-xs rounded-full ${
                  model.status === 'operational' 
                    ? 'bg-green-900/30 text-green-400' 
                    : 'bg-yellow-900/30 text-yellow-400'
                }`}>
                  {model.status}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Accuracy</span>
                  <span className="text-xs font-medium text-white">{model.accuracy}%</span>
                </div>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    style={{ width: `${model.accuracy}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div className="bg-background-dark/50 rounded-lg p-3">
                  <p className="text-xs text-gray-400">Data Points</p>
                  <p className="text-lg font-medium text-white">{model.dataPoints}</p>
                </div>
                <div className="bg-background-dark/50 rounded-lg p-3">
                  <p className="text-xs text-gray-400">Last Updated</p>
                  <p className="text-sm font-medium text-white">{model.updated}</p>
                </div>
              </div>

              <h4 className="text-sm font-medium text-white mb-2">Key Capabilities</h4>
              <ul className="space-y-2">
                {model.capabilities.map((capability, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 border-t border-gray-800 bg-background-dark/30">
              <button className="w-full text-center text-accent text-sm hover:underline">
                View Detailed Performance
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 
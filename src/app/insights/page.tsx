import InsightsDashboard from '@/components/insights/InsightsDashboard'
import AIModelOverview from '@/components/insights/AIModelOverview'
import InsightsTrending from '@/components/insights/InsightsTrending'

export const metadata = {
  title: 'AI Insights | NXAI',
  description: 'Access real-time AI-powered market insights, sentiment analysis, and price movement predictions across crypto assets.',
}

export default function InsightsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white">
            AI-Powered Market <span className="gradient-text">Insights</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Leverage our advanced AI models to gain predictive insights across markets
          </p>
        </div>
        
        <div className="space-y-12">
          <InsightsDashboard />
          <AIModelOverview />
          <InsightsTrending />
        </div>
      </div>
    </div>
  )
} 
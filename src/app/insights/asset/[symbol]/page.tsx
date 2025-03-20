import { Metadata } from 'next';
import AIModelOverview from '@/components/insights/AIModelOverview';
import AssetDetails from '@/components/insights/AssetDetails';
import PriceChart from '@/components/insights/PriceChart';
import PredictionMetrics from '@/components/insights/PredictionMetrics';
import RelatedAssets from '@/components/insights/RelatedAssets';

export const metadata: Metadata = {
  title: 'Asset Insights | NXAI',
  description: 'Detailed AI insights and predictions for specific crypto assets',
};

interface AssetInsightsPageProps {
  params: {
    symbol: string;
  };
}

export default function AssetInsightsPage({ params }: AssetInsightsPageProps) {
  const { symbol } = params;
  const decodedSymbol = decodeURIComponent(symbol);
  
  return (
    <main className="flex-1 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AssetDetails symbol={decodedSymbol} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-display font-bold text-white">Price Chart & Predictions</h2>
              </div>
              <div className="p-6">
                <PriceChart symbol={decodedSymbol} />
              </div>
            </div>
            
            <div className="mt-8 card">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-display font-bold text-white">Prediction Metrics</h2>
              </div>
              <div className="p-6">
                <PredictionMetrics symbol={decodedSymbol} />
              </div>
            </div>
          </div>
          
          <div>
            <div className="card">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-display font-bold text-white">AI Model Overview</h2>
              </div>
              <div className="p-6">
                <AIModelOverview symbol={decodedSymbol} />
              </div>
            </div>
            
            <div className="mt-8 card">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-display font-bold text-white">Related Assets</h2>
              </div>
              <div className="p-6">
                <RelatedAssets symbol={decodedSymbol} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
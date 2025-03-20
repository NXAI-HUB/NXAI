interface PredictionMetricsProps {
  symbol: string;
}

export default function PredictionMetrics({ symbol }: PredictionMetricsProps) {
  // Mock data based on symbol
  const metrics = {
    shortTerm: {
      prediction: symbol === 'BTC' ? 'Bullish' : 
                  symbol === 'ETH' ? 'Neutral' :
                  symbol === 'SOL' ? 'Strongly Bullish' :
                  symbol === 'LINK' ? 'Bullish' :
                  symbol === 'AVAX' ? 'Bearish' : 'Neutral',
      confidence: symbol === 'BTC' ? 87 :
                  symbol === 'ETH' ? 82 :
                  symbol === 'SOL' ? 76 :
                  symbol === 'LINK' ? 79 :
                  symbol === 'AVAX' ? 72 : 50,
      priceTarget: symbol === 'BTC' ? 67500 :
                   symbol === 'ETH' ? 3450 :
                   symbol === 'SOL' ? 170 :
                   symbol === 'LINK' ? 21 :
                   symbol === 'AVAX' ? 35 : 100,
    },
    mediumTerm: {
      prediction: symbol === 'BTC' ? 'Strongly Bullish' : 
                  symbol === 'ETH' ? 'Bullish' :
                  symbol === 'SOL' ? 'Bullish' :
                  symbol === 'LINK' ? 'Strongly Bullish' :
                  symbol === 'AVAX' ? 'Neutral' : 'Neutral',
      confidence: symbol === 'BTC' ? 78 :
                  symbol === 'ETH' ? 75 :
                  symbol === 'SOL' ? 68 :
                  symbol === 'LINK' ? 72 :
                  symbol === 'AVAX' ? 65 : 45,
      priceTarget: symbol === 'BTC' ? 75000 :
                   symbol === 'ETH' ? 4200 :
                   symbol === 'SOL' ? 210 :
                   symbol === 'LINK' ? 28 :
                   symbol === 'AVAX' ? 45 : 120,
    },
    keyFactors: [
      {
        name: 'Market Sentiment',
        value: symbol === 'BTC' ? 85 :
               symbol === 'ETH' ? 72 :
               symbol === 'SOL' ? 88 :
               symbol === 'LINK' ? 80 :
               symbol === 'AVAX' ? 65 : 50,
        impact: 'high'
      },
      {
        name: 'On-Chain Activity',
        value: symbol === 'BTC' ? 78 :
               symbol === 'ETH' ? 82 :
               symbol === 'SOL' ? 75 :
               symbol === 'LINK' ? 70 :
               symbol === 'AVAX' ? 68 : 50,
        impact: 'medium'
      },
      {
        name: 'Developer Activity',
        value: symbol === 'BTC' ? 65 :
               symbol === 'ETH' ? 90 :
               symbol === 'SOL' ? 85 :
               symbol === 'LINK' ? 75 :
               symbol === 'AVAX' ? 80 : 50,
        impact: 'medium'
      },
      {
        name: 'Correlation BTC',
        value: symbol === 'BTC' ? 100 :
               symbol === 'ETH' ? 85 :
               symbol === 'SOL' ? 78 :
               symbol === 'LINK' ? 75 :
               symbol === 'AVAX' ? 82 : 70,
        impact: 'low'
      }
    ],
    correlatedAssets: [
      { symbol: 'BTC', correlation: symbol === 'BTC' ? 100 : symbol === 'ETH' ? 85 : symbol === 'SOL' ? 78 : 75 },
      { symbol: 'ETH', correlation: symbol === 'BTC' ? 85 : symbol === 'ETH' ? 100 : symbol === 'SOL' ? 80 : 72 },
      { symbol: 'SOL', correlation: symbol === 'BTC' ? 78 : symbol === 'ETH' ? 80 : symbol === 'SOL' ? 100 : 65 },
    ],
  };

  // Helper functions
  const getPredictionColorClass = (prediction: string) => {
    switch (prediction) {
      case 'Strongly Bullish':
        return 'text-green-400';
      case 'Bullish':
        return 'text-green-500';
      case 'Neutral':
        return 'text-yellow-400';
      case 'Bearish':
        return 'text-red-500';
      case 'Strongly Bearish':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: value > 1000 ? 0 : 2,
    }).format(value);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-primary';
      case 'medium':
        return 'bg-blue-500';
      case 'low':
        return 'bg-gray-500';
      default:
        return 'bg-gray-700';
    }
  };

  const getCorrelationColor = (value: number) => {
    if (value === 100) return 'text-white';
    if (value >= 80) return 'text-green-500';
    if (value >= 60) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Short Term Prediction */}
        <div className="bg-gray-900/50 rounded-lg p-5">
          <h3 className="text-white text-lg font-medium mb-4">Short Term (7 Days)</h3>
          
          <div className="mb-3">
            <div className="text-gray-400 text-sm mb-1">Prediction</div>
            <div className={`text-lg font-semibold ${getPredictionColorClass(metrics.shortTerm.prediction)}`}>
              {metrics.shortTerm.prediction}
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Confidence</span>
              <span className="text-primary">{metrics.shortTerm.confidence}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${metrics.shortTerm.confidence}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="text-gray-400 text-sm mb-1">Price Target</div>
            <div className="text-lg font-semibold text-white">
              {formatUSD(metrics.shortTerm.priceTarget)}
            </div>
          </div>
        </div>
        
        {/* Medium Term Prediction */}
        <div className="bg-gray-900/50 rounded-lg p-5">
          <h3 className="text-white text-lg font-medium mb-4">Medium Term (30 Days)</h3>
          
          <div className="mb-3">
            <div className="text-gray-400 text-sm mb-1">Prediction</div>
            <div className={`text-lg font-semibold ${getPredictionColorClass(metrics.mediumTerm.prediction)}`}>
              {metrics.mediumTerm.prediction}
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Confidence</span>
              <span className="text-primary">{metrics.mediumTerm.confidence}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${metrics.mediumTerm.confidence}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="text-gray-400 text-sm mb-1">Price Target</div>
            <div className="text-lg font-semibold text-white">
              {formatUSD(metrics.mediumTerm.priceTarget)}
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Factors */}
      <div className="mt-6 bg-gray-900/50 rounded-lg p-5">
        <h3 className="text-white text-lg font-medium mb-4">Key Factors</h3>
        
        <div className="space-y-4">
          {metrics.keyFactors.map((factor, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">{factor.name}</span>
                <div className="flex items-center">
                  <span className="text-white mr-2">{factor.value}%</span>
                  <span className={`inline-block w-2 h-2 rounded-full ${getImpactColor(factor.impact)}`}></span>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-primary" 
                  style={{ width: `${factor.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-3 text-xs text-gray-500">
          <span className="inline-flex items-center mr-3">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-1"></span>
            High Impact
          </span>
          <span className="inline-flex items-center mr-3">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
            Medium Impact
          </span>
          <span className="inline-flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-gray-500 mr-1"></span>
            Low Impact
          </span>
        </div>
      </div>
      
      {/* Correlated Assets */}
      <div className="mt-6 bg-gray-900/50 rounded-lg p-5">
        <h3 className="text-white text-lg font-medium mb-4">Asset Correlations</h3>
        
        <div className="space-y-2">
          {metrics.correlatedAssets.map((asset, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
              <span className="text-white">{asset.symbol}</span>
              <span className={`font-medium ${getCorrelationColor(asset.correlation)}`}>
                {asset.correlation}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
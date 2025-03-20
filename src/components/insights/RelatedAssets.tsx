interface RelatedAssetsProps {
  symbol: string;
}

export default function RelatedAssets({ symbol }: RelatedAssetsProps) {
  // Mock data for related assets based on the current symbol
  const assets = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 63542.18,
      change24h: 2.4,
      correlation: symbol === 'BTC' ? 100 : 
                  symbol === 'ETH' ? 85 : 
                  symbol === 'SOL' ? 78 :
                  symbol === 'LINK' ? 75 :
                  symbol === 'AVAX' ? 82 : 70,
      prediction: 'bullish'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 3345.92,
      change24h: -1.2,
      correlation: symbol === 'BTC' ? 85 : 
                   symbol === 'ETH' ? 100 : 
                   symbol === 'SOL' ? 80 :
                   symbol === 'LINK' ? 82 :
                   symbol === 'AVAX' ? 75 : 65,
      prediction: 'neutral'
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: 142.78,
      change24h: 5.7,
      correlation: symbol === 'BTC' ? 78 : 
                   symbol === 'ETH' ? 80 : 
                   symbol === 'SOL' ? 100 :
                   symbol === 'LINK' ? 72 :
                   symbol === 'AVAX' ? 70 : 60,
      prediction: 'strongly_bullish'
    },
    {
      symbol: 'LINK',
      name: 'Chainlink',
      price: 18.45,
      change24h: 3.1,
      correlation: symbol === 'BTC' ? 75 : 
                   symbol === 'ETH' ? 82 : 
                   symbol === 'SOL' ? 72 :
                   symbol === 'LINK' ? 100 :
                   symbol === 'AVAX' ? 68 : 55,
      prediction: 'bullish'
    },
    {
      symbol: 'AVAX',
      name: 'Avalanche',
      price: 36.92,
      change24h: -0.8,
      correlation: symbol === 'BTC' ? 82 : 
                   symbol === 'ETH' ? 75 : 
                   symbol === 'SOL' ? 70 :
                   symbol === 'LINK' ? 68 :
                   symbol === 'AVAX' ? 100 : 50,
      prediction: 'bearish'
    }
  ];

  // Filter out the current symbol
  const relatedAssets = assets.filter(asset => asset.symbol !== symbol);

  // Sort by correlation (highest first)
  const sortedAssets = relatedAssets.sort((a, b) => b.correlation - a.correlation);

  // Format currency
  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: value > 1000 ? 0 : 2,
    }).format(value);
  };

  // Get prediction icon and color
  const getPredictionInfo = (prediction: string) => {
    switch (prediction) {
      case 'strongly_bullish':
        return { color: 'text-green-400', icon: '↑↑' };
      case 'bullish':
        return { color: 'text-green-500', icon: '↑' };
      case 'neutral':
        return { color: 'text-yellow-400', icon: '→' };
      case 'bearish':
        return { color: 'text-red-500', icon: '↓' };
      case 'strongly_bearish':
        return { color: 'text-red-400', icon: '↓↓' };
      default:
        return { color: 'text-gray-400', icon: '→' };
    }
  };

  return (
    <div className="space-y-4">
      {sortedAssets.slice(0, 4).map((asset) => {
        const predictionInfo = getPredictionInfo(asset.prediction);
        return (
          <a 
            key={asset.symbol}
            href={`/insights/asset/${asset.symbol}`}
            className="block bg-gray-900/30 hover:bg-gray-900/60 rounded-lg p-4 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-primary">{asset.symbol.substring(0, 1)}</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="text-white font-medium">{asset.name}</span>
                    <span className="text-gray-500 text-sm ml-1">({asset.symbol})</span>
                  </div>
                  <div className="flex items-center mt-0.5">
                    <span className="text-sm text-gray-400">{formatUSD(asset.price)}</span>
                    <span className={`ml-2 text-xs ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <div className={`text-sm font-medium ${predictionInfo.color}`}>
                  {predictionInfo.icon}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {asset.correlation}% corr
                </div>
              </div>
            </div>
          </a>
        );
      })}
      
      <a 
        href="/insights"
        className="block text-center text-primary text-sm py-2 hover:underline"
      >
        View All Assets
      </a>
    </div>
  );
} 
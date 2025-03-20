interface AssetDetailsProps {
  symbol: string;
}

export default function AssetDetails({ symbol }: AssetDetailsProps) {
  // Mock data for the component
  const assetData = {
    symbol,
    name: symbol === 'BTC' ? 'Bitcoin' : 
           symbol === 'ETH' ? 'Ethereum' :
           symbol === 'SOL' ? 'Solana' :
           symbol === 'LINK' ? 'Chainlink' : 
           symbol === 'AVAX' ? 'Avalanche' : 'Unknown Asset',
    price: symbol === 'BTC' ? 63542.18 :
           symbol === 'ETH' ? 3345.92 :
           symbol === 'SOL' ? 142.78 :
           symbol === 'LINK' ? 18.45 :
           symbol === 'AVAX' ? 36.92 : 100.00,
    change24h: symbol === 'BTC' ? 2.4 :
               symbol === 'ETH' ? -1.2 :
               symbol === 'SOL' ? 5.7 :
               symbol === 'LINK' ? 3.1 :
               symbol === 'AVAX' ? -0.8 : 0,
    marketCap: symbol === 'BTC' ? 1245000000000 :
               symbol === 'ETH' ? 401000000000 :
               symbol === 'SOL' ? 62000000000 :
               symbol === 'LINK' ? 10500000000 :
               symbol === 'AVAX' ? 13200000000 : 1000000000,
    volume24h: symbol === 'BTC' ? 28500000000 :
               symbol === 'ETH' ? 12700000000 :
               symbol === 'SOL' ? 3400000000 :
               symbol === 'LINK' ? 650000000 :
               symbol === 'AVAX' ? 890000000 : 100000000,
    aiConfidence: symbol === 'BTC' ? 87 :
                  symbol === 'ETH' ? 82 :
                  symbol === 'SOL' ? 76 :
                  symbol === 'LINK' ? 79 :
                  symbol === 'AVAX' ? 72 : 50,
    predictionTrend: symbol === 'BTC' ? 'bullish' :
                     symbol === 'ETH' ? 'neutral' :
                     symbol === 'SOL' ? 'strongly_bullish' :
                     symbol === 'LINK' ? 'bullish' :
                     symbol === 'AVAX' ? 'bearish' : 'neutral',
    predictedHighLow: {
      high: symbol === 'BTC' ? 68500 :
            symbol === 'ETH' ? 3550 :
            symbol === 'SOL' ? 165.25 :
            symbol === 'LINK' ? 21.40 :
            symbol === 'AVAX' ? 39.75 : 110,
      low: symbol === 'BTC' ? 58750 :
           symbol === 'ETH' ? 3120 :
           symbol === 'SOL' ? 132.50 :
           symbol === 'LINK' ? 17.80 :
           symbol === 'AVAX' ? 33.20 : 90,
    }
  };

  // Format functions
  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: value > 1000 ? 0 : 2,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const formatLargeNumber = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return formatUSD(value);
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'strongly_bullish':
        return 'text-green-400';
      case 'bullish':
        return 'text-green-500';
      case 'neutral':
        return 'text-yellow-400';
      case 'bearish':
        return 'text-red-500';
      case 'strongly_bearish':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getTrendText = (trend: string) => {
    switch (trend) {
      case 'strongly_bullish':
        return 'Strongly Bullish';
      case 'bullish':
        return 'Bullish';
      case 'neutral':
        return 'Neutral';
      case 'bearish':
        return 'Bearish';
      case 'strongly_bearish':
        return 'Strongly Bearish';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="card">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-primary">{symbol.substring(0, 1)}</span>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-white">{assetData.name} ({symbol})</h1>
              <div className="flex items-center mt-1">
                <span className="text-xl font-semibold">{formatUSD(assetData.price)}</span>
                <span className={`ml-2 ${assetData.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {assetData.change24h >= 0 ? '+' : ''}{assetData.change24h.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">AI Prediction:</span>
              <span className={`font-semibold ${getTrendColor(assetData.predictionTrend)}`}>
                {getTrendText(assetData.predictionTrend)}
              </span>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-gray-400 mr-2">Model Confidence:</span>
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${assetData.aiConfidence}%` }}
                ></div>
              </div>
              <span className="ml-2 text-primary font-semibold">{assetData.aiConfidence}%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="card bg-gray-900/50">
            <div className="p-4">
              <div className="text-gray-400 text-sm">Market Cap</div>
              <div className="text-white font-semibold mt-1">{formatLargeNumber(assetData.marketCap)}</div>
            </div>
          </div>
          
          <div className="card bg-gray-900/50">
            <div className="p-4">
              <div className="text-gray-400 text-sm">24h Volume</div>
              <div className="text-white font-semibold mt-1">{formatLargeNumber(assetData.volume24h)}</div>
            </div>
          </div>
          
          <div className="card bg-gray-900/50">
            <div className="p-4">
              <div className="text-gray-400 text-sm">Predicted High (24h)</div>
              <div className="text-green-500 font-semibold mt-1">{formatUSD(assetData.predictedHighLow.high)}</div>
            </div>
          </div>
          
          <div className="card bg-gray-900/50">
            <div className="p-4">
              <div className="text-gray-400 text-sm">Predicted Low (24h)</div>
              <div className="text-red-500 font-semibold mt-1">{formatUSD(assetData.predictedHighLow.low)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
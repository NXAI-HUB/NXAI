interface PriceChartProps {
  symbol: string;
}

export default function PriceChart({ symbol }: PriceChartProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="mb-4 sm:mb-0">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              <button className="px-3 py-1 rounded-md text-sm font-medium text-primary bg-primary/10 border border-primary/20">1D</button>
              <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800">1W</button>
              <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800">1M</button>
              <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800">3M</button>
              <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800">1Y</button>
              <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800">All</button>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md text-sm font-medium text-primary bg-primary/10 border border-primary/20">
            Price
          </button>
          <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800">
            Volume
          </button>
          <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800">
            Prediction
          </button>
        </div>
      </div>
      
      {/* Chart placeholder */}
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-900/50 flex items-center justify-center">
        <div className="w-full h-full px-4 py-6 flex flex-col">
          <div className="flex justify-between mb-4">
            <div className="text-xs text-gray-400">
              <div>Price ({symbol}/USD)</div>
              <div className="text-white text-2xl font-semibold mt-1">
                {symbol === 'BTC' ? '$63,542.18' :
                 symbol === 'ETH' ? '$3,345.92' :
                 symbol === 'SOL' ? '$142.78' :
                 symbol === 'LINK' ? '$18.45' :
                 symbol === 'AVAX' ? '$36.92' : 
                 '$100.00'}
              </div>
            </div>
            <div className="text-xs text-right text-gray-400">
              <div>24h Change</div>
              <div className={`text-lg font-semibold mt-1 ${
                symbol === 'BTC' || symbol === 'SOL' || symbol === 'LINK' ? 'text-green-500' : 
                symbol === 'ETH' || symbol === 'AVAX' ? 'text-red-500' : 
                'text-white'}`}>
                {symbol === 'BTC' ? '+2.4%' :
                 symbol === 'ETH' ? '-1.2%' :
                 symbol === 'SOL' ? '+5.7%' :
                 symbol === 'LINK' ? '+3.1%' :
                 symbol === 'AVAX' ? '-0.8%' : 
                 '0.0%'}
              </div>
            </div>
          </div>
          
          {/* SVG Chart placeholder */}
          <svg
            className="w-full h-full"
            viewBox="0 0 800 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background grid */}
            <g stroke="#1a1a2e" strokeWidth="1">
              <line x1="0" y1="0" x2="800" y2="0" />
              <line x1="0" y1="75" x2="800" y2="75" />
              <line x1="0" y1="150" x2="800" y2="150" />
              <line x1="0" y1="225" x2="800" y2="225" />
              <line x1="0" y1="299" x2="800" y2="299" />
              
              <line x1="0" y1="0" x2="0" y2="300" />
              <line x1="160" y1="0" x2="160" y2="300" />
              <line x1="320" y1="0" x2="320" y2="300" />
              <line x1="480" y1="0" x2="480" y2="300" />
              <line x1="640" y1="0" x2="640" y2="300" />
              <line x1="799" y1="0" x2="799" y2="300" />
            </g>

            {/* Chart gradient */}
            <defs>
              <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={
                  symbol === 'BTC' || symbol === 'SOL' || symbol === 'LINK' ? 'rgba(16, 185, 129, 0.2)' :
                  symbol === 'ETH' || symbol === 'AVAX' ? 'rgba(239, 68, 68, 0.2)' :
                  'rgba(79, 70, 229, 0.2)'
                } />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </linearGradient>
            </defs>
            
            {/* Chart data placeholder for BTC */}
            {symbol === 'BTC' && (
              <>
                <path 
                  d="M0,200 C50,180 100,190 150,170 C200,150 250,160 300,140 C350,120 400,130 450,90 C500,50 550,80 600,60 C650,40 700,50 800,30"
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                />
                <path 
                  d="M0,200 C50,180 100,190 150,170 C200,150 250,160 300,140 C350,120 400,130 450,90 C500,50 550,80 600,60 C650,40 700,50 800,30 L800,300 L0,300 Z"
                  fill="url(#chart-gradient)"
                />
              </>
            )}
            
            {/* Chart data placeholder for ETH */}
            {symbol === 'ETH' && (
              <>
                <path 
                  d="M0,100 C50,120 100,110 150,150 C200,180 250,160 300,180 C350,200 400,190 450,210 C500,220 550,200 600,220 C650,240 700,230 800,250"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                />
                <path 
                  d="M0,100 C50,120 100,110 150,150 C200,180 250,160 300,180 C350,200 400,190 450,210 C500,220 550,200 600,220 C650,240 700,230 800,250 L800,300 L0,300 Z"
                  fill="url(#chart-gradient)"
                />
              </>
            )}
            
            {/* Chart data placeholder for others */}
            {(symbol !== 'BTC' && symbol !== 'ETH') && (
              <>
                <path 
                  d={symbol === 'SOL' || symbol === 'LINK' ? 
                     "M0,180 C50,160 100,170 150,150 C200,130 250,140 300,120 C350,100 400,110 450,70 C500,30 550,60 600,40 C650,20 700,30 800,10" :
                     "M0,120 C50,140 100,130 150,170 C200,190 250,170 300,190 C350,210 400,200 450,220 C500,240 550,220 600,240 C650,260 700,250 800,270"}
                  stroke={symbol === 'SOL' || symbol === 'LINK' ? "#10b981" : "#ef4444"}
                  strokeWidth="2"
                  fill="none"
                />
                <path 
                  d={symbol === 'SOL' || symbol === 'LINK' ? 
                     "M0,180 C50,160 100,170 150,150 C200,130 250,140 300,120 C350,100 400,110 450,70 C500,30 550,60 600,40 C650,20 700,30 800,10 L800,300 L0,300 Z" :
                     "M0,120 C50,140 100,130 150,170 C200,190 250,170 300,190 C350,210 400,200 450,220 C500,240 550,220 600,240 C650,260 700,250 800,270 L800,300 L0,300 Z"}
                  fill="url(#chart-gradient)"
                />
              </>
            )}
            
            {/* AI prediction zone (fictional data) */}
            <path 
              d={symbol === 'BTC' || symbol === 'SOL' || symbol === 'LINK' ? 
                 "M750,50 C770,45 780,40 800,30" :
                 "M750,230 C770,235 780,240 800,250"}
              stroke={symbol === 'BTC' || symbol === 'SOL' || symbol === 'LINK' ? "#10b981" : "#ef4444"}
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            
            {/* Time indicators */}
            <g className="text-xs text-gray-400 fill-current">
              <text x="0" y="320" textAnchor="start">00:00</text>
              <text x="160" y="320" textAnchor="middle">06:00</text>
              <text x="320" y="320" textAnchor="middle">12:00</text>
              <text x="480" y="320" textAnchor="middle">18:00</text>
              <text x="640" y="320" textAnchor="middle">00:00</text>
              <text x="800" y="320" textAnchor="end">06:00</text>
            </g>
          </svg>
        </div>
        
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-gray-800 bg-opacity-80 rounded-md text-xs text-primary">
          AI Prediction
        </div>
      </div>
    </div>
  );
} 
import { motion } from 'framer-motion'

// Sample category data
const categories = [
  { id: 'all', name: 'All Categories', count: 157 },
  { id: 'crypto', name: 'Cryptocurrency', count: 89, active: true },
  { id: 'defi', name: 'DeFi', count: 42 },
  { id: 'nft', name: 'NFTs', count: 23 },
  { id: 'regulation', name: 'Regulation', count: 18 },
  { id: 'tech', name: 'Technology', count: 27 },
  { id: 'adoption', name: 'Adoption', count: 15 },
  { id: 'governance', name: 'Governance', count: 12 },
]

// Sample filter options
const filters = [
  { id: 'trending', name: 'Trending', count: 24 },
  { id: 'featured', name: 'Featured', count: 7 },
  { id: 'recent', name: 'Recently Added', count: 31 },
  { id: 'closing', name: 'Closing Soon', count: 13 },
  { id: 'high-volume', name: 'High Volume', count: 42 },
]

export default function MarketCategories() {
  return (
    <motion.aside
      className="sticky top-24"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card p-5 mb-6">
        <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button className={`w-full flex justify-between items-center p-2 rounded-lg text-left hover:bg-background-light/20 transition-colors ${
                category.active ? 'bg-primary/10 text-primary font-medium' : 'text-gray-300'
              }`}>
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  category.active 
                    ? 'bg-primary/20' 
                    : 'bg-gray-800'
                }`}>
                  {category.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-5 mb-6">
        <h3 className="text-lg font-bold text-white mb-4">Filter By</h3>
        <ul className="space-y-2">
          {filters.map((filter) => (
            <li key={filter.id}>
              <button className="w-full flex justify-between items-center p-2 rounded-lg text-left hover:bg-background-light/20 transition-colors text-gray-300">
                <span>{filter.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-800">
                  {filter.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-5">
        <h3 className="text-lg font-bold text-white mb-4">Market Status</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 bg-background-dark border-gray-700 rounded text-primary focus:ring-primary" checked />
            <span className="ml-2 text-gray-300">Open Markets</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 bg-background-dark border-gray-700 rounded text-primary focus:ring-primary" />
            <span className="ml-2 text-gray-300">Resolved Markets</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 bg-background-dark border-gray-700 rounded text-primary focus:ring-primary" checked />
            <span className="ml-2 text-gray-300">Verified Only</span>
          </label>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-medium text-white mb-2">Time Range</h4>
          <div className="flex space-x-2">
            <select className="flex-grow bg-background-dark border border-gray-700 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-primary">
              <option>All Time</option>
              <option>Past Week</option>
              <option>Past Month</option>
              <option>Past 3 Months</option>
              <option>Past Year</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full btn-primary">
            Apply Filters
          </button>
          <button className="w-full text-center text-gray-400 text-sm mt-2 hover:text-white transition-colors">
            Reset Filters
          </button>
        </div>
      </div>
    </motion.aside>
  )
} 
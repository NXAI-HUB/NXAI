import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'AI researcher with expertise in predictive algorithms and financial market modeling.',
    avatar: '/images/team/avatar-placeholder.png'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'Blockchain engineer specializing in smart contract development and DeFi protocols.',
    avatar: '/images/team/avatar-placeholder.png'
  },
  {
    name: 'Michael Zhang',
    role: 'Head of AI',
    bio: 'PhD in Machine Learning with a focus on time series forecasting and pattern recognition.',
    avatar: '/images/team/avatar-placeholder.png'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Head of Product',
    bio: 'Product leader with experience building and scaling financial technology platforms.',
    avatar: '/images/team/avatar-placeholder.png'
  },
]

export default function Community() {
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
              Join Our Community
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Be part of the growing NXAI ecosystem and contribute to the future of AI-powered predictions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Community Benefits */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Community Benefits</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/20 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Early Token Access</h4>
                  <p className="mt-2 text-gray-400">Community members get priority access to token sales and special allocation pools.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary/20 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Beta Feature Testing</h4>
                  <p className="mt-2 text-gray-400">Help shape the platform by participating in exclusive beta tests of new features.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/20 text-accent">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Governance Participation</h4>
                  <p className="mt-2 text-gray-400">Active community members can propose and vote on platform decisions and features.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link href="https://twitter.com/NX_AI_" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-5 py-3 border border-accent text-base font-medium rounded-md text-accent hover:bg-accent hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Twitter
              </Link>
              <Link href="https://github.com/NXAI-HUB" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-5 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </Link>
            </div>
          </motion.div>

          {/* Right side - Newsletter */}
          <motion.div
            className="glass-effect p-8 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to receive the latest updates, exclusive content, and early access opportunities.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 bg-background-dark border-gray-700 rounded text-primary focus:ring-primary"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-400">
                    I agree to receive updates and marketing communications from NXAI
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="pt-16 border-t border-gray-800">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-white">Meet Our Team</h3>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              The passionate individuals behind NXAI working to revolutionize prediction markets.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <h4 className="mt-4 text-xl font-bold text-white">{member.name}</h4>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
import { motion } from 'framer-motion'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { TrendingUp, Users, Zap, Globe } from 'lucide-react'

const DataInsightsSection = () => {
  // Sample data for charts
  const performanceData = [
    { month: 'Jan', accuracy: 92, speed: 85, efficiency: 88 },
    { month: 'Feb', accuracy: 94, speed: 87, efficiency: 90 },
    { month: 'Mar', accuracy: 96, speed: 89, efficiency: 92 },
    { month: 'Apr', accuracy: 97, speed: 91, efficiency: 94 },
    { month: 'May', accuracy: 98, speed: 93, efficiency: 96 },
    { month: 'Jun', accuracy: 99, speed: 95, efficiency: 98 }
  ]

  const usageData = [
    { name: 'Machine Learning', value: 35, color: '#3B82F6' },
    { name: 'Data Analytics', value: 25, color: '#8B5CF6' },
    { name: 'Automation', value: 20, color: '#10B981' },
    { name: 'Prediction', value: 20, color: '#F59E0B' }
  ]

  const growthData = [
    { quarter: 'Q1 2023', users: 2500, revenue: 125000 },
    { quarter: 'Q2 2023', users: 4200, revenue: 210000 },
    { quarter: 'Q3 2023', users: 6800, revenue: 340000 },
    { quarter: 'Q4 2023', users: 10500, revenue: 525000 },
    { quarter: 'Q1 2024', users: 15200, revenue: 760000 },
    { quarter: 'Q2 2024', users: 22000, revenue: 1100000 }
  ]

  const stats = [
    {
      icon: TrendingUp,
      title: "Performance Boost",
      value: "340%",
      description: "Average improvement in processing speed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Active Users",
      value: "22K+",
      description: "Companies using our AI solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Data Processed",
      value: "1.2PB",
      description: "Total data processed monthly",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      value: "150+",
      description: "Countries with active deployments",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="data-insights" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 px-4 py-2 rounded-full border border-green-500/30 mb-6">
            <BarChart className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Data-Driven Insights</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-green-600 bg-clip-text text-transparent">
              Real-World Performance Data
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how our AI platform delivers measurable results across industries. 
            These insights showcase the tangible impact of our technology on business operations.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">{stat.value}</div>
              <div className="font-medium mb-1">{stat.title}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">AI Performance Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="accuracy" fill="#3B82F6" name="Accuracy %" />
                <Bar dataKey="speed" fill="#8B5CF6" name="Speed %" />
                <Bar dataKey="efficiency" fill="#10B981" name="Efficiency %" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Usage Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">AI Usage Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={usageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {usageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-6">Platform Growth & Revenue</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="users" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Active Users"
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="revenue" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Revenue ($)"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  )
}

export default DataInsightsSection


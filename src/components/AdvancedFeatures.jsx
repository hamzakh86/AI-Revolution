import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Zap, 
  Shield,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const AdvancedFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const features = [
    {
      icon: Brain,
      title: "Neural Network Architecture",
      description: "Advanced deep learning models with transformer architecture for superior performance",
      details: [
        "Multi-layer perceptron networks",
        "Convolutional neural networks", 
        "Recurrent neural networks",
        "Attention mechanisms"
      ],
      color: "from-blue-500 to-cyan-500",
      stats: { accuracy: "99.7%", speed: "2.3ms", efficiency: "94%" }
    },
    {
      icon: Cpu,
      title: "Edge Computing Integration",
      description: "Distributed processing across edge devices for minimal latency and maximum efficiency",
      details: [
        "Real-time edge inference",
        "Federated learning support",
        "Local data processing", 
        "Offline capabilities"
      ],
      color: "from-purple-500 to-pink-500",
      stats: { latency: "0.8ms", nodes: "10K+", uptime: "99.9%" }
    },
    {
      icon: Database,
      title: "Intelligent Data Pipeline",
      description: "Automated data ingestion, cleaning, and preprocessing with smart quality controls",
      details: [
        "Automated data validation",
        "Real-time data streaming",
        "Smart data transformation",
        "Quality assurance checks"
      ],
      color: "from-green-500 to-emerald-500",
      stats: { throughput: "1TB/h", accuracy: "99.5%", sources: "500+" }
    },
    {
      icon: Network,
      title: "Distributed Architecture", 
      description: "Scalable microservices architecture with automatic load balancing and failover",
      details: [
        "Kubernetes orchestration",
        "Auto-scaling capabilities",
        "Load balancing",
        "Fault tolerance"
      ],
      color: "from-orange-500 to-red-500",
      stats: { scale: "Auto", regions: "15", availability: "99.99%" }
    }
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, features.length])

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Cpu className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Advanced Technology</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent">
              Next-Generation AI Infrastructure
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the cutting-edge technologies that power our AI platform. From neural networks to edge computing, 
            discover how we deliver unmatched performance and reliability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Core Technologies</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="flex items-center space-x-2"
              >
                {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isAutoPlay ? 'Pause' : 'Play'}</span>
              </Button>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'border-purple-500/50 bg-purple-500/10' 
                    : 'border-border hover:border-purple-500/30'
                }`}
                onClick={() => {
                  setActiveFeature(index)
                  setIsAutoPlay(false)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                    activeFeature === index ? 'rotate-90 text-purple-500' : 'text-muted-foreground'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${features[activeFeature].color} mb-6`}>
                  <features[activeFeature].icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {features[activeFeature].description}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Key Capabilities
                  </h4>
                  {features[activeFeature].details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: detailIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {Object.entries(features[activeFeature].stats).map(([key, value], statIndex) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: statIndex * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex space-x-2 mt-6 justify-center">
              {features.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeFeature === index ? 'w-8 bg-purple-500' : 'w-2 bg-muted'
                  }`}
                  onClick={() => {
                    setActiveFeature(index)
                    setIsAutoPlay(false)
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Platform Performance Metrics</h3>
            <p className="text-muted-foreground">
              Real-time performance data from our global infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "API Calls/sec", value: "50K+", icon: Zap },
              { label: "Global Uptime", value: "99.99%", icon: Shield },
              { label: "Data Centers", value: "15", icon: Network },
              { label: "Processing Speed", value: "2.3ms", icon: Cpu }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AdvancedFeatures


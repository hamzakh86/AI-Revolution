import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cpu, 
  Globe,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Machine Learning",
      description: "State-of-the-art neural networks that learn and adapt to your specific business needs, delivering unprecedented accuracy and performance.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast data processing and analysis with sub-millisecond response times for critical business decisions.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols ensure your data remains protected while maintaining compliance standards.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends, identify opportunities, and mitigate risks with our advanced predictive modeling capabilities.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales automatically with your business growth, from startup to enterprise.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Deploy AI solutions worldwide with our distributed infrastructure and multi-region support capabilities.",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
            <Brain className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
              Revolutionary AI Capabilities
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the cutting-edge features that make our AI platform the choice of industry leaders. 
            From advanced machine learning to real-time analytics, we provide everything you need to stay ahead.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our AI platform to transform their operations and drive innovation.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection


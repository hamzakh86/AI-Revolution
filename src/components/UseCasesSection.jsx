import { motion } from 'framer-motion'
import { 
  Building2, 
  ShoppingCart, 
  Heart, 
  Car, 
  Banknote, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Building2,
      title: "Manufacturing & Industry",
      description: "Optimize production lines, predict equipment failures, and improve quality control with AI-powered automation.",
      benefits: [
        "40% reduction in downtime",
        "25% increase in efficiency",
        "Real-time quality monitoring"
      ],
      color: "from-blue-500 to-cyan-500",
      image: "🏭"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Personalize customer experiences, optimize inventory, and boost sales with intelligent recommendation systems.",
      benefits: [
        "35% increase in conversion",
        "Personalized recommendations",
        "Dynamic pricing optimization"
      ],
      color: "from-purple-500 to-pink-500",
      image: "🛒"
    },
    {
      icon: Heart,
      title: "Healthcare & Medical",
      description: "Accelerate diagnosis, drug discovery, and patient care with advanced medical AI and predictive analytics.",
      benefits: [
        "Faster diagnosis accuracy",
        "Predictive health insights",
        "Automated medical imaging"
      ],
      color: "from-green-500 to-emerald-500",
      image: "🏥"
    },
    {
      icon: Car,
      title: "Automotive & Transport",
      description: "Enable autonomous driving, optimize logistics, and enhance vehicle safety with cutting-edge AI technology.",
      benefits: [
        "Autonomous navigation",
        "Route optimization",
        "Predictive maintenance"
      ],
      color: "from-orange-500 to-red-500",
      image: "🚗"
    },
    {
      icon: Banknote,
      title: "Finance & Banking",
      description: "Detect fraud, assess risk, and automate trading with sophisticated financial AI models and algorithms.",
      benefits: [
        "99.9% fraud detection",
        "Risk assessment automation",
        "Algorithmic trading"
      ],
      color: "from-yellow-500 to-orange-500",
      image: "🏦"
    },
    {
      icon: GraduationCap,
      title: "Education & Learning",
      description: "Personalize learning experiences, automate grading, and provide intelligent tutoring systems.",
      benefits: [
        "Personalized learning paths",
        "Automated assessment",
        "Intelligent tutoring"
      ],
      color: "from-indigo-500 to-purple-500",
      image: "🎓"
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
    <section id="use-cases" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Building2 className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Industry Applications</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent">
              AI Solutions Across Industries
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI platform transforms operations across diverse industries. 
            From healthcare to finance, see real-world applications driving innovation and growth.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.color} mr-4`}>
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl">{useCase.image}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {useCase.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {useCase.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-300">
                <span className="text-sm">Explore solutions</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Join Industry Leaders</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Over 22,000 companies across 150+ countries trust our AI platform to drive their digital transformation. 
            From startups to Fortune 500 enterprises, see how AI is reshaping industries.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Manufacturing Plants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">800+</div>
              <div className="text-sm text-muted-foreground">Financial Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">2,000+</div>
              <div className="text-sm text-muted-foreground">Retail Businesses</div>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
          >
            View Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCasesSection


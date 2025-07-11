import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'
import neuralNetworkImage from '../assets/images/neural_network.png'

const CallToActionSection = () => {
  return (
    <section id="call-to-action" className="py-20 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Start Your AI Journey</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-foreground">Your Business?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of forward-thinking companies that have already revolutionized their operations with our AI platform. 
              Start your free trial today and experience the future of intelligent automation.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-green-500/20 mr-4">
                  <Zap className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="font-medium">Instant Setup</div>
                  <div className="text-sm text-muted-foreground">Get started in under 5 minutes</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-blue-500/20 mr-4">
                  <Shield className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium">Enterprise Security</div>
                  <div className="text-sm text-muted-foreground">Bank-grade encryption & compliance</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-purple-500/20 mr-4">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-medium">24/7 Support</div>
                  <div className="text-sm text-muted-foreground">Expert assistance whenever you need it</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-blue-500/50 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 px-8 py-4 text-lg"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</div>
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-blue-600">22K+</div>
                <div className="text-2xl font-bold text-purple-600">150+</div>
                <div className="text-2xl font-bold text-green-600">99.9%</div>
              </div>
              <div className="flex items-center space-x-8 text-xs text-muted-foreground mt-1">
                <div>Active Users</div>
                <div>Countries</div>
                <div>Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Neural Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src={neuralNetworkImage} 
                alt="Neural Network Visualization" 
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full shadow-lg"
              >
                <Sparkles className="h-6 w-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full shadow-lg"
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-1/2 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg"
              >
                <Shield className="h-5 w-5 text-white" />
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl -z-10"></div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">No Credit Card Required</h3>
            <p className="text-muted-foreground mb-6">
              Start with our free tier and scale as you grow. Experience the full power of AI without any upfront commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Free 30-day trial
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                No setup fees
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Cancel anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToActionSection


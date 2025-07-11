import { BarChart3, Zap, Check, Star, MessageCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="bg-stone-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Key features that save time</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our powerful tools designed to streamline your workflow and boost productivity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Card 1 - Reports */}
          <div className="bg-white rounded-3xl p-8 lg:p-10">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-green-700" />
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Generate detailed reports with just a few clicks.
            </h3>

            <p className="text-gray-600 mb-8">
              Discover our powerful tools designed to streamline your workflow and boost productivity.
            </p>

            {/* Product Preview */}
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">Product</span>
                </div>
                <div className="text-xl font-bold text-gray-900">$8980</div>
                <div className="w-16 h-8 bg-gray-200 rounded mt-2"></div>
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Product preview"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Team Collaboration */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 text-white">
            <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mb-8">
              <Zap className="w-6 h-6 text-gray-900" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-12">
              Work seamlessly with your team, no matter where they are
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-green-300 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-300" />
                </div>
                <span className="text-lg">Live editing</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-green-300 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-300" />
                </div>
                <span className="text-lg">Instant feedback</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-green-300 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-300" />
                </div>
                <span className="text-lg">Task assignments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card - Full Width */}
        <div className="bg-green-300 rounded-3xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Generate detailed reports with just a few clicks.
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
              <div className="text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-gray-700 font-medium">Track and analyze business reports</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900">4.8</span>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-gray-900 fill-current" />
                    ))}
                    <Star className="w-6 h-6 text-gray-900 fill-current opacity-50" />
                  </div>
                </div>
                <div className="text-gray-700 font-medium">Best rated company</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-8 border-t border-gray-300">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <MessageCircle className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Contact our team for more information.</span>
            <button className="flex items-center gap-1 text-gray-900 font-medium hover:gap-2 transition-all">
              Let's chat
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-sm text-gray-500">Made in Framer</div>
        </div>
      </div>
    </section>
  )
}

import React from "react";
import { products } from "@/data/products";
import {
  GraduationCap,
  Code,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="component-px">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Our Products
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Innovative Products
              <br />
              <span className="text-primary">Built for Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don&apos;t just build custom solutions—we create our own
              innovative products that solve real-world problems and drive
              industry transformation.
            </p>
          </div>

          {/* Featured Products */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {product.title.includes("Scholar") ? (
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <GraduationCap className="w-6 h-6 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <Code className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {product.title.split(" | ")[0]}
                      </h3>
                      <p className="text-primary font-medium">
                        {product.title.split(" | ")[1]}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Key Features:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {product.title.includes("Scholar") ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          Available Now
                        </span>
                      ) : (
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <button className="flex items-center text-primary hover:text-primary-dark font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                More Products Coming Soon
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                We&apos;re constantly innovating and building new products to
                solve complex problems. Stay tuned for exciting releases that
                will transform how businesses operate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold">
                  Get Notified
                </button>
                <a
                  href="/contact"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
                >
                  Suggest a Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

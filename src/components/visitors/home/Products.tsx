import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";

const Products = () => {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="component-px">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Our Products
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Innovative solutions we&apos;ve built for the market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-6 select-none">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200 flex flex-col"
              >
                <div className="relative mb-8 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={800}
                    height={600}
                    className="object-cover object-top w-full h-75 group-hover:scale-102 transition duration-400"
                    unoptimized
                  />
                </div>

                <div className="text-center flex-1 flex flex-col justify-between items-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {product?.features
                      ?.slice(0, 5)
                      ?.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                  </div>

                  <div className="flex-1"></div>

                  <Link
                    href={product.isReleased ? product.link : "/#products"}
                    target={product.isReleased ? "_blank" : "_self"}
                    className={`inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5  ${
                      !product.isReleased ? "cursor-not-allowed opacity-80" : ""
                    }`}
                  >
                    {product.isReleased ? "Have a trial!" : "Coming Soon!"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

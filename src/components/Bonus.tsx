import { Globe, Notebook, Store } from 'lucide-react'
import React from 'react'


const Bonus = () => {
  return (
    <div>
         <section className="py-16 px-8 md-px-10 bg-white">
        <h2 className="text-3xl font-happyMonkey font-bold text-center text-green-700 mb-8">
          Bonus Sessions & Exclusive Resources!
        </h2>
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
            <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-2xl sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-orange-500 rounded-md">
                <Globe />
                </div>
              </div>
              <h3 className="py-4 font-happyMonkey text-2xl font-semibold text-gray-700 sm:text-xl text-gray-700">
                Website Design
              </h3>
              <p className="py-4 text-gray-700 text-md ">
                Encompassing today’s website design technology to integrated and
                build solutions relevant to your business.
              </p>
            </div>
            <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 ">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-green-700 rounded-md">
                <Notebook />
                </div>
              </div>
              <h3 className="py-4 font-happyMonkey text-2xl font-semibold text-gray-700 sm:text-xl ">
                Branding
              </h3>
              <p className="py-4 text-gray-700 text-md ">
                Share relevant, engaging, and inspirational brand messages to
                create a connection with your audience.
              </p>
            </div>
            <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-orange-500 rounded-md">
                <Store />
                </div>
              </div>
              <h3 className="py-4 font-happyMonkey text-2xl font-semibold sm:text-xl text-gray-700">
                SEO Marketing
              </h3>
              <p className="py-4 text-gray-700 text-md ">
                Let us help you level up your search engine game, explore our
                solutions for digital marketing for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bonus
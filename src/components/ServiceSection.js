import React from 'react'

const ServiceSection = () => {
  return (
    <section className="my-12 px-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-4">
        <div className="flex flex-col lg:items-center justify-start my-4">
          <div className="text-left">
            <h1 className="text-gray-900 text-2xl font-bold opacity-60 italic line-through">"E too cost"</h1>
            <h1 className="text-gray-900 text-2xl font-bold mb-1">Affordable</h1>
            <p className="opacity-80" style={{ fontSize: '1.15rem' }}>
              Be sure to get your money's worth
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:items-center justify-start my-4">
          <div className="text-left">
            <h1 className="text-gray-900 text-2xl font-bold opacity-60 italic line-through">"Dem chop my money"</h1>
            <h1 className="text-gray-900 text-2xl font-bold mb-1">Secured</h1>
            <p className="opacity-80" style={{ fontSize: '1.15rem' }}>
              100% Money back guarantee
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:items-center justify-start my-4">
          <div className="text-left">
            <h1 className="text-gray-900 text-2xl font-bold opacity-60 italic line-through">"Dem don run me street"</h1>
            <h1 className="text-gray-900 text-2xl font-bold mb-1">Best quality</h1>
            <p className="opacity-80" style={{ fontSize: '1.15rem' }}>
              Never experience a "what I ordered vs what I got" scenario
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:items-center justify-start my-4">
          <div className="text-left">
            <h1 className="text-gray-900 text-2xl font-bold opacity-60 italic line-through">"Who I go hold?"</h1>
            <h1 className="text-gray-900 text-2xl font-bold mb-1">Customer service</h1>
            <p className="opacity-80" style={{ fontSize: '1.15rem' }}>
              24/7 Available Support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection

import React from 'react'

const ServiceSection = () => {
  return (
    <section className="my-12 px-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="text-left my-4 mx-auto">
          <h1 className="text-gray-900 text-2xl font-bold opacity-60 italic line-through">"E too cost"</h1>
          <h1 className="text-gray-900 text-2xl font-bold mb-1">Affordable</h1>
          <p className="opacity-90 font-light" style={{ width: '90%' }}>
            Be sure to get your money's worth
          </p>
        </div>

        <div className="text-left my-4 mx-auto">
          <h1 className="text-gray-900 text-2xl font-bold opacity-60 italic line-through">"Dem chop my money"</h1>
          <h1 className="text-gray-900 text-2xl font-bold mb-1">Secured</h1>
          <p className="opacity-90 font-light" style={{ width: '90%' }}>
            100% Money back guarantee
          </p>
        </div>

        <div className="text-left my-4 mx-auto">
          <h1 className="text-gray-900 text-2xl font-bold opacity-60 italic line-through">"Dem don run me street"</h1>
          <h1 className="text-gray-900 text-2xl font-bold mb-1">Best quality</h1>
          <p className="opacity-90 font-light" style={{ width: '90%' }}>
            Never experience a "what I ordered vs what I got" scenario
          </p>
        </div>

        <div className="text-left my-4 mx-auto">
          <h1 className="text-gray-900 text-2xl font-bold opacity-60 italic line-through">"Who I go hold?"</h1>
          <h1 className="text-gray-900 text-2xl font-bold mb-1">Customer service</h1>
          <p className="opacity-90 font-light" style={{ width: '90%' }}>
            24/7 Available customer service support
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection

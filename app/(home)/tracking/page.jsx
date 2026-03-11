import React from 'react'

const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-150 text-center">

        {/* Heading */}
        <h3 className="text-[35px] md:text-2xl font-bold leading-12.75 text-[#222222] uppercase mb-6">
          Order Tracking
        </h3>

        {/* Instructions */}
        <p className="text-[#777] text-sm md:text-base leading-relaxed mb-10 max-w-125 mx-auto">
          To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
        </p>

        {/* Form - Standard HTML Actions */}
        <form action="/api/track" method="POST" className="space-y-5">

          {/* Order ID Input */}
          <div className="w-full">
            <input
              type="text"
              name="orderId"
              placeholder="Order ID"
              required
              className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-black placeholder:text-gray-400"
            />
          </div>

          {/* Billing Email Input with Border Label */}
          <div className="relative mt-8">
            <label
              htmlFor="email"
              className="absolute -top-2.5 left-4 bg-white px-2 text-[11px] uppercase font-bold text-gray-800 tracking-wider"
            >
              Billing email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border-2 border-black p-4 text-sm focus:outline-none"
            />
          </div>

          {/* Track Button */}
          <button
            type="submit"
            className="w-full bg-[#1c1c1c] text-white font-bold py-5 mt-4 uppercase tracking-[0.2em] hover:bg-black transition-all duration-200 text-sm"
          >
            Track
          </button>

        </form>
      </div>
    </section>
  )
}

export default page
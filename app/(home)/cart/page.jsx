import Image from 'next/image'
import React from 'react'
import { RxCross2 } from "react-icons/rx";

const page = () => {
  return (
    <div className='py-25'>
      {/* Container */}
      <div className="max-w-352.5 mx-auto">
        {/* Header */}
        <h3 className='text-[35px] text-[#222222] font-bold leading-12.5'>CART</h3>
        {/* Top Slider */}
        <div className="flex items-center py-12.5">
          <div className="border-b-2 border-[#222222] pb-3 w-117.5">
            <div className="flex items-center gap-x-2.5 text-lg text-[#222222] font-medium leading-6.5">
              <h5>01</h5>
              <h5>SHOPPING BAG</h5>
            </div>
            <p className='text-sm leading-7.5 text-[#767676] pl-8'>Manage Your Items List</p>
          </div>
          <div className="border-b-2 border-[#E4E4E4] pb-3 w-117.5">

            <div className="flex flex-row items-center gap-x-2.5 text-lg text-[#767676] font-medium leading-6.5">
              <h5>02</h5>
              <h5>SHIPPING AND CHECKOUT</h5>
            </div>
            <p className='text-sm leading-7.5 text-[#767676] pl-8'>Checkout Your Items List</p>
          </div>

          <div className="border-b-2 border-[#E4E4E4] pb-3 w-117.5">
            <div className="flex items-center gap-x-2.5 text-lg text-[#767676] font-medium leading-6.5">
              <h5>03</h5>
              <h5>CONFIRMATION</h5>
            </div>
            <p className='text-sm leading-7.5 text-[#767676] pl-8'>Review And Submit Your Order</p>
          </div>
        </div>
        {/* Add Content */}
        <div className="flex justify-between items-start">
          {/* Left Side */}
          <div className="">
            <div className="flex items-center pb-2.5 border-b-2 border-[#E4E4E4] text-[#222222] text-sm font-medium leading-6">
              <h6 className='pr-[427px]'>PRODUCT</h6>
              <h6 className='pr-[91px]'>PRICE</h6>
              <h6 className='pr-[99px]'>QUANTITY</h6>
              <h6 className='pr-[78px]'>SUBTOTAL</h6>
            </div>
            {/* Products */}
            <div className="mt-7.5 border-b border-[#E4E4E4] pb-7.5 flex items-center">
              <Image src="/images/cart.png" alt="cart" width={120} height={120} />
              <p className='text-base text-[#222222] leading-5.75 ml-7.5 mr-61.75'>Zessi Dresses</p>
              <p className='text-base text-[#767676] leading-5.75 mr-25'>$99</p>
              <div className="border-2 border-[#E4E4E4] py-3.5 px-5 flex items-center mr-14.5">
                <p className="text-base text-[#767676] leading-6 cursor-pointer">-</p>
                <p className="text-base text-[#767676] px-6 leading-6">3</p>
                <p className="text-base text-[#767676] leading-6 cursor-pointer">+</p>
              </div>
              <p className='text-base text-[#222222] font-medium leading-5.75 mr-23.5'>$399</p>
              <RxCross2 className='justify-end text-[#767676] text-base cursor-pointer' />
            </div>
            <div className="mt-7.5 border-b border-[#E4E4E4] pb-7.5 flex items-center">
              <Image src="/images/cart.png" alt="cart" width={120} height={120} />
              <div className="ml-7.5 mr-58.5">
                <p className='text-base text-[#222222] leading-5.75'>Kirby T-Shirt</p>
                <p className='text-sm text-[#767676] leading-6 w-26'>Color:  Yellow
                  Size: L</p></div>
              <p className='text-base text-[#767676] leading-5.75 mr-25'>$99</p>
              <div className="border-2 border-[#E4E4E4] py-3.5 px-5 flex items-center mr-14.5">
                <p className="text-base text-[#767676] leading-6 cursor-pointer">-</p>
                <p className="text-base text-[#767676] px-6 leading-6">3</p>
                <p className="text-base text-[#767676] leading-6 cursor-pointer">+</p>
              </div>
              <p className='text-base text-[#222222] font-medium leading-5.75 mr-23.5'>$399</p>
              <RxCross2 className='justify-end text-[#767676] text-base cursor-pointer' />
            </div>
            <div className="mt-7.5 border-b border-[#E4E4E4] pb-7.5 flex items-center">
              <Image src="/images/cart.png" alt="cart" width={120} height={120} />
              <p className='text-base text-[#222222] leading-5.75 ml-7.5 mr-58.5'>Cableknit Shawl</p>
              <p className='text-base text-[#767676] leading-5.75 mr-25'>$99</p>
              <div className="border-2 border-[#E4E4E4] py-3.5 px-5 flex items-center mr-14.5">
                <p className="text-base text-[#767676] leading-6 cursor-pointer">-</p>
                <p className="text-base text-[#767676] px-6 leading-6">3</p>
                <p className="text-base text-[#767676] leading-6 cursor-pointer">+</p>
              </div>
              <p className='text-base text-[#222222] font-medium leading-5.75 mr-23.5'>$399</p>
              <RxCross2 className='justify-end text-[#767676] text-base cursor-pointer' />
            </div>
            {/* Cupon */}
            <div className="flex justify-between mt-8">
              <div className="border-2 border-[#E4E4E4] py-4 px-5 flex justify-between">
                <input type="text" placeholder='Coupon Code' className='border-none outline-none w-[185px]' />
                <p className='cursor-pointer text-sm font-medium text-[#222222] leading-6 ml-10'>APPLY COUPON</p>
              </div>
              <div className="cursor-pointer text-sm font-medium text-[#222222] leading-6 px-13.75 pt-5.5 pb-3.5 bg-[#E4E4E4]">UPDATE CART</div>
            </div>
          </div>
          {/* Right Side */}
          <div className="px-10 pt-[38px] pb-[22px] border-[#222222] border-2"></div>
        </div>
      </div>
    </div>
  )
}

export default page
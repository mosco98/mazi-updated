import React from 'react'
import { X } from 'react-feather'

import { ServiceSection } from '../components'
import { useCart } from '../utils/contexts/CartContext'

const Cart = () => {
  const { cartItems, RemoveFromCartHandler, IncrementCartItemHandler, ReduceCartItemHandler } = useCart()

  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  return (
    <>
      <section className="py-6 my-32 px-5">
        <div className="text-center space-y-7 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-900">Shopping cart</h1>
          <span className="text-sm">Id commodo velit ullamco dolore non eiusmod deserunt.</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="container mx-auto my-40 text-center space-y-3">
            <p className="font-bold text-5xl">No Items in the cart</p>
            <p>Start shopping</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-3 px-7 mt-20">
            <div className="lg:col-span-2">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden border-b border-gray-200">
                      <table class="min-w-full divide-y divide-gray-200 py-5">
                        <thead class="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Item
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Price
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Quantity
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Total
                            </th>
                            <th
                              scope="col"
                              class="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                          </tr>
                        </thead>
                        {cartItems.map((item) => (
                          <tbody key={item.id} class="bg-white divide-y divide-gray-200 py-6">
                            <tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10" src={item.images[0].src} alt="" />
                                  </div>
                                  <div class="ml-4">
                                    <div class="font-medium text-gray-900 uppercase">{item.name}</div>
                                    <div class="text-sm text-gray-500">Size: {item.size}</div>
                                  </div>
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">₦{parseFloat(item.price).toLocaleString('en')}</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex text-xs leading-5 font-semibold">
                                  <div class="flex items-center">
                                    <button
                                      class="btn-items-decrease mx-1 focus:outline-none"
                                      onClick={() => ReduceCartItemHandler(item)}>
                                      -
                                    </button>
                                    <input
                                      class="text-center border border-black w-10 input-items py-2 focus:outline-none"
                                      type="text"
                                      value={item.qty}
                                    />
                                    <button
                                      class="btn-items-increase mx-1 focus:outline-none"
                                      onClick={() => IncrementCartItemHandler(item)}>
                                      +
                                    </button>
                                  </div>
                                </span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                ₦{parseFloat(item.price * item.qty).toLocaleString('en')}
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <X
                                  className="cursor-pointer text-gray-900 hover:opacity-80 transition-all ease-in-out"
                                  size="17"
                                  strokeWidth="3"
                                  onClick={() => RemoveFromCartHandler(item)}
                                />
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 space-y-5 px-5 py-3 text-gray-900">
              <div className="mb-5">
                <h1 className="text-gray-900 font-bold">ORDER SUMMARY</h1>
              </div>
              <small className="text-gray-900 opacity-95">
                Shipping and additional costs are calculated based on values you have entered.
              </small>
              <ul className="space-y-5">
                <li className="flex items-center justify-between py-5 border-b border-gray-100">
                  <span className="font-light">Order Subtotal</span>
                  <span className="font-light">₦{parseFloat(totalPrice).toLocaleString('en')}</span>
                </li>
                <li className="flex items-center justify-between py-5 border-b border-gray-100">
                  <span className="font-light">Shipping and handling</span>
                  <span className="font-light">₦0.00</span>
                </li>
                <li className="flex items-center justify-between py-5 border-b border-gray-100">
                  <span className="font-light">Tax</span>
                  <span className="font-light">₦0.00</span>
                </li>
                <li className="flex items-center justify-between py-5">
                  <span className="font-light">Total</span>
                  <span className="font-bold text-2xl">₦{parseFloat(totalPrice).toLocaleString('en')}</span>
                </li>
              </ul>
              <button className="bg-gray-900 px-3 py-2 w-full text-white mt-8 focus:outline-none hover:opacity-90 transition-all ease-in-out select-none">
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </section>
      <ServiceSection />
    </>
  )
}

export default Cart

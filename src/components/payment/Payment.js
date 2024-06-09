import { useState } from "react";

const Payment = ({ hideVal, subscribtion, setShowPay }) => {
  return (
    <div
      className={`w-[100%] h-[100%] bg-[#000000a0] absolute ${
        !hideVal && "hidden"
      }  z-[9999999]`}
    >
      <div class="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-lg overflow-hidden absolute left-[50%]  translate-x-[-50%] top-[40%] translate-y-[-50%]  ">
        <div class="px-6 py-4 bg-gray-900 text-white">
          <h1 class="text-lg font-bold">Credit Card</h1>
        </div>
        <div class="px-6 py-4">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="card-number">
              Card Number
            </label>
            <input
              class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card-number"
              type="text"
              placeholder="**** **** **** ****"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 font-bold mb-2"
              for="expiration-date"
            >
              Expiration Date
            </label>
            <input
              class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiration-date"
              type="text"
              placeholder="MM/YY"
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="cvv">
              CVV
            </label>
            <input
              class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="***"
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="cvv">
              Cardholder Name
            </label>
            <input
              class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              setShowPay(!hideVal);
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Payment;

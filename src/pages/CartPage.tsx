// import React from "react";

const CartPage = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded-lg text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-gray-700 font-semibold">Product</th>
              <th className="p-4 text-gray-700 font-semibold">Price</th>
              <th className="p-4 text-gray-700 font-semibold">Quantity</th>
              <th className="p-4 text-gray-700 font-semibold">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">LCD Monitor</td>
              <td className="p-4">$650</td>
              <td className="p-4">
                <select className="border rounded px-2 py-1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td className="p-4">$650</td>
            </tr>
            <tr>
              <td className="p-4">HI Gamepad</td>
              <td className="p-4">$550</td>
              <td className="p-4">
                <select className="border rounded px-2 py-1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td className="p-4">$1100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-6 rounded">
          Return To Shop
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded">
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Summary */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between gap-8">
        {/* Coupon */}
        <div className="flex flex-col lg:w-1/2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border rounded py-2 px-4 mb-4"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded">
            Apply Coupon
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-white border rounded-lg p-6 lg:w-1/3">
          <h2 className="text-lg font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Subtotal:</span>
            <span className="font-semibold">$1750</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Shipping:</span>
            <span className="font-semibold">Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 w-full rounded mt-4">
            Process to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

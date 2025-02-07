import { useState } from "react";
import { Link } from "react-router-dom";
import Gamepad from "../assets/images/Red-gaming-pad.png";
import Led from "../assets/images/Led-tv.png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: Led },
    { id: 2, name: "HI Gamepad", price: 550, quantity: 2, image: Gamepad },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleQuantityChange = (id, quantity) => {
    const parsedQuantity = parseInt(quantity, 10);
    if (isNaN(parsedQuantity) || parsedQuantity < 1) {
      alert("Quantity must be a positive number!");
      return;
    }

    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parsedQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      alert("Invalid coupon code");
    }
  };

  const handleCheckout = () => {
    alert("Redirecting to checkout...");
  };

  const subtotal = calculateSubtotal();
  const total = subtotal - subtotal * discount;

  return (
    <div className="py-8 px-4 md:px-30 lg:px-55 mt-60 bg-white">
      {/* Breadcrumb */}
      <div className="mb-6">
        <h1 className="text-[14px] gap-5 font-semibold font-[poppins] text-slate-400">
          <span>Home</span>
          <span className="mx-2">/</span>
          <Link to="#Cart" className="hover:text-black">
            Cart
          </Link>
        </h1>
      </div>

      {/* Cart Items */}
      <div className="mt-20 space-y-7">
        <div className="flex justify-between grid-cols-4 items-center bg-white p-4 rounded-lg shadow ">
          <h3 className="font-semibold text-gray-800">Product</h3>
          <h3 className="font-semibold text-gray-800">Price</h3>
          <h3 className="font-semibold text-gray-800">Quantity</h3>
          <h3 className="font-semibold text-gray-800">SubTotal</h3>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid justify-between grid-cols-4 items-center bg-white p-4 rounded-lg shadow text-justify gap-40"
          >
            {/* Product Image */}
            <div className="flex  gap-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-16 rounded-md"
              />
              {/* Product Name */}
               <h3 className="font-semibold text-gray-800">{item.name}</h3>
            </div>

            

            {/* Product Price */}

            <div>
              <h3 className=" text-center font-semibold  text-gray-600">${item.price}</h3>
            </div>
            {/* Quantity Selector */}
            <div className="flex  text-center items-center ">
              <select
                className="border rounded px-2 py-1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>

            {/* Discounted Price */}
            <div>
              <p className=" text-center  font-semibold  text-gray-800">
                ${(item.price * item.quantity * (1 - discount)).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col font-semibold text-black md:flex-row justify-between items-center mt-6 gap-4">
        <button className="bg-white border-2 border-slate-300 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded">
          Return To Shop
        </button>
        <button
          className="bg-white border-2 border-slate-300  hover:bg-red-600 text-slate-400 py-2 px-6 rounded"
          onClick={() => alert("Cart updated successfully!")}
        >
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Summary */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between gap-8">
        {/* Coupon */}
        <div className="flex py-30 gap-7 md:flex-col lg:flex-row">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border rounded py-2 px-4 mb-4"
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded"
            onClick={applyCoupon}
          >
            Apply Coupon
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-white border rounded-lg p-6 lg:w-1/3 shadow">
          <h2 className="text-lg font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Subtotal:</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Discount:</span>
            <span className="font-semibold">
              -${(subtotal * discount).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Shipping:</span>
            <span className="font-semibold">Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 w-full rounded mt-4"
            onClick={handleCheckout}
          >
            Process to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

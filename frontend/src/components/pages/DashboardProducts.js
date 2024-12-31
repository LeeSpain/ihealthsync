// src/pages/dashboard/Products.js
import React, { useState } from 'react';
import {
  ShieldCheck,
  Heart,
  Scale,
  Thermometer,
  Moon,
  Pill,
  Activity,
  Phone,
  Stethoscope,
  Minus,
  Plus,
  X
} from 'lucide-react';

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex items-center gap-4 py-6 border-b border-gray-200">
    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
      {React.createElement(item.icon, { size: 24, className: "text-[#008B8B]" })}
    </div>
    
    <div className="flex-1">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.category}</p>
        </div>
        <button 
          onClick={() => removeItem(item.id)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="flex items-center gap-2 mt-2">
        <div className="text-sm text-gray-500">Size:</div>
        <select className="border rounded px-2 py-1 text-sm">
          <option>Standard</option>
          <option>Large</option>
        </select>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <button 
        onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <Minus size={16} />
      </button>
      <span className="w-8 text-center">{item.quantity || 1}</span>
      <button 
        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <Plus size={16} />
      </button>
    </div>

    <div className="text-right min-w-[120px]">
      <div className="font-semibold">€{item.price}</div>
      <div className="text-sm text-gray-500">+€{item.monthlyFee}/mo</div>
    </div>
  </div>
);

const DashboardProducts = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "guardian-button",
      name: 'Guardian Button',
      price: '59.99',
      monthlyFee: '1.99',
      icon: ShieldCheck,
      category: 'Safety',
      quantity: 1
    },
    {
      id: "heart-monitor",
      name: 'Heart Rate Monitor',
      price: '89.99',
      monthlyFee: '1.99',
      icon: Heart,
      category: 'Health',
      quantity: 1
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateTotals = () => {
    return cartItems.reduce((acc, item) => ({
      subtotal: acc.subtotal + parseFloat(item.price) * (item.quantity || 1),
      monthly: acc.monthly + parseFloat(item.monthlyFee) * (item.quantity || 1)
    }), { subtotal: 0, monthly: 0 });
  };

  const totals = calculateTotals();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}

          {/* Coupon Code */}
          <div className="mt-6 flex gap-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="border rounded-lg px-4 py-2 flex-1"
            />
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Apply
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€{totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly Fee</span>
              <span>€{totals.monthly.toFixed(2)}/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold pt-3 border-t">
              <span>Total</span>
              <div className="text-right">
                <div>€{totals.subtotal.toFixed(2)}</div>
                <div className="text-sm text-gray-500">+€{totals.monthly.toFixed(2)}/mo</div>
              </div>
            </div>
          </div>

          <button className="w-full bg-[#008B8B] text-white py-3 rounded-lg hover:bg-[#20B2AA] transition-colors mb-4">
            Proceed to Checkout
          </button>

          <div className="space-y-3">
            <button className="w-full bg-[#ffc439] text-black py-3 rounded-lg hover:bg-[#f4bb36] transition-colors flex items-center justify-center gap-2">
              <span className="font-bold">PayPal</span> Checkout
            </button>
            <button className="w-full bg-[#222] text-white py-3 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
              <span className="font-bold">Amazon</span> Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProducts;
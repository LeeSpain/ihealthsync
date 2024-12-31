import React from 'react';
import { X, Minus, Plus } from 'lucide-react';

const CartSlideOver = ({ isOpen, setIsOpen, cartItems, updateQuantity, totals }) => (
  <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
    <div 
      className={`absolute inset-0 bg-black/30 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={() => setIsOpen(false)}
    />
    <div className={`absolute right-0 top-0 h-full w-96 bg-white shadow-xl transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4 py-4 border-b">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                {React.createElement(item.icon, { size: 24, className: 'text-[#008B8B]' })}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="text-right">
                    {item.price && <div>€{item.price}</div>}
                    <div className="text-sm text-gray-500">+€{item.monthlyFee}/mo</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>€{totals.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Monthly Fee</span>
            <span>€{totals.monthly.toFixed(2)}/mo</span>
          </div>
          <button className="w-full bg-[#FF7F50] text-white py-3 rounded-lg hover:bg-[#FF6347] transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CartSlideOver;

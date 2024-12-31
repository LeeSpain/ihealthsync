import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CartSummary = ({ cartItems, totals, onOpenCart }) => {
  return (
    <div className="sticky top-0 bg-white shadow-md z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Totals Section */}
        <div className="flex items-center gap-4">
          <div className="text-lg font-bold text-gray-700">
            Subtotal: <span className="text-[#008B8B]">€{totals.subtotal.toFixed(2)}</span>
          </div>
          <div className="text-lg font-bold text-gray-700">
            Monthly: <span className="text-[#008B8B]">€{totals.monthly.toFixed(2)}/mo</span>
          </div>
        </div>

        {/* Preview Items Section */}
        <div className="flex items-center gap-4">
          <div className="flex space-x-2">
            {cartItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                title={item.name}
              >
                {React.createElement(item.icon, { size: 20, className: 'text-[#008B8B]' })}
              </div>
            ))}
            {cartItems.length > 3 && (
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm text-gray-500">
                +{cartItems.length - 3}
              </div>
            )}
          </div>

          {/* Open Cart Button */}
          <button
            onClick={onOpenCart}
            className="bg-[#FF7F50] text-white px-4 py-2 rounded-lg hover:bg-[#FF6347] flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;

import React from "react";
import { Minus, Plus } from "lucide-react";

const ProductCard = ({ product, cartQuantity, onUpdateQuantity }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {React.createElement(product.icon, { size: 48 })}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => onUpdateQuantity(Math.max(0, cartQuantity - 1))}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg">{cartQuantity}</span>
          <button
            onClick={() => onUpdateQuantity(cartQuantity + 1)}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

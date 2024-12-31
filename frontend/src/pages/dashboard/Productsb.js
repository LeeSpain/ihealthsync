import React, { useState, useContext } from 'react';
import { Camera, ShoppingCart, Plus, Minus, Check, Trash2 } from 'lucide-react';

// Create the context for the shopping cart
const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + quantity}
            : item
        );
      }
      return [...prev, {...product, quantity}];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === productId ? {...item, quantity} : item
    ));
  };

  const calculateTotals = () => {
    return cart.reduce((totals, item) => ({
      oneTime: totals.oneTime + (item.price ? parseFloat(item.price) * item.quantity : 0),
      monthly: totals.monthly + parseFloat(item.monthlyFee) * item.quantity
    }), { oneTime: 0, monthly: 0 });
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      isOpen,
      setIsOpen,
      calculateTotals
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Sidebar to show cart details
const CartSidebar = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, calculateTotals } = useContext(CartContext);
  const totals = calculateTotals();

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl p-6 overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
          ×
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.id} className="border-b pb-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    {item.price && <div>€{(parseFloat(item.price) * item.quantity).toFixed(2)}</div>}
                    <div className="text-sm text-gray-600">€{(parseFloat(item.monthlyFee) * item.quantity).toFixed(2)}/mo</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>One-time Payment:</span>
              <span className="font-bold">€{totals.oneTime.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Monthly Payment:</span>
              <span className="font-bold">€{totals.monthly.toFixed(2)}/mo</span>
            </div>
            <button className="w-full bg-[#008B8B] text-white py-3 rounded-lg hover:bg-[#20B2AA] transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Card to display individual products
const ProductCard = ({ product, isService }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const colorClass = isService ? '[#FF0000]' : '[#008B8B]';
  const toColor = isService ? '[#8B0000]' : '[#20B2AA]';
  
  return (
    <div className={`group bg-gradient-to-b from-white via-white to-${colorClass}/5 rounded-xl p-6 border border-${colorClass}/10 hover:border-${colorClass}/30 transition-all duration-300 hover:shadow-xl hover:shadow-${colorClass}/10`}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-4 rounded-xl bg-gradient-to-br from-${colorClass} to-${toColor} text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
          <Camera size={24} />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#008B8B] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-[#008B8B]">{product.category}</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        {product.features.slice(0, 3).map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-[#008B8B]" />
            <span className="text-gray-800 font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-[#008B8B]/10">
        <div className="flex items-center justify-between mb-4 px-4 py-3 bg-gradient-to-r from-[#008B8B]/10 to-transparent rounded-lg">
          {product.price && (
            <div>
              <span className="text-2xl font-bold text-gray-900">€{product.price}</span>
              <span className="text-sm text-gray-600"> one-time</span>
            </div>
          )}
          <div>
            <span className="text-lg font-bold text-gray-900">€{product.monthlyFee}</span>
            <span className="text-sm text-gray-600">/month</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-4">
          <button 
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="font-medium w-8 text-center">{quantity}</span>
          <button 
            onClick={() => setQuantity(prev => prev + 1)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          onClick={() => addToCart(product, quantity)}
          className="w-full py-3.5 rounded-lg font-medium bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white hover:opacity-90 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const { setIsOpen } = useContext(CartContext);

  const aiDevices = [
    {
      id: "guardian-button",
      name: 'Guardian Button',
      price: '59.99',
      monthlyFee: '1.99',
      category: 'Safety',
      features: [
        'One-touch emergency alerts',
        'Real-time GPS tracking',
        'Fall detection',
        'Two-way communication',
        'Waterproof design',
        'Long battery life',
      ],
    },
    {
      id: "heart-monitor",
      name: 'Heart Rate Monitor',
      price: '89.99',
      monthlyFee: '1.99',
      category: 'Health',
      features: [
        '24/7 heart monitoring',
        'ECG functionality',
        'Arrhythmia detection',
        'Sleep tracking',
        'Exercise monitoring',
        'Mobile app integration',
      ],
    }
    // Add more products as needed...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Products</h2>
          <p className="text-lg text-gray-600">Explore our range of products and services</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiDevices.map((product, index) => (
            <ProductCard key={index} product={product} isService={false} />
          ))}
        </div>
      </div>

      <CartSidebar />
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 p-4 bg-[#008B8B] text-white rounded-full shadow-lg hover:bg-[#20B2AA] transition-colors"
      >
        <ShoppingCart size={24} />
      </button>
    </div>
  );
};

export default Products;

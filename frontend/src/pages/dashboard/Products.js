import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartSummary from "./CartSummary";
import CartSlideOver from "./CartSlideOver";
import ProductCard from "./ProductCard";
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
} from "lucide-react";

const DashboardProducts = () => {
  const { cartItems, updateCartQuantity, calculateTotals } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const aiDevices = [
    {
      id: "guardian-button",
      name: "Guardian Button",
      price: "59.99",
      monthlyFee: "1.99",
      icon: ShieldCheck,
      category: "Safety",
      description: "One-touch emergency alerts with GPS tracking",
      features: ["Fall detection", "Two-way communication", "Waterproof"],
    },
    {
      id: "heart-monitor",
      name: "Heart Rate Monitor",
      price: "89.99",
      monthlyFee: "1.99",
      icon: Heart,
      category: "Health",
      description: "24/7 heart monitoring with ECG functionality",
      features: ["Arrhythmia detection", "Sleep tracking", "Exercise monitoring"],
    },
    {
      id: "smart-scales",
      name: "Smart Scales",
      price: "99.99",
      monthlyFee: "1.99",
      icon: Scale,
      category: "Health",
      description: "Complete body composition analysis",
      features: ["Weight tracking", "BMI calculation", "Body fat percentage"],
    },
    {
      id: "thermometer",
      name: "Thermometer",
      price: "49.99",
      monthlyFee: "1.99",
      icon: Thermometer,
      category: "Health",
      description: "Non-contact infrared temperature monitoring",
      features: ["Quick readings", "History tracking", "Fever alerts"],
    },
    {
      id: "bed-sensor",
      name: "Bed Sensor",
      price: "149.99",
      monthlyFee: "1.99",
      icon: Moon,
      category: "Health",
      description: "Advanced sleep tracking and monitoring",
      features: ["Movement detection", "Heart rate monitoring", "Sleep quality scoring"],
    },
  ];

  const professionalServices = [
    {
      id: "med-dispenser",
      name: "Med Dispenser",
      price: "149.99",
      monthlyFee: "19.99",
      icon: Pill,
      category: "Professional Monitoring",
      description: "Automated medication management system",
      features: ["Medication tracking", "Automatic dispensing", "Refill alerts"],
    },
    {
      id: "glucose-monitor",
      name: "Glucose Monitor",
      price: "149.99",
      monthlyFee: "19.99",
      icon: Activity,
      category: "Professional Monitoring",
      description: "24/7 glucose level monitoring",
      features: ["Real-time tracking", "Trend analysis", "Emergency alerts"],
    },
    {
      id: "sos-call-centre",
      name: "SOS Call Centre",
      monthlyFee: "19.99",
      icon: Phone,
      category: "Emergency Services",
      description: "24/7 emergency response service",
      features: ["Priority handling", "Medical data access", "Multilingual support"],
    },
    {
      id: "nurse-service",
      name: "Personal Nurse Service",
      monthlyFee: "50.00",
      icon: Stethoscope,
      category: "Premium Care",
      description: "Dedicated healthcare professional support",
      features: ["Daily check-ins", "Care plan management", "Health guidance"],
    },
  ];

  const getCartQuantity = (productId) =>
    cartItems.find((item) => item.id === productId)?.quantity || 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Cart Summary */}
      <div className="max-w-7xl mx-auto px-6">
        <CartSummary
          cartItems={cartItems}
          totals={calculateTotals()}
          onOpenCart={() => setIsCartOpen(true)}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* AI Devices Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">AI Devices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiDevices.map((device) => (
              <ProductCard
                key={device.id}
                product={device}
                cartQuantity={getCartQuantity(device.id)}
                onUpdateQuantity={(qty) => updateCartQuantity(device.id, qty)}
              />
            ))}
          </div>
        </section>

        {/* Professional Services Section */}
        <section className="mt-16">
          <h2 className="text-xl font-bold mb-4">Professional Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalServices.map((service) => (
              <ProductCard
                key={service.id}
                product={service}
                cartQuantity={getCartQuantity(service.id)}
                onUpdateQuantity={(qty) => updateCartQuantity(service.id, qty)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Cart Slide-over */}
      <CartSlideOver
        isOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
        updateQuantity={updateCartQuantity}
        totals={calculateTotals()}
      />
    </div>
  );
};

export default DashboardProducts;

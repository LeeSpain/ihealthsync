// src/pages/dashboard/Products.js
import React, { useState } from "react";
import { 
  ShieldCheck, Heart, Scale, Thermometer, Moon, 
  Pill, Activity, Phone, Stethoscope, Star,
  PlusCircle, CheckCircle, Info, Search, Filter,
  Timer, PlayCircle, ChevronDown
} from "lucide-react";
import DashboardHeader from "../../components/DashboardHeader";

const DashboardProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const currentSubscription = {
    active: ["guardian-button"],
    recommended: ["med-dispenser", "sos-call-centre"]
  };

  const allProducts = [
    {
      id: "guardian-button",
      name: "Guardian Button",
      type: "device",
      price: "59.99",
      monthlyFee: "1.99",
      icon: ShieldCheck,
      description: "Emergency alerts with GPS tracking.",
      features: ["Fall detection", "Two-way communication", "Waterproof", "GPS tracking"],
      setupTime: "5-10 minutes"
    },
    {
      id: "heart-monitor",
      name: "Heart Rate Monitor",
      type: "device",
      price: "89.99",
      monthlyFee: "1.99",
      icon: Heart,
      description: "24/7 heart monitoring with alerts.",
      features: ["Arrhythmia detection", "ECG readings"],
      setupTime: "10-15 minutes"
    },
    {
      id: "med-dispenser",
      name: "Med Dispenser",
      type: "professional",
      price: "149.99",
      monthlyFee: "19.99",
      icon: Pill,
      description: "Smart medication management.",
      features: ["Automatic dispensing", "Care team notifications"],
      setupTime: "15-20 minutes"
    },
    {
      id: "sos-call-centre",
      name: "SOS Call Centre",
      type: "professional",
      monthlyFee: "19.99",
      icon: Phone,
      description: "24/7 emergency response service.",
      features: ["24/7 availability", "Multilingual support"],
      setupTime: "10-15 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-30">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 pt-40"> 
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Care Products & Services</h1>
            <p className="text-gray-600 mt-1">Enhance your care package with our solutions.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-5 h-5 text-gray-400" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Active Products */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allProducts
              .filter(product => currentSubscription.active.includes(product.id))
              .map(product => (
                <div key={product.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#008B8B] bg-opacity-10 rounded-lg">
                      <product.icon className="w-5 h-5 text-[#008B8B]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">Active</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#008B8B]/10 rounded-lg">
                    <product.icon className="w-6 h-6 text-[#008B8B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      {product.type === "device" ? "AI Device" : "Professional Service"}
                    </p>
                  </div>
                </div>
                {currentSubscription.recommended.includes(product.id) && (
                  <span className="px-2 py-1 bg-[#008B8B]/10 text-[#008B8B] text-sm rounded-full">
                    Recommended
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#008B8B]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {product.price && (
                <div className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Price</span>
                    <span className="font-semibold text-gray-900">${product.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Monthly Fee</span>
                    <span className="font-semibold text-gray-900">${product.monthlyFee}</span>
                  </div>
                </div>
              )}
              <button className="mt-4 w-full bg-[#008B8B] text-white py-2 rounded-lg hover:bg-[#007777]">
                Add to Package
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardProducts;
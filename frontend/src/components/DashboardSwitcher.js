// DashboardSwitcher.js
import React from 'react';
import { Star, Lock, ChevronRight, Check } from 'lucide-react';

const DashboardSwitcher = ({ currentPlan = 'free', onSwitch }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-900">Your Plan</h3>
        {currentPlan === 'premium' && (
          <span className="px-2 py-1 bg-[#008B8B]/10 text-[#008B8B] text-sm rounded-full">
            Premium Active
          </span>
        )}
      </div>

      {/* Current Plan Display */}
      <div className={`p-4 rounded-lg mb-4 ${
        currentPlan === 'premium' ? 'bg-[#008B8B]/10' : 'bg-gray-50'
      }`}>
        <div className="flex items-center gap-3">
          {currentPlan === 'premium' ? (
            <Star className="w-5 h-5 text-[#008B8B]" />
          ) : (
            <Lock className="w-5 h-5 text-gray-400" />
          )}
          <div>
            <p className="font-medium text-gray-900">
              {currentPlan === 'premium' ? 'Premium Plan' : 'Free Plan'}
            </p>
            <p className="text-sm text-gray-600">
              {currentPlan === 'premium' 
                ? 'All features unlocked' 
                : 'Basic health monitoring'}
            </p>
          </div>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Basic Health Monitoring</span>
          <Check className="w-4 h-4 text-[#008B8B]" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">AI Guardian</span>
          {currentPlan === 'premium' ? (
            <Check className="w-4 h-4 text-[#008B8B]" />
          ) : (
            <Lock className="w-4 h-4 text-gray-400" />
          )}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Family Connection</span>
          {currentPlan === 'premium' ? (
            <Check className="w-4 h-4 text-[#008B8B]" />
          ) : (
            <Lock className="w-4 h-4 text-gray-400" />
          )}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Emergency System</span>
          {currentPlan === 'premium' ? (
            <Check className="w-4 h-4 text-[#008B8B]" />
          ) : (
            <Lock className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </div>

      {/* Switch/Upgrade Button */}
      <button 
        onClick={onSwitch}
        className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 ${
          currentPlan === 'premium'
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            : 'bg-[#008B8B] text-white hover:bg-[#008B8B]/90'
        }`}
      >
        {currentPlan === 'premium' ? (
          <>
            View Free Version
            <ChevronRight className="w-4 h-4" />
          </>
        ) : (
          <>
            Upgrade to Premium
            <Star className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
};

export default DashboardSwitcher;
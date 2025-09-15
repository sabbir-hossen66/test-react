import React from "react";

// Small reusable Feature Card
const FeatureCard = ({ title, span }) => (
  <div className={`group relative ${span || ""}`}>
    <div
      className="h-80 bg-gray-900 rounded-2xl p-8 cursor-pointer transition-all duration-300 ease-out
                 group-hover:bg-gray-800 group-hover:border-2 group-hover:border-emerald-400
                 flex flex-col justify-between overflow-hidden"
    >
      {/* Arrow Icon */}
      <div
        className="absolute top-8 right-8 transition-all duration-300 ease-out
                   opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
      >
        <svg
          className="w-8 h-8 text-emerald-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
      </div>

      {/* Title */}
      <div className="mt-auto">
        <h3 className="text-white text-2xl font-medium whitespace-pre-line">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const Feature = () => {
  const features = [
    { title: "Feature\nName" },
 { empty: true },
    { title: "Feature\nName" },
   {empty: true}, 
    { title: "Feature\nName" },
  ];

  return (
    <div className="relative bg-black p-8 md:p-16">
      {/* Top Badge */}
      <div className="mb-8">
        <span className="inline-block px-4 py-2 bg-emerald-500 text-black text-sm font-medium rounded-full">
          What's the best
        </span>
      </div>

      {/* Header */}
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
          Key Features
        </h2>
        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
          We're proud to announce with the features
          <br />
          that empower creatives every day.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl">
       {features.map((feature, i) =>
   feature.empty ? (
      <div key={i} className="invisible"></div> // ফাঁকা জায়গা রাখবে
    ) : (
      <FeatureCard key={i} title={feature.title} span={feature.span} />
    )
  )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Feature;

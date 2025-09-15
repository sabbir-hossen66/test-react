import { Star } from "lucide-react";

const MarqueeBanner = () => {
  return (
    <div className="w-full bg-emerald-700 text-white overflow-hidden">
      <div className="flex whitespace-nowrap [animation:marquee_15s_linear_infinite]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="text-sm">
              Only for <span className="text-gray-200">limited users</span>
            </span>
            <Star className="w-3 h-3 text-white/70" />
            <span className="text-sm">Join the launch event</span>
            <Star className="w-3 h-3 text-white/70" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;

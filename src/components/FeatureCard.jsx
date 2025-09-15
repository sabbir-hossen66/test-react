import { ArrowUpRight } from "lucide-react";

const FeatureCard = ({ title, img }) => {
  return (
    <div className="relative group bg-neutral-900 rounded-xl overflow-hidden border border-transparent hover:border-emerald-500 transition-all duration-300">
      {/* Default content */}
      <div className="p-6 h-40 flex flex-col justify-between">
        <span className="font-semibold text-lg">{title}</span>
        <ArrowUpRight className="w-6 h-6 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Hover Image */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </div>
  );
};

export default FeatureCard;

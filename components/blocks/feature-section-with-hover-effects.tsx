import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconClock,
  IconHeart,
  IconPlant
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Set your goal",
      description: "Define what you want to accomplish during your focus session.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Start your flow timer",
      description: "Begin your focused work session with our mindful timer.",
      icon: <IconClock />,
    },
    {
      title: "Hydrate, stretch, breathe",
      description: "Take mindful breaks to maintain your energy and focus.",
      icon: <IconHeart />,
    },
    {
      title: "Grow your plant",
      description: "Watch your digital plant grow as you maintain consistent focus.",
      icon: <IconPlant />,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-[#364954]",
        (index === 0 || index === 4) && "lg:border-l border-[#364954]",
        index < 4 && "lg:border-b border-[#364954]"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#1e292f] to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#1e292f] to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#4FC3F7]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#364954] group-hover/feature:bg-[#4FC3F7] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
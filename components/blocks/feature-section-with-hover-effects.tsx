import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconClock,
  IconActivity,
  IconDroplet,
  IconEye,
  IconPlant,
  IconMoodCheck,
  IconTrophy,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Set your goal",
      description: "Define what you want to achieve during your focus session.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Pomodoro timer",
      description: "Kick off your work with our built-in Pomodoro timer for focused sessions.",
      icon: <IconClock />,
    },
    {
      title: "Stretch Reminders",
      description: "Get gentle nudges to stretch and refresh while coding.",
      icon: <IconActivity />,
    },
    {
      title: "Hydration Tracker",
      description: "Keep track of your water intake and stay hydrated all day.",
      icon: <IconDroplet />,
    },
    {
      title: "Eye Health Reminder",
      description: "Remember to give your eyes a break with a quick 20-20-20 check.",
      icon: <IconEye />,
    },
    {
      title: "Grow your plant",
      description: "Watch your digital plant thrive as you maintain your focus.",
      icon: <IconPlant />,
    },
    {
      title: "Guided Reflection Debrief (coming soon)",
      description: "Wrap up your session with a quick debrief to reflect on your progress.",
      icon: <IconMoodCheck />,
    },
    {
      title: "Streaks & XP System (coming soon)",
      description: "Earn XP and build up streaks as you consistently reach your goals.",
      icon: <IconTrophy />,
    },
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
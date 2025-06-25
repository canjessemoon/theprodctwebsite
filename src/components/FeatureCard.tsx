import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor,
  iconBgColor,
}: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

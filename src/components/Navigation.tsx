import Link from "next/link";
import { Zap } from "lucide-react";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <nav className={`p-6 flex justify-between items-center backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-xl text-gray-900 dark:text-white">YourSite</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          About
        </Link>
        <Link href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Services
        </Link>
        <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}

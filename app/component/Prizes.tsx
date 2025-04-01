"use client";
import { Award } from "lucide-react";

export default function Prizes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Prizes & Rewards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compete for exciting prizes and recognition in our hackathon.
            Winners will receive cash prizes and exclusive opportunities.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <MainPrizeCard value="Rs 50,000" label="First Prize" position="1" />
          <MainPrizeCard value="Rs 30,000" label="Second Prize" position="2" />
          <MainPrizeCard value="Rs 15,000" label="Third Prize" position="3" />
        </div>

        {/* Category Heading */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Special Category Winners
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a chance to win special prizes in our hackathon. Winners will
            receive cash prizes and exclusive opportunities.
          </p>
        </div>

        {/* Category Prizes */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <CategoryCard value="Rs 7,500" category="Best AI/ML Implementation" />
          <CategoryCard value="Rs 5,000" category="Best Social Impact" />
        </div>
      </div>
    </section>
  );
}

interface MainPrizeCardProps {
  value: string;
  label: string;
  position: string;
}

function MainPrizeCard({ value, label, position }: MainPrizeCardProps) {
  return (
    <div
      className={`rounded-xl p-8 flex flex-col items-center justify-center shadow-lg  transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden lg:h-[260px] border-2 border-blue-100 hover:border-primary`}
      style={{
        background: `linear-gradient(to bottom, #008fad10, white)`,
      }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 opacity-50 rounded-full -mt-10 -mr-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-50 opacity-50 rounded-full -mb-8 -ml-8"></div>

      <div className="mb-6 text-primary">
        <GiftIcon />
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
        {value}
      </h3>
      <p className="text-gray-600 text-lg font-medium">{label}</p>

      <div className="absolute top-4 right-4">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-primary`}
        >
          {position}
        </div>
      </div>
    </div>
  );
}

interface CategoryCardProps {
  category: string;
  value: string;
}

function CategoryCard({ category, value }: CategoryCardProps) {
  return (
    <div
      className={`rounded-xl p-8 flex flex-col items-center justify-center shadow-lg  transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden h-[260px] border-2 border-blue-100 hover:border-primary w-[25rem]`}
      style={{
        background: `linear-gradient(to bottom, #008fad10, white)`,
      }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 opacity-50 rounded-full -mt-10 -mr-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-50 opacity-50 rounded-full -mb-8 -ml-8"></div>

      <div className="mb-6 text-primary">
        <Award className="h-14 w-14" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        {category}
      </h3>
      <p className="text-gray-600 font-semibold text-lg">{value}</p>
    </div>
  );
}

function GiftIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12V22H4V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7H2V12H22V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

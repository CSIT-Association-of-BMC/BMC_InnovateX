import type React from "react";
import {
  Brain,
  Globe2,
  BookOpen,
  Heart,
  Plane,
  Building2,
  Wallet,
  Leaf,
  Link,
} from "lucide-react";

export default function HackathonTracks() {
  return (
    <div className="bg-[#f3f2f2] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300 py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Hackathon Tracks
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 py-16">
            <TrackCard
              icon={
                <BookOpen className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Ed-tech"
              description="Create solutions that revolutionize learning and education technology."
            />
            <TrackCard
              icon={
                <Heart className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Health & Wellness"
              description="Develop applications that improve health outcomes and promote wellness."
            />
            <TrackCard
              icon={
                <Plane className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Tourism"
              description="Build innovative solutions to enhance travel experiences and tourism services."
            />
            <TrackCard
              icon={
                <Building2 className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="E-Governance"
              description="Create platforms that improve government services and citizen engagement."
            />
            <TrackCard
              icon={
                <Wallet className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Fin-Tech"
              description="Develop innovative financial technology solutions and services."
            />
            <TrackCard
              icon={
                <Leaf className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Agri-Tech"
              description="Build solutions that address agricultural challenges and improve farming."
            />
            <TrackCard
              icon={
                <Link className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Blockchain"
              description="Create decentralized applications and blockchain-based solutions."
            />
            <TrackCard
              icon={
                <Globe2 className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Open Innovation"
              description="Build anything that solves real-world problems."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg p-8 bg-[#f7f7f7] transition-colors duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h2 className="text-xl lg:text-2xl font-bold mb-3  text-gray-800">
          {title}
        </h2>
        <p className=" text-gray-600">{description}</p>
      </div>
    </div>
  );
}

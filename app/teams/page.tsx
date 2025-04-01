import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

type TeamMember = {
  name: string;
  role?: string;
  photo?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  phone?: string;
};

const ocMembers: TeamMember[] = [
  {
    name: "Sangit Gyawali",
    linkedin: "sangitgyawali",
  },

  {
    name: "Suchana Bhandari",
    linkedin: "suchana-bhandari-a32752346",
  },

  {
    name: "Swikrity AC",
    linkedin: "swikrity-a-c-664949335",
  },
  {
    name: "Sabin Ghimire",
    linkedin: "sabinghimirenp/",
  },

  {
    name: "Sandesh Acharya",
    linkedin: "sandesh-acharya-7baa31295/",
  },
  {
    name: "Karishma Gaire",
    linkedin: "karishma-gaihre-ab994327a/",
  },

  {
    name: "Nischal Panthi",
    linkedin: "nischal-panthi/",
  },
  {
    name: "Nischal Acharya",
    linkedin: "nischal-acharya1/",
  },

  {
    name: "Anuska Sharma Bhattarai",
    linkedin: "anuskashrmbhtt",
  },
  {
    name: "Saurav GC",
    linkedin: "saurav-g-c-885964324/",
  },
  {
    name: "Namita Thapa",
    linkedin: "namita-thapa-4489a3355/",
  },
  {
    name: "Aayush Chalise",
    linkedin: "aayush-chalise-a94b522bb/",
  },
  {
    name: "Dipendra Hamal Thakuri",
    linkedin: "",
  },
];

export default function Teams() {
  return (
    <section className="py-12 mt-10 sm:py-16 lg:py-20 bg-gradient-to-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-[#0A9AAB]/5 rounded-full blur-3xl -mr-20 sm:-mr-32 -mt-20 sm:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-[#FFB800]/5 rounded-full blur-3xl -ml-20 sm:-ml-32 -mb-20 sm:-mb-32"></div>

        {/* Header with styled underline */}
        <div className="relative text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 relative inline-block">
            Our LineUps
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals who make this hackathon possible. Our
            team works tirelessly to create an amazing experience for all
            participants.
          </p>
        </div>

        <div className="rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <section className="text-center py-4">
            <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
              BMC InnovateX
              <p className="text-gray-500 text-sm">Co Leads</p>
            </h3>
            <div className="px-4 sm:px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-8 sm:px-0 gap-y-8">
                <MemberCard
                  member={{
                    name: "Suman Bhattarai",
                    role: "Event Co Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//suman_r6pfi0.webp",
                    linkedin: "suman-bhattarai-9b025322b",
                    phone: "9827144108",
                  }}
                />
                <MemberCard
                  member={{
                    name: "Sujan Khatri",
                    role: "Event Co Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//SUJAN_clyi3v.webp",
                    linkedin: "sujansince2003",
                    phone: "9843409076",
                  }}
                />
              </div>
            </div>
          </section>
          <section className="text-center py-4">
            <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
              Technical
              <p className="text-gray-500 text-sm">Co Leads</p>
            </h3>
            <div className="px-4 sm:px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-8 sm:px-0 gap-y-8">
                <MemberCard
                  member={{
                    name: "Sanchit Pandey",
                    role: "Technical |  Co Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//sanchit1.JPG",
                    linkedin: "sanchitpandeyyy",
                    phone: "9841148149",
                  }}
                />
                <MemberCard
                  member={{
                    name: "Bipin Khatri",
                    role: "Technical |  Co Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//bipinkhatri.png",
                    linkedin: "bipinkhatri",
                    phone: "9867418196",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-8 sm:px-0 gap-y-8">
          <section className="rounded-xl overflow-hidden">
            <div className="text-center py-4">
              <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                Design
                <p className="text-gray-500 text-sm">Lead</p>
              </h3>
            </div>
            <div className="px-4 sm:px-6 pb-6">
              <div className="grid grid-cols-1  gap-4">
                <MemberCard
                  member={{
                    name: "Anuradha Pandey",
                    role: "Design | Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//ANU_kwix9a.webp",
                    linkedin: "anuradha-pandey-2936a2321",
                    phone: "9860116081",
                  }}
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl overflow-hidden">
            <div className="text-center py-4">
              <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                Sponsorship
                <p className="text-gray-500 text-sm">Lead</p>
              </h3>
            </div>
            <div className="px-4 sm:px-6 pb-6">
              <div className="grid grid-cols-1  gap-4">
                <MemberCard
                  member={{
                    name: "Bivek Acharya",
                    role: "Sponsor | Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//BIBEK_ypwryr.webp",
                    linkedin: "bivek-acharya-5746282b2",
                    phone: "9857082009",
                  }}
                />
              </div>
            </div>
          </section>
          <section className="rounded-xl overflow-hidden">
            <div className="text-center py-4">
              <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                Documentation
                <p className="text-gray-500 text-sm">Lead</p>
              </h3>
            </div>
            <div className="px-4 sm:px-6 pb-6">
              <div className="grid grid-cols-1  gap-4">
                <MemberCard
                  member={{
                    name: "Shikshya Acharya",
                    role: "Documentation | Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//shikshya_qw8rge.webp",
                    linkedin: "shikshyaacharyaa",
                    phone: "9849511233",
                  }}
                />
              </div>
            </div>
          </section>
          <section className="rounded-xl overflow-hidden">
            <div className="text-center py-4">
              <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                Content Creation
                <p className="text-gray-500 text-sm">Lead</p>
              </h3>
            </div>
            <div className="px-4 sm:px-6 pb-6">
              <div className="grid grid-cols-1  gap-4">
                <MemberCard
                  member={{
                    name: "Govinda Sagar Bhusal",
                    role: "Content Creation | Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//GOVINDA_cma3ba.webp",
                    linkedin: "shikshyaacharyaa",
                    phone: "9843875170",
                  }}
                />
              </div>
            </div>
          </section>
        </div>

        <div className="w-full ">
          <section className="rounded-xl col-span-3 overflow-hidden">
            <div className="text-center py-4">
              <h3 className="inline-block text-lg font-semibold text-gray-700 px-20 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                Logistics
                <p className="text-gray-500 text-sm">Co Leads</p>
              </h3>
            </div>
            <div className="px-4  sm:px-6 pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-8 sm:px-0 gap-10">
                <MemberCard
                  member={{
                    name: "Kritan Aryal",
                    role: "Logistics | Co Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//KRITAN_wyjb7r.webp",
                    linkedin: "aryalkritan11",
                    phone: "9863174678",
                  }}
                />
                <MemberCard
                  member={{
                    name: "Krishna Jaiswal",
                    role: "Logistics | Co Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//krishna%20jaiswal.jpeg",
                    linkedin:
                      "https://www.linkedin.com/in/krishnakumarjaiswal/",
                    phone: "9814415470",
                  }}
                />
                <MemberCard
                  member={{
                    name: "Karuna Pyakurel",
                    role: "Logistics | Co Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//KARUNA_lfuxdb.webp",
                    linkedin: "karuna-pyakurel-abbb172a8",
                    phone: "9867385552",
                  }}
                />
                <MemberCard
                  member={{
                    name: "Pratik Aryal",
                    role: "Logistics | Co Lead",
                    photo:
                      "https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//pratik.jpg",
                    linkedin: "pratik-aryal-256a79289",
                    phone: "9845455112",
                  }}
                />
              </div>
            </div>
          </section>
        </div>

        <div className="text-center py-4">
          <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 mb-4 bg-white rounded-full shadow-sm border border-gray-100">
            Organizing Committee Members
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ocMembers.map((member, memberIndex) => (
              <OCMembersCard key={memberIndex} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col w-full">
      {member.photo && (
        <div className="relative w-full pt-[100%] overflow-hidden bg-gray-50">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={member.photo || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover grayscale-30 object-center"
            />
          </div>
        </div>
      )}
      <div className="p-3 text-center flex-1 flex flex-col">
        <h4 className="font-semibold text-sm text-gray-800">{member.name}</h4>
        <p className="text-[#0A9AAB] text-xs font-medium mb-2">{member.role}</p>

        {member.phone && (
          <p className="text-xs text-gray-600 mb-3">{member.phone}</p>
        )}

        <div className="flex justify-center space-x-2 mt-auto">
          {member.email && (
            <div className="relative group/tooltip">
              <Link
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-7 w-7 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-800/10 hover:text-gray-800 transition-colors"
                aria-label={`${member.name}'s Email ID`}
              >
                <Mail className="h-3.5 w-3.5" />
              </Link>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                GitHub
              </span>
            </div>
          )}
          {member.linkedin && (
            <div className="relative group/tooltip">
              <Link
                href={`https://linkedin.com/in/${member.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-7 w-7 rounded-full bg-gray-100 text-gray-500 hover:bg-[#0277b5]/20 hover:text-[#0277b5] transition-colors"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <Linkedin className="h-3.5 w-3.5" />
              </Link>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                LinkedIn
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const OCMembersCard = ({ member }: { member: TeamMember }) => {
  return (
    <Link
      href={`https://linkedin.com/in/${member.linkedin}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#0A9AAB]/10 flex items-center justify-center text-[#0A9AAB] font-semibold">
          {member.name.charAt(0)}
        </div>
        <h4 className="font-medium text-gray-800 text-sm">{member.name}</h4>
        <div className="flex justify-center"></div>
      </div>
    </Link>
  );
};

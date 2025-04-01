import { getSponsors } from "@/actions/getSponsor";
import { sortSponsors } from "@/lib/sponsor";
import Image from "next/image";

export default async function Sponsors() {
  const data = await getSponsors();
  const sponsors = sortSponsors(data);
  return (
    <section className="py-20 bg-gradient-to-b bg-[#f4f4f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A9AAB]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFB800]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Our <span className="">Sponsors</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re grateful to our sponsors who make this event possible.
            Their support enables innovation and growth in our community.
          </p>
        </div>

        {/* name Sponsor */}
        <div className="mb-10 p-4 rounded-lg bg-gray-50 ">
          <div className="p-4">
            <div className="text-center mb-8">
              <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                Organizer
              </h3>
            </div>
            <div className="flex gap-8 mx-auto">
              <SponsorCard
                name="CSIT Association of BMC"
                description="CSIT Association of BMC is a non-profitable organization inside Butwal Multiple Campus created for the welfare of CSIT Students by the CSIT students and operating actively since 2016. We have been conducting several tech and non-tech workshops internally and helping students to connect with national tech community. Similarly, we also play a part in assisting our college department for technical assistance and provide suggestions based on technology criteria. We believe that the students should be provided with the relevant skills and platform to prepare them for their career and at last we are at Butwal Multiple Campus with the motive of helping students to address their problem as well."
                logo="https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/photos//csitabmc.png"
                url="https://csitabmc.com"
              />
            </div>
          </div>
        </div>
        <div className="mb-20 p-4 rounded-lg grid lg:grid-cols-2 gap-4">
          <div className="bg-gray-50 col-span-2 p-4">
            <div className="text-center mb-8">
              <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                Title Sponsor
              </h3>
            </div>
            <div className="flex gap-8 mx-auto">
              <SponsorCard
                name="Butwal Multiple Campus"
                description="Butwal  Multiple Campus is a prominent educational institution located in Butwal, Rupandehi district, within the heart of Lumbini Provience. Established in 2030 B.S. (1973 A.D.), this campus was founded with the vision of providing affordable and quality higher education to students. Over the decades, it has earned a reputation for academic excellence and has become a preferred destination for students seeking higher education in various disciplines. The campus is affiliated with Tribhuvan University (TU), the oldest and most prestigious university in Nepal. Programs Offered BMC offers a wide range of programs in diverse fields, including humanities, management, education, and science. The campus provides both undergraduate and graduate-level courses, making it accessible to a broad spectrum of students. Popular programs include Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT), Bachelor of Business Administration (BBA), Bachelor of Business Studies (BBS), Bachelor of Education (B.Ed.), Bachelor of Arts (BA), Bachelor of Science (B.Sc.), and Master's programs in Education (M.Ed.) and Business Studies (MBS). "
                logo="https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/public/sponsors//TU_Logo.jpg"
                url="https://bumc.tu.edu.np/"
              />
            </div>
          </div>
          {/* <div className="bg-gray-50 p-4">
            <div className="text-center mb-8">
              <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                Powered By
              </h3>
            </div>
            <div className="flex gap-8 mx-auto">
              <SponsorCard
                name="CSIT Association of BMC"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
                url="#"
              />
            </div>
          </div> */}
        </div>
        {/* Sponsor Section */}
        <div className="flex flex-wrap gap-4 ">
          {Object.keys(sponsors).map((sponsorname, i) => {
            const sponsor = sponsors[sponsorname];
            return (
              <div
                key={i}
                className={`bg-gray-50 rounded-lg 
                  ${sponsor.length >= 3 && " w-full p-4"} 
                  ${
                    sponsor.length == 2 &&
                    " w-full py-4 lg:w-[60%] lg:p-4 lg:m-2"
                  } 
                  ${
                    sponsor.length === 1 &&
                    "w-full py-4 m-auto md:w-[48%] lg:p-4 lg:m-2 lg:w-[30%]"
                  } 
                  `}
              >
                <div className="text-center mb-8">
                  <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                    {sponsorname}
                  </h3>
                </div>
                <div
                  className={`grid md:grid-cols-2 ${
                    sponsor.length >= 3 && "lg:grid-cols-3"
                  } gap-4`}
                >
                  {sponsor.map((spon, i) => (
                    <SponsorCard
                      key={i}
                      name={spon.name}
                      description={spon.description}
                      url={spon.website}
                      logo={spon.logo}
                      className="p-4 min-w-[20rem] mb-10 rounded-xl"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SponsorCard({
  name,
  description,
  url,
  logo,
  className,
}: {
  name: string;
  description: string;
  url: string;
  logo?: string;
  className?: string;
}) {
  return (
    <div
      className={` flex flex-col justify-center sm:block items-center ${className}`}
    >
      <Image
        width={200}
        height={200}
        src={
          logo
            ? logo
            : "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&q=80"
        }
        alt="TechCorp"
        className="h-25 w-40 object-contain rounded-md mb-4"
      />
      <h3 className="text-xl sm:text-left text-center font-semibold mb-2">
        {name}
      </h3>
      <p className={`text-gray-60 sm:text-left text-center mb-4 line-clamp-5 `}>
        {description}
      </p>
      <a
        href={url}
        className="text-primary underline flex items-center"
        target="_blank"
      >
        Visit Website
      </a>
    </div>
  );
}

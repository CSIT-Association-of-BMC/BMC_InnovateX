import Image from "next/image";
import { Users, Award, Calendar, Target, Trophy, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="w-48 h-48 relative mb-8">
          <Image
            src="https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/sign/photos/csitabmc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3MvY3NpdGFibWMucG5nIiwiaWF0IjoxNzQyOTcxMDU0LCJleHAiOjE3NzQ1MDcwNTR9.O--rFXVKoD7xSBmdd_pKH0G87HYqqI4Ur8_WjOanUFs"
            alt="CSIT Association of BMC Logo"
            width={192}
            height={192}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">
          CSIT Association of BMC
        </h1>
        <div className="w-24 h-1 bg-primary mb-8"></div>
      </div>

      {/* Organizing Body */}
      <div className="mb-16">
        <div className="bg-gray-50 py-8 px-2 md:px-8 rounded-xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            <strong>CSIT Association of BMC</strong> is a non-profitable
            organization inside Butwal Multiple Campus created for the welfare
            of CSIT Students by the CSIT students and operating actively since
            2016. We have been conducting several tech and non-tech workshops
            internally and helping students to connect with national tech
            community. Similarly, we also play a part in assisting our college
            department for technical assistance and provide suggestions based on
            technology criteria. We believe that the students should be provided
            with the relevant skills and platform to prepare them for their
            career and at last we are at Butwal Multiple Campus with the motive
            of helping students to address their problem as well.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">16+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Photo */}
      <div className="mb-16">
        <div className="aspect-[16/9] relative rounded-xl overflow-hidden">
          <Image
            src="https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/sign/photos/team_csitabmc.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3MvdGVhbV9jc2l0YWJtYy5qcGciLCJpYXQiOjE3NDI5NzEyNDgsImV4cCI6MTc3NDUwNzI0OH0.gKmgR9bbhwCtq-xAj9ASWI6pZWlM0jKwdEYEIJAsEfM"
            alt="CSIT Association Team"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-center text-gray-600 mt-4">
          The CSIT Association of BMC Team - 2024/25
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To foster innovation and technological advancement by providing a
              platform where students can collaborate, learn, and create
              solutions that address real-world challenges while developing
              essential skills for their future careers.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Trophy className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the leading collegiate hackathon in India, recognized
              for nurturing talent, promoting innovation, and creating a lasting
              impact on the tech community while bridging the gap between
              academia and industry.
            </p>
          </div>
        </div>
      </div>

      {/* Our History */}
      <div className="mb-16">
        <div className="bg-gray-50 py-8  px-2 md:px-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2016</h3>
                    <p className="text-gray-600">
                      Founded by a group of passionate CSIT students with a
                      vision to create a supportive tech community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2020</h3>
                    <p className="text-gray-600">
                      Expanded our reach by conducting virtual workshops during
                      the pandemic, connecting with students nationwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2024</h3>
                    <p className="text-gray-600">
                      Organized our first major hackathon with participation
                      from multiple colleges all over nepal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2025</h3>
                    <div className="text-gray-600 ">
                      Organizing BMC InnovateX - The National Level Hackathon,
                      48 hour hackathon with 60+ participants from all over
                      Nepal. and 2000+ viewers from IT Industry, colleges and
                      schools.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <Image
                src="https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/sign/photos/cistabmc_event_aws.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3MvY2lzdGFibWNfZXZlbnRfYXdzLmpwZyIsImlhdCI6MTc0Mjk3MjE5NiwiZXhwIjoxNzc0NTA4MTk2fQ.erksltU5m_kgEhkxXi0XCRi_TDNlu8TVq1-2IBh5r0Q"
                alt="CSIT Association Journey"
                fill
                className="object-cover object-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mb-8">
          <Users className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-2xl font-semibold">Previous Event Highlights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          <Link href="https://www.csitabmc.com/events/ne4vrmg9xiw6ihpkbox2keza">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Image
                width={200}
                height={200}
                src="https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/sign/photos/Gracathon_9a8cbfa9af.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3MvR3JhY2F0aG9uXzlhOGNiZmE5YWYuanBnIiwiaWF0IjoxNzQyOTczNzk1LCJleHAiOjE3NzQ1MDk3OTV9.yNwNpAdjuozfF7Ebekr6oX-M5wVURBGcOD2zf61jRx8"
                alt="2024 Winner"
                className="rounded-lg mb-4 mx-auto h-48 w-48 object-cover"
              />
              <h3 className="font-semibold mb-2">Gracathon 2080</h3>
            </div>
          </Link>
          <Link
            href="https://www.csitabmc.com/events/b34jgji1or0t4vzckg2n2562"
            className="bg-gray-50 p-6 rounded-xl text-center"
          >
            <div>
              <Image
                width={200}
                height={200}
                src="https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/sign/photos/Fowd_38e3ce6ce8.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3MvRm93ZF8zOGUzY2U2Y2U4LmpwZyIsImlhdCI6MTc0Mjk3MzcxNiwiZXhwIjoxNzc0NTA5NzE2fQ.HYLWZRyDIoN9IjiiVcCGWol6C2oe2X_7o02VOq_GTUQ"
                alt="2023 Winner"
                className="rounded-lg mb-4 mx-auto h-48 w-48 object-cover"
              />
              <h3 className="font-semibold mb-2">
                Fundamentals of web development
              </h3>
            </div>
          </Link>
          <Link
            href="https://www.csitabmc.com/events/og6itbmp78lpx1tgx0s565og"
            className="bg-gray-50 p-6 rounded-xl text-center"
          >
            <div>
              <Image
                width={200}
                height={200}
                src="https://lmnstrirupgjxplzedki.supabase.co/storage/v1/object/sign/photos/Graphics_Designing_6a044c6b2a.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3MvR3JhcGhpY3NfRGVzaWduaW5nXzZhMDQ0YzZiMmEuanBnIiwiaWF0IjoxNzQyOTczNzUwLCJleHAiOjE3NzQ1MDk3NTB9.XlmWEf6SREfyUxuGmtixMijmcMhLcxDAQ5QidfVm-gE"
                alt="2022 Winner"
                className="rounded-lg mb-4 mx-auto h-48 w-68 object-cover"
              />
              <h3 className="font-semibold mb-2">Graphics Designing</h3>
            </div>
          </Link>
        </div>
        <div className="flex pt-6 justify-center">
          <Link href="https://www.csitabmc.com/events">
            <Button className="cursor-pointer">View More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

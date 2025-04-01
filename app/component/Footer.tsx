import React from "react";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Organizer", slug: "/organizer", active: true },
    { name: "Schedule", slug: "/schedule", active: true },
    { name: "Teams", slug: "/teams", active: true },
    { name: "Sponsors", slug: "/sponsors", active: true },
    { name: "Tracks", slug: "/tracks", active: true },
    { name: "Contact", slug: "/contact", active: true },
  ];

  return (
    <footer className="bg-[#008FAD] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Innovation Unleashed
            </h3>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-gray-100 text-sm leading-relaxed">
                <span className="font-semibold text-white">BMC InnovateX</span>{" "}
                is a 48-hour national level hackathon, presented by Butwal
                Multiple Campus and organized by CSIT Association of BMC.
              </p>
              <p className="text-gray-100 text-sm mt-2 leading-relaxed">
                The "X" in InnovateX symbolizes multiplication of innovation,
                encouraging participants to think beyond limits. The event
                brings together students, developers, and innovators to
                collaborate, build, and showcase groundbreaking solutions.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">
              Quick Links
            </h4>
            <div className="space-y-3 ">
              {navItems.map((item, i) => (
                <h2 key={i}>
                  <Link
                    href={item.slug}
                    className="hover:text-white text-gray-100  transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                  </Link>
                </h2>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">
              Resources
            </h4>
            <div className="space-y-3 ">
              <div>
                <Link
                  href="/codeofconduct"
                  className="hover:text-white text-gray-100 transition-colors duration-200 flex items-center"
                >
                  Code Of Conduct
                </Link>
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/1ycHfUpAHLp8JAoystP8t96FmVHQxf7-5/view?usp=sharing"
                  target="_blank"
                  className="hover:text-white text-gray-100 transition-colors duration-200 flex items-center"
                >
                  Documentation
                </a>
              </div>
              <div>
                <Link
                  href="/guide"
                  className="hover:text-white text-gray-100 transition-colors duration-200 flex items-center"
                >
                  Guide for Participants
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">
              Follow Us
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/CSIT-Association-of-BMC"
                className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-gray-100" />
              </a>
              <a
                href="https://www.linkedin.com/company/bmcinnovatex"
                className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-gray-100" />
              </a>
              <a
                href="https://www.facebook.com/BMCInnovateX"
                className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-gray-100" />
              </a>
              <a
                href="https://www.instagram.com/bmcinnovatex/"
                className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-gray-100" />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">
                Contact
              </h4>
              <p className="text-gray-100 text-sm">
                Email: innovatex@csitabmc.com
              </p>
              <p className="text-gray-100 text-sm mt-2">
                Phone: +977-9841148149
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-100">
          <p className="text-sm">
            &copy; 2025 <span className="font-semibold">BMC InnovateX </span>.
            All rights reserved.
          </p>
          {/* <p className="text-xs mt-2 opacity-80">Made with ❤️ by CSITABMC</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import Navbar from "./component/Nav";
import NextTopLoader from "nextjs-toploader";
import Clarity from "@microsoft/clarity";
// import { AdPopup } from "./component/AdPopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innovatex.csitabmc.com/"),
  title: "BMC InnovateX | National Level Hackathon",
  description:
    "BMC InnovateX is a national-level hackathon organized by the CSIT Association of Butwal Multiple Campus, fostering innovation and creativity in technology.",
  keywords: [
    "BMC InnovateX",
    "hackathon",
    "CSIT Association",
    "Butwal Multiple Campus",
    "coding competition",
    "technology event",
    "programming challenge",
    "innovation",
    "tech enthusiasts",
  ],
  authors: [{ name: "BMC InnovateX", url: "https://innovatex.csitabmc.com" }],
  openGraph: {
    title: "BMC InnovateX | National Level Hackathon",
    description:
      "Join BMC InnovateX, a national-level hackathon by the CSIT Association of Butwal Multiple Campus",
    url: "https://innovatex.csitabmc.com",
    siteName: "BMC InnovateX",
    images: [
      {
        url: "/assets/BMC_InnovateX.png",
        width: 1200,
        height: 630,
        alt: "BMC InnovateX Hackathon",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const clarityProjectId = process.env.CLARITY_PROJECT_ID as string;
  Clarity.init(clarityProjectId);
  return (
    <html lang="en">
      <head>
        <meta />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <NextTopLoader color="white" showSpinner={false} />
        {/* <AdPopup /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

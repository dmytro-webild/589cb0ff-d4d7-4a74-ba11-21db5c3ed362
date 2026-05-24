import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'MOAI Kitchen | Luxury Immersive Dining Experience Hyderabad',
  description: 'Where dining becomes an experience. Discover Moai Kitchen in Financial District, Hyderabad for luxury global cuisine, exotic cocktails and unforgettable atmosphere.',
  openGraph: {
    "title": "MOAI Kitchen | Luxury Dining in Hyderabad",
    "description": "Immersive luxury dining experience inspired by island architecture and global flavours.",
    "siteName": "MOAI Kitchen"
  },
};



const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

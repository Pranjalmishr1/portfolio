import { ThemeContextProvider } from "@/context/ThemeContext";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import MyThemeProvider from "@/providers/ThemeProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pranjal Mishra | Full Stack Developer Portfolio",

  description:
    "Portfolio of Pranjal Mishra showcasing MERN stack projects, Machine Learning models, QA automation testing experience, and AWS Cloud certification.",

  keywords: [
    "Pranjal Mishra",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Machine Learning Engineer",
    "QA Automation Engineer",
    "AWS Cloud Practitioner",
    "Portfolio",
  ],

  authors: [{ name: "Pranjal Mishra" }],

  creator: "Pranjal Mishra",

  metadataBase: new URL("https://your-vercel-link.vercel.app"),

  openGraph: {
    title: "Pranjal Mishra Portfolio",
    description:
      "Full Stack Developer skilled in MERN stack, Machine Learning and Automation Testing.",
    url: "https://your-vercel-link.vercel.app",
    siteName: "Pranjal Portfolio",
    locale: "en_US",
    type: "website",
  },

  other: {
    "google-site-verification":
      "eLCM6ksBJdj_cMa_q5zOgIt2F6pe_PIIyq10FU2WSQ8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeContextProvider>
          <MyThemeProvider>{children}</MyThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
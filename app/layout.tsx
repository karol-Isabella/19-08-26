import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SOFIA Plus - Sistema de Oferta de Formación Institucional del SENA",
  description: "Portal oficial del SENA para programas de formación, cursos virtuales y certificados profesionales",
  keywords: "SENA, formación, cursos virtuales, certificados, capacitación",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}

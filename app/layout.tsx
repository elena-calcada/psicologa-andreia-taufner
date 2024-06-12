import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-dm_sans'
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.psicologaandreiataufner.com.br'),
  title: "Psicóloga Andreia Taufner - Vila Velha/ES",
  description: "A psicóloga Andreia Taufner, oferece terapia individualizada para crianças, adolescentes e adultos em Vila Velha/ES.",
  keywords: ["Andreia Taufner - Psicóloga Clínica", "Vila Velha", "cidade Vila Velha", "ES", "Estado do Espírito Santo", "Psicóloga Clínica em Vila Velha/ES", "Terapia", "Terapia em Vila Velha/ES", "Psicoterapia", "Psicoterapia em Vila Velha/ES", "Ansiedade", "Depressão", "Psicoterapia para depressão", "Autoconhecimento", "Psicoterapia para autoconhecimento", "Desenvolvimento pessoal", "Psicoterapia para Desenvolvimento pessoal", "Psicoterapia infantil", "Psicoterapia para adolescentes", "Psicoterapia para adultos", "Psicoterapia para ansiedade", "Psicoterapia para depressão", "Desenvolvimento infantil", "Psicoterapia para oDesenvolvimento infantil", "Problemas comportamentais", "Psicoterapia para TDAH", "Abordagens inovadoras", "Terapia individualizada", "Ambiente acolhedor", "Psicóloga Qualificada", "Psicóloga Empática", "Psicóloga de confiança"],
  openGraph: {
    title: "Psicóloga Andreia Taufner",
    description: "Psicóloga Clínica de crianças, adolescentes e adultos em Vila Velha/ES.",
    url: "https://www.psicologaandreiataufner.com.br",
    siteName: "Psicóloga Andreia Taufner",
    images: [
      {
        url: "/openGraphImage.png",
        alt: "Esta é uma fotografia da psicóloga Andreia Taufner, uma mulher com cabelo vermelho encaracolado, vestindo uma blusa verde e preta com um colar de contas turquesa. Ela está usando óculos de armação vermelha e olhando para a câmera. Ela parece amigável e confiante. O fundo é branco e parece ser tirado em um ambiente interno."
      }
    ],
    locale: "pt-BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" className="bg-gray-200">
      <body className={`${dm_sans.variable} ${poppins.variable} w-full max-w-[1920px] mx-auto bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

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
  keywords: ["Psicoterapia", "Terapia", "Psicologia", "Andreia Taufner", "Psicóloga Clínica", "Vila Velha", "cidade Vila Velha", "ES", "Estado do Espírito Santo", "Psicóloga Clínica em Vila Velha/ES", "Terapia em Vila Velha/ES", "Psicoterapia em Vila Velha/ES", "Ansiedade", "Transtornos de ansiedade", "Psicoterapia para ansiedade", "Depressão", "Psicoterapia para depressão", "Autoconhecimento", "Psicoterapia para autoconhecimento", "Desenvolvimento pessoal", "Psicoterapia para desenvolvimento pessoal", "crianças", "adolescentes", "adultos", "Psicoterapia para adolescentes", "Psicoterapia para adultos", "Problemas comportamentais", "Transtorno do Déficit de Atenção", "TDA", "Transtorno do Déficit de Atenção e Hiperatividade", "TDAH", "Psicoterapia para TDAH", "Orientação de pais e responsáveis", "Orientação profissional", "Transtorno Obsessivo Compulsivo", "TOC", "Traumas", "Transtornos relacionados a traumas", "Distúrbio do sono", "Comportamento alimentar", "Distúrbio alimentar", "Autoestima", "Autocuidado", "Relacionamentos familiares", "relacionamentos interpessoais", "online", "Atendimento online", "presencial", "Atendimento presencial", "Saúde mental", "Qualidade de vida", "Abordagens inovadoras", "Terapia individualizada", "Ambiente acolhedor", "Psicóloga Qualificada", "Psicóloga Empática", "Psicóloga de confiança", "idosos", "terapia para idosos"],
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

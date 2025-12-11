import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Caique Dev | Fullstack Developer",
  description: "Desenvolvedor fullstack especializado em criar soluções eficientes e escaláveis.",
  keywords: "caique silva, caique silva portfolio, caique silva cv, caique silva curriculo, caique silva resume, caique silva projetos, caique silva backend, caique silva fontend, caique silva fullstack, caique silva desenvolvedor, caique silva developer, caique silva programação, caique portfolio, caique cv, caique curriculo, caique resume, caique projetos, caique backend, caique fontend, caique fullstack, caique desenvolvedor, caique developer, caique programação, scaique, scaique portfolio, scaique cv, scaique curriculo, scaique resume, scaique projetos, scaique backend, scaique fontend, scaique fullstack, scaique desenvolvedor, scaique developer, scaique programação,",
  author: "Caique Silva",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Caique Dev | Fullstack Developer',
    description: 'Desenvolvedor fullstack especializado em criar soluções eficientes e escaláveis.',
    url: 'https://scaique.dev.br',
    image: {
      url: 'https://scaique.dev.br/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Imagem de visualização',
    },
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caique Dev | Fullstack Developer',
    description: 'Desenvolvedor fullstack especializado em criar soluções eficientes e escaláveis.',
    image: 'https://scaique.dev.br/twitter-image.jpg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-mono bg-primario text-terciario" >
        {children}
        <Footer />
      </body>
    </html>
  );
}

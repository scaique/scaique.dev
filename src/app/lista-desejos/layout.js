import "../globals.css";

export const metadata = {
  title: "Projetos | Lista de Desejos",
  description: "Lista de desejos de produtos",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <>
        {children}
    </>
  );
}

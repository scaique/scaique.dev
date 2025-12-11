import "../globals.css";

export const metadata = {
  title: "Unollowers for Bluesky | Redirecionamento",
  description: "Redirecionamento para a nova página do Unfollowers for Bluesky.",
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

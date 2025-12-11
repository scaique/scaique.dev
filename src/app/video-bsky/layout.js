import "../globals.css";

export const metadata = {
  title: "Video Downloader for Bluesky | Descontinuado",
  description: "Site Descontinuado.",
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

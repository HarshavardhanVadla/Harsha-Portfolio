import "./globals.css";
import Script from "next/script";
export const metadata = {
  metadataBase: new URL("https://harsha-portfolio-mu.vercel.app"),
  title: "Harsha Vardhan — Full-Stack Developer",
  description: "Node.js & React developer building modern web apps.",
  openGraph: {
    title: "Harsha Vardhan — Full-Stack Developer",
    description: "Node.js & React developer building modern web apps.",
    url: "https://harsha-portfolio-mu.vercel.app",
    siteName: "Harsha Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <Script id="theme-init" strategy="beforeInteractive">
        {`(function(){try{
          var s = localStorage.getItem('theme');
          var d = s ? (s === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.classList.toggle('dark', d);
        }catch(e){}})();`}
      </Script>
      <body className="font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 [color-scheme:light] dark:[color-scheme:dark]">
        {children}
      </body>
    </html>
  );
}

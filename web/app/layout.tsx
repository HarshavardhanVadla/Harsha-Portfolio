import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Harsha Vardhan — Full-Stack Developer",
  description: "Node.js & React developer building modern web apps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      {/* Set theme before React hydrates (prevents flash) */}
      <Script id="theme-init" strategy="beforeInteractive">
        {`(function(){try{
          var s = localStorage.getItem('theme');
          var d = s ? (s === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
          // Force class to correct state on every load
          document.documentElement.classList.toggle('dark', d);
        }catch(e){}})();`}
      </Script>
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100
                       [color-scheme:light] dark:[color-scheme:dark]">
        {children}
      </body>
    </html>
  );
}

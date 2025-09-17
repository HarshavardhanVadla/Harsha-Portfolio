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
      <Script id="theme-init" strategy="beforeInteractive">
        {`(function(){try{
          var s=localStorage.getItem('theme');
          var d=s? s==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
          if(d) document.documentElement.classList.add('dark');
        }catch(e){}})();`}
      </Script>
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}

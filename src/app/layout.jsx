import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClient, ThemeProvider } from "@/providers";
import { Footer, Header } from "@/components/layouts";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Weather App",
  description: "Weather forecast on your fingertips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "development" && (
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClient>
            <TooltipProvider>
              <section className="grid w-full grid-rows-[auto_1fr_auto] min-h-dvh relative z-10">
                <Header />
                <main className="h-full">
                  <section className="max-w-7xl mx-auto p-4 border-x border-dashed h-full">
                    {children}
                  </section>
                </main>
                <Footer />
              </section>
            </TooltipProvider>
          </QueryClient>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}

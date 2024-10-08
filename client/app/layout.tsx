
import "./globals.css";
import { ThemeProvider } from "./utils/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-black dark:to-black duration-300 " >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>


          {children}


        </ThemeProvider>
      </body >
    </html>
  );
}

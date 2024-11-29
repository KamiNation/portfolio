
import "./globals.css";
import { ThemeProvider } from "./utils/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className=" !bg-white dark:!bg-black " >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>


          {children}


        </ThemeProvider>
      </body >
    </html>
  );
}

import "./globals.css";
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: "DSA Visualizer",
  description: "A tool for visualizing Data Structures and Algorithms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-b from-white via-[#f8fafc] to-[#e2e8f0] dark:bg-gradient-to-bl dark:from-[#172554] dark:via-[#2] dark:to-[#2962ff] text-[#000000] dark:text-[#ffffff]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

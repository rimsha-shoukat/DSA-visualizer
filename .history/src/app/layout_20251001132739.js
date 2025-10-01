import "./globals.css";
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: "DSA Visualizer",
  description: "A tool for visualizing Data Structures and Algorithms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f5f5f5] dark:bg-[#1e2a38] text-[#000000] dark:text-[#ffffff]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

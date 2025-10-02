import "./globals.css";
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: "DSA Visualizer",
  description: "A tool for visualizing Data Structures and Algorithms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-t from-gray-300 via-gray-100 to-gray-300 dark:bg-gradient-to-t dark:from-blue-800 dark:via-gray-800 dark:to-gray-900 text-[#000000] dark:text-[#ffffff]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

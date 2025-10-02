import "./globals.css";
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: "DSA Visualizer",
  description: "A tool for visualizing Data Structures and Algorithms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-t from-gray-400 via-gray-500 to-gray-400 dark:bg-gradient-to-t dark:from-gray-800 dark:via-blue-700 dark:to-gray-900 text-[#000000] dark:text-[#ffffff]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

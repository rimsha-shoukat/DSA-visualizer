import "./globals.css";
import { ThemeProvider } from 'next-theme';

export const metadata = {
  title: "DSA Visualizer",
  description: "A tool for visualizing Data Structures and Algorithms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <body>
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}

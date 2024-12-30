import { Inter } from "next/font/google";
import "./globals.css";
// this will apply to literally all of the pages in your app
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

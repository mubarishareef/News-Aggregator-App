import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateContext } from "../../context/stateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateContext>
        <body className={inter.className}>{children}</body>
      </StateContext>
    </html>
  );
}

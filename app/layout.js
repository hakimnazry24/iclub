import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import NavbarWithSidebar from "@/components/NavbarWithSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iClub | Manage Your Club Seamlessly",
  description: "This is the official website of the iClub, a club management system",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme='light'>
      <body className={inter.className}>
      <section className=' '>
          <NavbarWithSidebar/>
          {children}
      </section>
      </body>
    </html>
  );
}

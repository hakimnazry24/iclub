import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import NavbarWithSidebar from "@/components/NavbarWithSidebar";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryProvider} from "@/Context/QueryProvider";
import { ViewTransitions} from "next-view-transitions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iClub | Manage Your Club Seamlessly",
  description: "This is the official website of the iClub, a club management system",
};

export default function RootLayout({ children }) {

  return (
    <ViewTransitions>
    <html lang="en" data-theme='light'>
      <body className={inter.className}>
      <QueryProvider>
          <NavbarWithSidebar/>
          {children}
      </QueryProvider>
      </body>
    </html>
    </ViewTransitions>
  );
}

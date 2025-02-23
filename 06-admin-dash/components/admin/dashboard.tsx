"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Overview from "./overview";
import RecentSales from "./recent-sales";
import RecentOrders from "./recent-orders";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex overflow-hidden">
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Dashboard
            </h1>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <Overview />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <RecentSales />
              <RecentOrders />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, BarChart } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/admin/", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="h-full p-2 bg-white">
      <nav className="mt-5">
        {sidebarItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start px-4 py-5 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                pathname === item.href && "bg-gray-100 text-gray-900",
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  )
}


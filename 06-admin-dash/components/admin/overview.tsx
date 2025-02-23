import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, ShoppingBag, TrendingUp } from "lucide-react"

const overviewCards = [
  {
    title: "Total Revenue",
    icon: DollarSign,
    amount: "$45,231.89",
    description: "+20.1% from last month",
  },
  {
    title: "New Customers",
    icon: Users,
    amount: "2,350",
    description: "+15.3% from last month",
  },
  {
    title: "Total Orders",
    icon: ShoppingBag,
    amount: "5,462",
    description: "+8.2% from last month",
  },
  {
    title: "Conversion Rate",
    icon: TrendingUp,
    amount: "3.25%",
    description: "+2.1% from last month",
  },
]

export default function Overview() {
  return (
    <>
      {overviewCards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.amount}</div>
            <p className="text-xs text-muted-foreground">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}


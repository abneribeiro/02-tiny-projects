import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentOrders = [
  {
    id: "1234",
    product: "Smartphone X",
    customer: "John Doe",
    total: "$999.00",
    status: "Completed",
  },
  {
    id: "1235",
    product: "Laptop Pro",
    customer: "Jane Smith",
    total: "$1,499.00",
    status: "Processing",
  },
  {
    id: "1236",
    product: "Wireless Earbuds",
    customer: "Bob Johnson",
    total: "$129.00",
    status: "Shipped",
  },
  {
    id: "1237",
    product: "Smart Watch",
    customer: "Alice Brown",
    total: "$249.00",
    status: "Pending",
  },
  {
    id: "1238",
    product: "Tablet Mini",
    customer: "Charlie Wilson",
    total: "$399.00",
    status: "Completed",
  },
]

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


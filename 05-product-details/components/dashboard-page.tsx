import {
  Table,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
export default function Dashboard() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Table>
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>ID</TableHead>
        </TableHeader>
      </Table>
    </div>
  );
}

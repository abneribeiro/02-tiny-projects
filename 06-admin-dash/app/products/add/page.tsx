import ProductForm from "@/components/products/product-from"

export default function AddProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <ProductForm />
    </div>
  )
}


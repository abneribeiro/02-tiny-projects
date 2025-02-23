import ProductForm from "@/components/products/product-form"

export default function EditProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <ProductForm productId={params.id} />
    </div>
  )
}


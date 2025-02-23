"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ProductFormProps {
  productId?: string
}

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
}

export default function ProductForm({ productId }: ProductFormProps) {
  const router = useRouter()
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
  })

  useEffect(() => {
    if (productId) {
      // Fetch product data if editing
      // This is a mock fetch, replace with actual API call
      const fetchedProduct = {
        id: productId,
        name: "Example Product",
        description: "This is an example product",
        price: 99.99,
        stock: 100,
      }
      setProduct(fetchedProduct)
    }
  }, [productId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (create or update product)
    // This is where you'd make an API call to save the product
    console.log("Submitting product:", product)
    router.push("/products")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" value={product.description} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input id="price" name="price" type="number" value={product.price} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="stock">Stock</Label>
        <Input id="stock" name="stock" type="number" value={product.stock} onChange={handleChange} required />
      </div>
      <Button type="submit">{productId ? "Update Product" : "Add Product"}</Button>
    </form>
  )
}


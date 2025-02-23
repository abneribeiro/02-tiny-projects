"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const colors = [
  { name: "Gray", class: "bg-gray-500" },
  { name: "White", class: "bg-white border border-gray-200" },
  { name: "Pink", class: "bg-pink-200" },
  { name: "Red", class: "bg-red-400" },
  { name: "Orange", class: "bg-orange-200" },
  { name: "Yellow", class: "bg-yellow-200" },
  { name: "Sky", class: "bg-sky-200" },
  { name: "Cyan", class: "bg-cyan-200" },
  { name: "Emerald", class: "bg-emerald-300" },
];

const sizes = [6, 7, 8, 9, 10, 11, 12, 13];

const productImages = [
  "/images/nike/NIKE_DUNK_LOW_RETRO1.png",
  "/images/nike/NIKE_DUNK_LOW_RETRO2.png",
  "/images/nike/NIKE_DUNK_LOW_RETRO3.png",
  "/images/nike/NIKE_DUNK_LOW_RETRO4.png",
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Gallery */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={productImages[selectedImage] || "/placeholder.svg"}
              alt="Nike Air Force 1"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-lg bg-gray-100",
                  selectedImage === index && "ring-2 ring-black"
                )}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Nike Dunk Low Retro</h1>
            <div className="mt-2 flex items-baseline space-x-2">
              <span className="text-2xl font-bold">$152</span>
              <span className="text-lg text-gray-500 line-through">$190</span>
              <span className="text-green-600">20% Off</span>
            </div>
            <p className="mt-2 text-gray-600">Men&apos;s sneakers</p>
          </div>

          {/* Color Selection */}
          <div>
            <h2 className="mb-3 text-sm font-medium">COLOR</h2>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "h-8 w-8 rounded-full",
                    color.class,
                    selectedColor.name === color.name &&
                      "ring-2 ring-black ring-offset-2"
                  )}
                >
                  <span className="sr-only">{color.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium">SHOE SIZE</h2>
              <button className="text-sm text-gray-600">Size Guide</button>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <motion.button
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "rounded-md border p-2 text-center",
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-black"
                  )}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full" size="lg">
              Add to Cart
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              Buy Now
            </Button>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="details" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="returns">Returns</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="space-y-4 cursor-pointer">
                    <p className="text-gray-600">
                      This product is crafted from high-quality materials
                      designed for durability and comfort. It features modern
                      design elements and is perfect for everyday use.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Breathable and spacious interior fit</li>
                      <li>• Durable leather overlays</li>
                      <li>• Cushioned insole for added comfort</li>
                      <li>• Reinforced eyelets for secure lacing</li>
                      <li>• Stitching built for durability</li>
                    </ul>
                    <Button variant="ghost" className="text-sm">
                      Read more
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                <VisuallyHidden.Root>
                    <DialogTitle>Nike Dunk Low Retro Details</DialogTitle>
                  </VisuallyHidden.Root>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={productImages[0] || "/placeholder.svg"}
                        alt="Nike Air Force 1"
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold">Nike Dunk Low Retro</h3>
                        <p className="text-sm text-gray-500">
                          23 Different Colors
                        </p>
                        <p className="font-medium">$152.00</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Benefits</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          • Originally designed for performance running, visible
                          Max Air cushioning puts the history of comfort beneath
                          your feet.
                        </li>
                        <li>
                          • Padded, low-cut collar looks sleek and feels great.
                        </li>
                        <li>
                          • Rubber Waffle outsole delivers durable traction and
                          heritage style.
                        </li>
                        <li>
                          • Flex grooves in the outsole help make every step
                          feel natural.
                        </li>
                      </ul>
                      <h4 className="font-semibold">Product details</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Low cut mouth</li>
                        <li>• Foam insole</li>
                        <li>• Toecap perforations</li>
                        <li>• Colour Shown: White/White/Black</li>
                        <li>• Style: DD1391-100</li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <p className="text-gray-600">
                Free standard shipping on orders over $100. Estimated delivery
                time: 3-5 business days.
              </p>
            </TabsContent>
            <TabsContent value="returns" className="mt-4">
              <p className="text-gray-600">
                We accept returns within 30 days of purchase. Items must be in
                their original condition and packaging. Please visit our returns
                page for more details.
              </p>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4 space-y-6">
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>FM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Fernando Monte</h3>
                    <p className="text-sm text-gray-500">2025-12-01</p>
                    <p className="mt-2 text-gray-600">
                      The Nike Air Max 90 Black exceeded my expectations! Super
                      comfortable and perfect for both running and casual wear.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JE</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Juan Echanove</h3>
                    <p className="text-sm text-gray-500">2025-11-15</p>
                    <p className="mt-2 text-gray-600">
                      Stylish and lightweight. I wear them everywhere, but the
                      fit was slightly snug at first. Broke in nicely after a
                      few days.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

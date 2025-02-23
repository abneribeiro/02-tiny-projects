"use client"

import { useState } from "react"
import ImageItem from "@/app/components/ImageItem"
import ImageModal from "@/app/components/ImageModal"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photos = [
    "photo-1.jpg",
    "photo-2.jpg",
    "photo-3.jpg",
    "photo-4.jpg",
    "photo-6.jpg",
    "photo-12.jpg",
    "photo-7.jpg",
    "photo-10.jpg",
    "photo-9.jpg",
  ]

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="mx-auto px-4 py-4">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        <AnimatePresence>
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              className="w-full h-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ImageItem
                src={`/images/${photo}`}
                onClick={() => handleImageClick(`/images/${photo}`)}
                layoutId={`image-${photo}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <ImageModal
        src={selectedImage || "/placeholder.svg"}
        onClose={handleCloseModal}
        isOpen={!!selectedImage}
        layoutId={`image-${selectedImage?.split("/").pop()}`}
      />
    </div>
  )
}


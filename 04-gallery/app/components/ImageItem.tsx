"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ImageItemProps {
  src: string
  onClick: () => void
  layoutId: string
}

export default function ImageItem({ src, onClick, layoutId }: ImageItemProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className="w-full h-full relative cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt="Gallery image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg brightness-90 transition will-change-auto hover:brightness-110"
      />
    </motion.div>
  )
}


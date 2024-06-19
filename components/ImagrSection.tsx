"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  containerStyle: string;
  imagePath: string;
}

const ImageSection = ({ containerStyle, imagePath }: Props) => {
  return (
    <motion.div
      className={`${containerStyle} relative w-[322px] h-[293px]`}
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="absolute bg-backgroundImgColor w-full h-full top-[-10%] right-[8%] rounded-[0.25rem]" />
      <Image
        src={imagePath}
        layout="fill" objectFit="cover"
        alt="A imagem mostra a psicóloga Andéia Taufner com cabelo ruivo encaracolado, usando óculos e uma blusa verde e preta. Ela está sorrindo para a câmera."
        className="z-40"
      />
    </motion.div>
  )
}

export default ImageSection
"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import { DividerTwo } from "./Dividers"
const InPersonService = () => {
  return (
    <>
      <section className="bg-white flex items-center justify-center" id="in-person-service">
        <div className="container">
          <motion.h2
            className="h2 !mb-24 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Atendimento presencial
          </motion.h2>
          <div className="w-full relative flex flex-col gap-8 items-center justify-center lg:flex-row lg:gap-16">

            <motion.div
              className={"relative w-[322px] h-[293px]"}
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="absolute bg-backgroundImgColor w-full h-full top-[-10%] right-[8%] rounded-[0.25rem]" />
              <Image
                src="/assets/image-in-person.png"
                layout="fill" objectFit="cover"
                alt="A imagem mostra a psicóloga Andéia Taufner com cabelo ruivo encaracolado, usando óculos e uma blusa verde e preta. Ela está sorrindo para a câmera."
                className="z-40"
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 lg:w-1/2"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus.
              </p>
              <p className="p">
                In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed.
              </p>
              <p className="p">
                In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <DividerTwo />
    </>
  )
}

export default InPersonService
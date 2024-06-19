"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import ImageSection from "./ImagrSection"
const OnlineService = () => {
  return (
    <section className="bg-backgroundColor-100 flex items-center justify-center" id="online-service">
      <div className="container">
        <motion.h2
          className="h2 text-center"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Atendimento online
        </motion.h2>
        <div className="w-full relative flex flex-col gap-8 items-center justify-center lg:flex-row lg:gap-16">

          <ImageSection
            imagePath="/assets/image-online.png"
            containerStyle=""
          />
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
  )
}

export default OnlineService
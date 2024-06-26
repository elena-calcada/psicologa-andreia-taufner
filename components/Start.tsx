"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import LinkButtom from "./LinkButton"

const Start = () => {
  return (
    <section className="h-[calc(80vh+8rem)] bg-home-mobile bg-cover bg-center bg-no-repeat sm:bg-home-desktop " id="home">
      <div className="flex flex-col gap-10 h-full mx-auto pt-56 2xl:pt-64 px-[15px] md:px-[24px] lg:px-[48px] xl:max-w-[1400px]">
        <div className="flex flex-col gap-8">
          <motion.h1
            className="h1 xs:!text-7xl xl:text-[128px]"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Andréia Taufner
          </motion.h1>
          <motion.p
            className="p !text-titleColor !text-xl !font-medium max-w-[500px] xs:max-w-[400px] lg:max-w-[700px] lg:!text-2xl"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Psicóloga Clínica de crianças, adolescentes e adultos em Vila Velha/ES -  CRP 16/09385
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <LinkButtom
            href="https://wa.me/5527996173620?text=Olá,%20Andréia!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20marcar%20uma%20consulta."
            title="Entrar em contato"
            containerStyle=""
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Start
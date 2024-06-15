"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import LinkButtom from "./LinkButton"

const Start = () => {
  return (
    <section className="h-[calc(80vh+8rem)] bg-home-desktop bg-cover bg-center bg-no-repeat" id="home">
      <div className="flex flex-col gap-10 h-full mx-auto pt-56 2xl:pt-64 px-[15px] md:px-[24px] xl:max-w-[1400px]">
        <div className="flex flex-col gap-8">
          <motion.h1
            className="h1 xl:text-[128px]"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Andreia Taufner
          </motion.h1>
          <motion.p
            className="p !text-titleColor !text-xl !font-medium max-w-[500px] lg:max-w-[700px] lg:!text-2xl"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Psicóloga Clínica de crianças, adolescentes e adultos, em Vila Velha/ES -  CRP 16/09385
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <LinkButtom
            href="https://api.whatsapp.com/send?phone=+5527996173620&text=Olá, Andréia! Cheguei aqui   por meio do seu site. Gostaria de marcar uma consulta."
            title="Entrar em contato"
            containerStyle=""
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Start
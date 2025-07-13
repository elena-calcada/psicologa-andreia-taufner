"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Link from "next/link"
import WhatsappButton from "./WhatsappButton"

const Start = () => {
  return (
    <section className="relative z-30 h-[calc(80vh+8rem)] bg-home-mobile bg-cover bg-center bg-no-repeat sm:bg-home-desktop" id="home">
      <Link
        href="https://br.freepik.com/fotos-gratis/duas-pessoas-de-maos-dadas-com-amor-e-carinho-na-mesa-de-madeira_10399589.htm#position=3"
        target={'_blank'}
        className="absolute z-40 bottom-0 right-1 font-dm_sans text-[12px] opacity-70"
      >
        Image by freepik
      </Link>
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
            Psicóloga Clínica de adolescentes, adultos e idosos em Vila Velha/ES -  CRP 16/09385
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <WhatsappButton
            title="Entrar em contato"
            containerStyle=""
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Start
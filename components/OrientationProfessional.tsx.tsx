"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import { DividerOne } from "./Dividers"
const ProfessionalOrientation = () => {
  return (
    <>
      <section className="bg-backgroundColor-100 flex items-center justify-center" id="professional-orientation">
        <div className="container">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Orientação profissional
          </motion.h2>
          <div className="w-full relative flex flex-col gap-8 items-center justify-center xl:flex-row-reverse xl:gap-16">

            <motion.div
              className={"relative w-[322px] h-[293px] lg:w-[418px] lg:h-[380px]"}
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="absolute bg-backgroundImgColor w-full h-full top-[-6%] right-[-6%] lg:top-[-8%] lg:right-[-8%] rounded-[0.5rem]" />
              <Image
                src="/assets/image-op.jpg"
                layout="fill" objectFit="cover"
                alt="Um homem de pé de costas, com uma das mãos na cintura e a outra na cabeça, olhando para uma parede com luzes de bulbo, a procura de uma ideia brilhante."
                className="z-40 shadow-lg rounded-[0.5rem]"
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 lg-xl:w-[80%] xl:w-[55%]"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <p className="p">
                A orientação profissional é um processo que dura em média de 8 a 10 sessões e auxilia a pessoa na escolha de sua carreira profissional através do autoconhecimento. Durante as sessões, utilizam-se técnicas, testes e instrumentos para atingir o objetivo da escolha profissional. Durante o processo, o orientando percebe seus pontos fortes e fracos, interesses, gostos, valores, habilidades, perfil psicológico e de personalidade e, baseado nestas informações, explora as possíveis trajetórias para o seu futuro.
              </p>
              <p className="p">
                Na orientação profissional, o orientando é parte ativa do processo e coopera o tempo todo, realizando as atividades propostas. Por isso, é preciso engajamento e determinação para que o processo seja bem-sucedido. O psicólogo participa como orientador e facilita a tomada de decisão com base nas crenças e valores da própria pessoa.
              </p>
              <p className="p">
                O objetivo da orientação profissional é tornar a pessoa autossuficiente, protagonista de suas próprias decisões e de sua carreira profissional. Vale ressaltar que, durante a orientação profissional, ocorrem insights e compreensões bastante significativas, que servirão de base para decisões e resoluções de problemas em outras áreas da vida, e não apenas na área profissional, pois o autoconhecimento amplia a percepção sobre si mesmo como um todo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <DividerOne />
    </>
  )
}

export default ProfessionalOrientation
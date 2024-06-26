"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import { DividerOne } from "./Dividers"

const Aboult = () => {
  return (
    <>
      <section className="bg-backgroundColor-100 flex items-center justify-center" id="aboult">
        <div className="container">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Sobre mim
          </motion.h2>
          <div className="w-full relative flex flex-col gap-8 items-center justify-center xl:flex-row xl:gap-16">

            <motion.div
              className={"relative w-[322px] h-[293px] lg:w-[418px] lg:h-[380px]"}
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="absolute bg-backgroundImgColor w-full h-full top-[-6%] right-[6%] lg:top-[-8%] lg:right-[8%] rounded-[0.5rem]" />
              <Image
                src="/assets/image-aboult.png"
                layout="fill" objectFit="cover"
                alt="A imagem mostra a psicóloga Andéia Taufner com cabelo ruivo encaracolado, usando óculos e uma blusa verde e preta. Ela está sorrindo para a câmera."
                className="z-40 shadow-lg"
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
                Sou Psicóloga, CRP 16/09385, com experiência em atendimentos clínicos e psicodiagnóstico. Atendo crianças, adolescentes e adultos.
              </p>
              <p className="p">
                Aprecio a simplicidade, a natureza, gosto de artesanato e de estar comigo mesma. Gosto também de desafios, de ir além. Sou bastante investigativa e costumo transpor o que está posto em busca de respostas. Acho sempre melhor usar vírgulas e interrogações, pois as afirmações podem sugerir ponto final.
              </p>
              <p className="p">
                Amo estudar e não me canso de aprender. Faço constantemente cursos de formação, capacitação, atualização e aprimoramento técnico-científico dentro das variadas áreas da Psicologia. Atendo de forma presencial, no meu consultório, ou online. Em meus atendimentos, priorizo sempre o bem-estar do paciente, considerando o objetivo a ser alcançado com a terapia. Estou inteiramente atenta e disponível para uma escuta empática e utilizo técnicas terapêuticas que irão auxiliar a pessoa a superar dificuldades e viver uma vida mais plena, saudável e satisfatória.
              </p>
              <p className="p">
                Tenho capacitação em: Gestalt Terapia com Crianças pelo Instituto Dialógico – RJ; Clínica e Diagnóstico Multidisciplinar em Saúde Mental pela Escola Nova Psiquê - RJ; Terapia Cognitiva Comportamental para Crianças e Adolescentes pela CICLO-CEAP; Técnicas de Treinamento de Pais para Crianças e Adolescentes pela CICLO-CEAP; Desenvolvimento do Raciocínio Clinico em Avaliação Psicológica pelo Instituto Persona.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <DividerOne />
    </>
  )
}

export default Aboult
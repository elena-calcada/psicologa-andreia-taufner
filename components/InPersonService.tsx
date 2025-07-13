"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { DividerTwo } from "./Dividers"
const InPersonService = () => {
  return (
    <>
      <section className="bg-white flex items-center justify-center" id="in-person-service">
        <div className="container">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Atendimento presencial
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
                src="/assets/image-in-person.jpg"
                layout="fill" objectFit="cover"
                alt="Duas mulheres sentadas em um sofá, conversando. Uma delas está segurando uma xícara de café e a outra está segurando um tablet."
                className="z-30 rounded-[0.5rem] shadow-lg"
              />
              <Link
                href="https://www.freepik.com/free-photo/smiley-women-doing-radio-interview-together_11797778.htm#position=1"
                target={'_blank'}
                className="absolute z-40 bottom-0 right-1 font-dm_sans text-[10px] text-white opacity-30"
              >
                Image by freepik
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 lg-xl:w-[80%] xl:w-[55%]"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <p className="p">
                Os atendimentos presenciais são realizados no consultório, um espaço que foi pensado com muito carinho para te receber, priorizando sempre o cuidado, o acolhimento e o seu bem-estar. Na terapia presencial, o contato face a face permite uma conexão mais profunda, facilitando a construção de uma relação terapêutica mais sólida, com trocas e experiências que somente podem ser vivenciadas de forma presencial. Presencialmente, o ambiente é controlado e oferece um espaço seguro e acolhedor, propício para a reflexão e o autoconhecimento. Além disso, ao sair de casa para ir à terapia, você pode experimentar um momento dedicado exclusivamente ao autocuidado, reforçando a importância de tirar um tempo para si mesmo.
              </p>
              <p className="p">
                Aqui, você encontrará auxílio para se conhecer melhor, superar seus desafios, explorar e entender suas emoções e pensamentos. Você também poderá elaborar estratégias para lidar com as dificuldades, buscar soluções para seus problemas, desenvolver habilidades e elevar sua autoestima, além de melhorar a qualidade de seus relacionamentos interpessoais e familiares, fortalecer sua saúde mental e qualidade de vida.
              </p>
              <p className="p">
                Na orientação de pais, o acolhimento, a empatia e a promoção de desenvolvimento de vínculos familiares saudáveis são imprescindíveis.
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
"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import { DividerOne } from "./Dividers"
const OnlineService = () => {
  return (
    <>
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
                src="/assets/image-online.jpg"
                layout="fill" objectFit="cover"
                alt="Uma jovem sorridente usa fones de ouvido e olha para o seu telefone. Ela está sentada num sofá."
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
                Atualmente, a conexão digital tornou-se mais uma possibilidade para promover o bem-estar emocional e psicológico. A terapia online oferece algumas vantagens, como a facilidade de encurtar distâncias, poupar tempo com deslocamentos, a comodidade de estar no seu próprio ambiente e facilitar o acesso para pessoas com dificuldades de locomoção. Além disso, para algumas pessoas, é mais fácil se abrir e falar de si de forma virtual do que presencialmente.
              </p>
              <p className="p">
                Para os adolescentes, que são familiarizados com o mundo digital, os atendimentos online oferecem um ambiente seguro e acessível, respeitando seu ritmo, sua linguagem e sua singularidade. Para brasileiros que residem no exterior, a flexibilidade de receber apoio psicológico em sua língua materna, superando as barreiras da distância, idioma e choque cultural, tornou-se uma ferramenta indispensável para sua saúde e qualidade de vida.
              </p>
              <p className="p">
                Para garantir uma experiência de qualidade, é essencial ter uma boa conexão de internet, com o mínimo de oscilações possíveis. Além disso, recomenda-se escolher um local tranquilo e com privacidade, onde a pessoa se sinta à vontade para falar livremente sobre questões importantes de sua vida, sem ser ouvida por outras pessoas. É importante zelar pelo sigilo e confidencialidade das sessões, preservando sua segurança.
              </p>
              <p className="p">
                Com a mesma eficácia dos atendimentos presenciais, as sessões online são realizadas por meio da plataforma Google Meet ou WhatsApp e duram em média 50 minutos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <DividerOne />
    </>
  )
}

export default OnlineService
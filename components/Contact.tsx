"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { LuInstagram, LuMapPin, LuPhone } from "react-icons/lu"
import { DividerTwo } from "./Dividers"
import LinkButtom from "./LinkButton"

const Contact = () => {
  return (
    <>
      <section className="bg-white flex flex-col items-center justify-center lg:flex-row" id="contact">
        <div className="container flex flex-col gap-[2rem] justify-center items-center lg:flex-row lg:gap-16">
          <div className="flex flex-col items-center justify-center lg:items-start">
            <motion.h2
              className="text-titleColor text-5xl mb-[3rem]"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              Contato
            </motion.h2>

            <motion.p
              className="p text-center lg:text-start"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              Entre em contato, tire suas dúvidas e marque uma consulta.
            </motion.p>

            <motion.ul
              className="py-10 flex flex-col gap-5 items-center lg:items-start"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <li>
                <Link
                  href="tel:+5527999214912"
                  target="_blank"
                  className=" p flex gap-2"
                >
                  <LuPhone size={26} className="text-primary" />
                  (27) 9 9921-4912
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.instagram.com/andreia.cristina.psi'
                  target={'_blank'}
                  className="p flex gap-2"
                >
                  <LuInstagram size={26} className="text-primary" />
                  @andreia.cristina.psi
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:andreiacrispsi@gmail.com'
                  target={'_blank'}
                  className="p flex gap-2"
                >
                  <AiOutlineMail size={26} className="text-primary" />
                  andreiacrispsi@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/place/R.+Aimor%C3%A9s,+256+-+Gl%C3%B3ria,+Vila+Velha+-+ES,+29122-170/@-20.3343468,-40.3099472,19z/data=!4m6!3m5!1s0xb83d8a68fc7b0b:0xdc1bcd29985806b1!8m2!3d-20.3344319!4d-40.309951!16s%2Fg%2F11y3rgxj53?entry=ttu"
                  target="_blank"
                  className="p flex gap-2"
                >
                  <LuMapPin size={26} className="text-primary" />
                  Rua Aimorés, 256, Glória, Vila Velha/ES
                </Link>
              </li>
            </motion.ul>

            <motion.div
              variants={fadeIn("up", 0.7)}
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

          <motion.div
            className="lg-max:w-full xl:w-1/2 shadow-2xl"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2267.757909934178!2d-40.31071233165428!3d-20.33466411471005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d8a6e4464e5%3A0x7e654d1b4a2ba642!2sR.%20Aimor%C3%A9s%2C%20227%20-%20Gl%C3%B3ria%2C%20Vila%20Velha%20-%20ES%2C%2029122-170!5e0!3m2!1spt-BR!2sbr!4v1719240660332!5m2!1spt-BR!2sbr"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            >
            </iframe>
          </motion.div>
        </div>
      </section>
      <DividerTwo />
    </>
  )
}

export default Contact
"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import Card from "./Card"
import { DividerTwo } from "./Dividers"

const Areas = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-white" id="areas">
        <div className="container flex flex-col items-center justify-center">
          <motion.h2
            className="h2 !mb-14 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Áreas de atuação
          </motion.h2>
          <div className="grid grid-cols-6 gap-6">
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.45)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Terapia Infantil"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="Terapia Adolescente"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.55)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Terapia Adulto"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="Orientação de Pais e Responsáveis"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.65)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Orientação Profissional"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="TDAH"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.75)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Transtornos/Distúrbios do Neurodesenvolvimento"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="Depressão"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.85)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Transtornos de Ansiedade"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="TOC"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.95)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Transtornos Relacionados a Traumas"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="Distúrbios do Sono"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 1.0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Distúrbios alimentares"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <DividerTwo />
    </>
  )
}

export default Areas
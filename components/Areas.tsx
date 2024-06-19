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
            className="h2 text-center"
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
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Depressão"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="Ansiedade"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.55)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Burnout"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="Estresse"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.65)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Fobias"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="Psicologia Infantil"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.75)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="Orientação de Pais"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/15"
                area="Orientação Profissional"
              />
            </motion.div>
            <motion.div
              className="xs:col-span-6 sm-lg:col-span-3 lg:col-span-2"
              variants={fadeIn("up", 0.85)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card
                containerStyle="bg-backgroundImgColor/30"
                area="TOC"
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
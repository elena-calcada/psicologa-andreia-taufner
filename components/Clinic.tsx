"use client"
import { fadeIn } from "@/utils/variants"
import { motion } from "framer-motion"
import ClinicSlider from "./ClinicSlider"
import { DividerOne } from "./Dividers"

const Clinic = () => {
  return (
    <>
      <section className="bg-backgroundColor-100 flex items-center justify-center" id="clinic">
        <div className="container">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Consultório
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <ClinicSlider />
          </motion.div>
        </div>
      </section>
      <DividerOne />
    </>
  )
}

export default Clinic
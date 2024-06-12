import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

interface Props {
  containerStyles: string;
  onClickCloseNav: () => void
}

const SocialNav = ({ containerStyles, onClickCloseNav }: Props) => {
  return (
    <div className={`${containerStyles} gap-8`}>
      <motion.div
        className="shadow-lg p-2 rounded-full shadow-gray-400 bg-backgroundColor-100"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          legacyBehavior
          href="https://api.whatsapp.com/send?phone=+5527996173620&text=Olá, Andréia! Cheguei aqui   por meio do seu site. Gostaria de marcar uma consulta."
        >
          <a target="_blank" onClick={onClickCloseNav}>
            <MdWhatsapp className="h-7 w-7 text-primary" />
          </a>
        </Link>
      </motion.div>
      <motion.div
        className="shadow-lg p-2 rounded-full shadow-gray-400 bg-backgroundColor-100"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          legacyBehavior
          href="https://www.instagram.com/andreia.cristina.psi"
          className="text-primary"
        >
          <a target="_blank" onClick={onClickCloseNav}>
            <FaInstagram className="h-7 w-7 text-primary" />
          </a>
        </Link>
      </motion.div>
    </div>
  )
}
export default SocialNav
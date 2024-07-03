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
          href="https://wa.me/5527999214912?text=Olá,%20Andréia!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20marcar%20uma%20consulta."
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
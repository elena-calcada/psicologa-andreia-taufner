import { FaWhatsapp } from "react-icons/fa";

interface Props {
  title: string;
  containerStyle: string;
}

const WhatsappButton = ({ title, containerStyle = '' }: Props) => {
  const handleClick = () => {
    const whatsappLink = "https://wa.me/5527999214912?text=Olá,%20Andréia!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20marcar%20uma%20consulta."

    window.open(whatsappLink, "_blank")
  }

  return (
    <button onClick={handleClick} className={`${containerStyle} inline-flex items-center gap-2 text-white bg-buttonColor py-4 px-8 text-lg font-title rounded-xl hover:bg-primary transition-all shadow-xl md-max:text-base`}>
      <FaWhatsapp className="h-6 w-6 text-white md-max:h-5 md-max:w-5" />
      {title}
    </button>
  )
}

export default WhatsappButton
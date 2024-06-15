import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  href: string;
  title: string;
  containerStyle: string;
}

const LinkButtom = ({ href, title, containerStyle = '' }: Props) => {
  return (
    <Link href={href} className={`${containerStyle} inline-flex items-center gap-2 text-white bg-buttonColor py-4 px-8 text-lg font-title rounded-xl hover:bg-primary transition-all shadow-xl md-max:text-base`}>
      <FaWhatsapp className="h-6 w-6 text-white md-max:h-5 md-max:w-5" />
      {title}
    </Link>
  )
}

export default LinkButtom
import Image from "next/image"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { LuInstagram, LuMapPin, LuPhone } from "react-icons/lu"

const Footer = () => {
  return (
    <footer className="w-full bg-backgroundColor-300">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:max-w-[1000px]">
        <Link href='/'>
          <Image src={'/assets/logo.svg'} width={231} height={101} alt="Logo da Psicóloga Andreia Taufner" />
        </Link>

        <div className="flex flex-col gap-4">
          <h3 className="font-poppins text-center">
            Localização
          </h3>
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="p">Rua Aimorés, 256</span>
            <span className="p">Glória - Vila Velha/ES</span>
            <span className="p">CEP 29122-170 </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-poppins text-center">
            Contato
          </h3>

          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="p">Telefone: (27) 9 9617-3620 </span>
          </div>

          <ul className="flex items-center justify-center gap-6">
            <li>
              <Link
                href="tel:+5527996173620"
                target="_blank"
                className=" p flex gap-2"
              >
                <LuPhone size={26} className="text-primary" />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.instagram.com/andreia.cristina.psi'
                target={'_blank'}
                className="p flex gap-2"
              >
                <LuInstagram size={26} className="text-primary" />
              </Link>
            </li>
            <li>
              <Link
                href='mailto:andreiacrispsi@gmail.com'
                target={'_blank'}
                className="p flex gap-2"
              >
                <AiOutlineMail size={26} className="text-primary" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com/maps/place/R.+Aimor%C3%A9s,+256+-+Gl%C3%B3ria,+Vila+Velha+-+ES,+29122-170/@-20.3343468,-40.3099472,19z/data=!4m6!3m5!1s0xb83d8a68fc7b0b:0xdc1bcd29985806b1!8m2!3d-20.3344319!4d-40.309951!16s%2Fg%2F11y3rgxj53?entry=ttu"
                target="_blank"
                className="p flex gap-2"
              >
                <LuMapPin size={26} className="text-primary" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-primary">
        <div className="w-full mx-auto px-[15px] md:px-[24px] lg:px-[48px] flex flex-col items-center justify-center py-2 lg:flex-row lg:justify-between lg:max-w-[1400px]">
          <span
            className="font-dm_sans text-white"
          >
            {new Date().getFullYear()} &copy; Andréia Cristina Taufner Gasparini
          </span>
          <span className="font-dm_sans text-white"
          >
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
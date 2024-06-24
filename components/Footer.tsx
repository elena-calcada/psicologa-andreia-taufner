import Image from "next/image"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { LuInstagram, LuMapPin, LuPhone } from "react-icons/lu"

const Footer = () => {
  return (
    <footer className="w-full bg-backgroundColor-300 flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:max-w-[1000px]">
        <Link href='/'>
          <Image src={'/assets/logo.svg'} width={231} height={101} alt="Logo da Psicóloga Andreia Taufner" />
        </Link>

        <div className="flex flex-col gap-4">
          <h3 className="font-poppins text-center">
            Localização
          </h3>
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="p">Rua Aimorés, 227</span>
            <span className="p">Glória - Vila Velha/ES</span>
            <span className="p">CEP 29122-170 </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-poppins text-center">
            Contato
          </h3>

          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="p">Telefone: (27) 9 9921-4912 </span>
          </div>

          <ul className="flex items-center justify-center gap-6">
            <li>
              <Link
                href="tel:+5527999214912"
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
                href="https://www.google.com.br/maps/place/R.+Aimor%C3%A9s,+227+-+Gl%C3%B3ria,+Vila+Velha+-+ES,+29122-170/@-20.3346641,-40.3107123,17.72z/data=!4m15!1m8!3m7!1s0xb83d8a6e4464e5:0x7e654d1b4a2ba642!2sR.+Aimor%C3%A9s,+227+-+Gl%C3%B3ria,+Vila+Velha+-+ES,+29122-170!3b1!8m2!3d-20.3344499!4d-40.3095976!16s%2Fg%2F11c1dfdv67!3m5!1s0xb83d8a6e4464e5:0x7e654d1b4a2ba642!8m2!3d-20.3344499!4d-40.3095976!16s%2Fg%2F11c1dfdv67?entry=ttu"
                target="_blank"
                className="p flex gap-2"
              >
                <LuMapPin size={26} className="text-primary" />
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
import Image from "next/image";

interface Props {
  containerStyle: string;
  area: string;
}

const Card = ({ containerStyle, area }: Props) => {
  return (
    <div className={`${containerStyle} relative flex items-center justify-center min-w-[250px] max-w-[300px] h-[200px] rounded-[0.5rem] p-[15px] shadow-xl`}>
      <Image
        src={'/assets/butterfly.png'}
        alt="Borboleta como imagem de fundo"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-[0.08] z-30"
      />
      <h3 className="h3 text-titleColor z-40 max-w-[200px] text-center">{area}</h3>
    </div>
  )
}

export default Card
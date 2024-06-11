import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center bg-backgroundColor-100 p-4">
        <Image src={"/assets/logo.svg"} width={360} height={158} alt="Logo" />
        <div>
          <h1 className="text-center text-3xl mb-4 mt-4 text-titleColor">Psicóloga Andreia Taufner</h1>
          <h2 className="text-center text-2xl">Em construção...</h2>
        </div>
      </div>
    </main>
  );
}

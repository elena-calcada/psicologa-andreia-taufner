import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center bg-backgroundColor-100">
        <Image src={"/assets/logo.svg"} width={505} height={222} alt="Logo" />
        <h1 className="text-4xl mb-4 mt-4 text-titleColor">Site da psicóloga Anrdeia Taufner!</h1>
        <h2 className="text-3xl">Em construção...</h2>
      </div>
    </main>
  );
}

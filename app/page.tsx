import Aboult from "@/components/Aboult";
import Areas from "@/components/Areas";
import Clinic from "@/components/Clinic";
import Contact from "@/components/Contact";
import InPersonService from "@/components/InPersonService";
import OnlineService from "@/components/OnlineService";
import ProfessionalOrientation from "@/components/OrientationProfessional.tsx";
import Start from "@/components/Start";

export default function Home() {
  return (
    <main>
      <Start />
      <Aboult />
      <Areas />
      <OnlineService />
      <InPersonService />
      <ProfessionalOrientation />
      <Clinic />
      <Contact />
    </main>
  );
}

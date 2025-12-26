import Image from "next/image";
import SmartForm from "../../components/SmartForm";

export default function Home() {
  return (
    <>
      <section className="h-screeen w-full max-w-360 mx-auto flex flex-row [&>div]:flex-1 p-8">
        <div className="gap-8 flex flex-col justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Tu clinica dental
          </h1>
          <p className="max-w-[60ch]">
            Para los que os huele la boca a vaca, esta es tu clinica. Rellena
            tus datos, no seas tonto. Queremos saber que necesitas y ayudarte a
            limpiar ese inodoro que tienes por boca 🦷
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src={"/images/hero.jpg"}
            width={400}
            height={100}
            alt="Imagen de tipo sonriendo"
            loading="lazy"
          />
        </div>
      </section>

      <section className="h-screeen w-full max-w-360 mx-auto flex flex-row [&>div]:flex-1 p-8">
        <SmartForm />
      </section>
      <section></section>
    </>
  );
}

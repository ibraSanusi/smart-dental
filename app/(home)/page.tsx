import Image from "next/image";
import SmartForm from "../../components/SmartForm";

export default function Home() {
  return (
    <>
      <section className="h-screeen w-full max-w-360 mx-auto flex flex-row [&>div]:flex-1 p-8">
        <div className="gap-8 flex flex-col justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Tu clínica dental de confianza
          </h1>
          <p className="max-w-[60ch]">
            En nuestra clínica dental te ayudamos a resolver tu problema de
            forma clara y profesional.
          </p>
          <p className="max-w-[60ch]">
            Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto
            contigo para valorar tu caso y ofrecerte la mejor solución.
          </p>
        </div>

        <div className="flex justify-center rounded-2xl">
          <Image
            className="rounded-2xl"
            src={"/images/hero.jpg"}
            width={400}
            height={100}
            alt="Imagen del paciente (opcional)"
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

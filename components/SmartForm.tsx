"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import Checkbox from "./Checkbox";
import confetti from "canvas-confetti";

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form as HTMLFormElement);

  const response = await fetch("/api/booking", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) return;

  await response.json();
  confetti();

  form.reset();
}

function SmartForm() {
  return (
    <form
      className="mx-auto flex flex-col gap-6 min-w-2xl [&>input]:py-6.5 [&>input]:focus-visible:ring-0"
      onSubmit={handleSubmit}
    >
      <Input type="text" placeholder="Nombre y apellidos" name="fullname" />
      <Input type="email" placeholder="Correo electrónico" name="email" />
      <Input
        type="number"
        placeholder="Teléfono de contacto"
        minLength={9}
        name="phone"
      />
      <Input type="number" placeholder="Edad" min={13} name="age" />
      <Input type="text" placeholder="Motivo de la consulta" name="ailment" />
      <Input
        type="datetime-local"
        placeholder="Fecha y hora preferidas"
        name="availability"
      />

      <Select name="consultation">
        <SelectTrigger className="w-45 py-6.5 bg-foreground text-white focus-visible:ring-0">
          <SelectValue placeholder="Tipo de consulta" />
        </SelectTrigger>
        <SelectContent className="bg-background [&>div>div]:hover:bg-foreground [&>div>div]:hover:text-white">
          <SelectItem value="urgency">Urgencia</SelectItem>
          <SelectItem value="review">Revisión</SelectItem>
          <SelectItem value="implants">Implantes</SelectItem>
          <SelectItem value="cosmetic_dentistry">Estética dental</SelectItem>
          <SelectItem value="other">Otros</SelectItem>
        </SelectContent>
      </Select>

      <div className="[&>div]:flex [&>div]:flex-row [&>div]:gap-4 [&>div]:w-fit [&>div]:items-center">
        <span>¿Es una consulta urgente?</span>
        <Checkbox name="pain" id="yes" value="yes" label="Sí" />
        <Checkbox name="pain" id="no" value="no" label="No" />
      </div>

      <Button className="rounded-lg bg-blue-600 text-white font-bold py-7 px-4 w-40">
        Solicitar cita
      </Button>
    </form>
  );
}

export default SmartForm;

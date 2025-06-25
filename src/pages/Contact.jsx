import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const formRef = useRef();
  const [state, handleSubmit] = useForm("xnnvojpe"); // tu ID de Formspree

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-purple-400">
        Contáctame
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-neutral-800 p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          className="w-full px-4 py-2 rounded text-black"
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
        />
        <input
          className="w-full px-4 py-2 rounded text-black"
          type="email"
          name="email"
          placeholder="Tu correo"
          required
        />
        <textarea
          className="w-full px-4 py-2 rounded text-black"
          name="message"
          rows="4"
          placeholder="Tu mensaje"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
        >
          Enviar
        </button>
        {state.succeeded && (
          <p className="text-green-400 text-center mt-4">
            ¡Mensaje enviado con éxito!
          </p>
        )}
      </form>
    </section>
  );
}

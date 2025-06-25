// src/pages/Contact.jsx
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import React, { useRef } from "react";

const formRef = useRef();

useEffect(() => {
  if (state.succeeded) {
    formRef.current.reset();
  }
}, [state.succeeded]);

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnvojpe");

  return (
    <div className="px-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Contáctame</h1>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="w-full p-2 bg-[#2a2a2a] text-white rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full p-2 bg-[#2a2a2a] text-white rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          name="message"
          placeholder="Tu mensaje..."
          required
          className="w-full p-2 bg-[#2a2a2a] text-white rounded h-32"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-semibold"
        >
          Enviar
        </button>
      </form>

      {state.succeeded && (
        <p className="text-green-400 mt-6 text-lg">
          ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
        </p>
      )}
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const formRef = useRef();
  const [state, handleSubmit] = useForm("xnnvojpe");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div className="space-y-6 text-left">
          <p className="text-[#61dafb] text-sm font-semibold tracking-wider">
            ✱ CONTACTO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            ¡Espero poder <span className="text-[#61dafb]">conectarme</span>{" "}
            contigo!
          </h1>
          <p className="text-gray-300">
            Si tienes una pregunta, una idea de colaboración o simplemente
            deseas compartir tus pensamientos, no dudes en escribirme.
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <span className="text-white font-semibold">
                Nombre del gerente:
              </span>{" "}
              Angel Victoriano
            </p>
            <p>
              <span className="text-white font-semibold">
                Correo electrónico:
              </span>{" "}
              codewithangelv9212@gmail.com
            </p>
            <p>
              <span className="text-white font-semibold">Teléfono:</span> +1
              (809) 906 6922
            </p>
          </div>
        </div>

        {/* Right (Form) */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#0e0e0e] p-8 rounded-lg shadow-md space-y-5 border border-[#61dafb]/30"
        >
          <input
            className="w-full px-4 py-3 rounded bg-transparent border border-[#61dafb] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#61dafb]"
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input
            className="w-full px-4 py-3 rounded bg-transparent border border-[#61dafb] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#61dafb]"
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
          />
          <textarea
            className="w-full px-4 py-3 rounded bg-transparent border border-[#61dafb] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#61dafb]"
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
            className="bg-[#61dafb] hover:bg-[#3ebfd9] text-black font-semibold px-6 py-3 rounded w-full transition-all"
          >
            Enviar mensaje
          </button>

          {state.succeeded && (
            <p className="text-[#61dafb] text-center mt-2">
              ¡Mensaje enviado con éxito!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

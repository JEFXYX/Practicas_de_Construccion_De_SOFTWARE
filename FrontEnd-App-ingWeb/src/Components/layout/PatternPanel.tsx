import React from 'react'
import { Brand } from '../ui/Brand'

export const PatternPanel: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-panel-dark text-white p-10 flex flex-col justify-between overflow-hidden">
      {/* Background SVG Pattern matching Figma visual design */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="720"
        height="900"
        viewBox="0 0 720 900"
        fill="none"
      >
        <circle cx="200" cy="180" r="140" stroke="#C9633A" strokeWidth="2" opacity="0.4" />
        <path d="M 400 0 A 200 200 0 0 1 400 400 Z" fill="#4B2F23" />
        <circle cx="560" cy="150" r="24" fill="#4B2F23" />
        <path d="M 0 320 A 160 160 0 0 1 160 480 Z" fill="#C9633A" opacity="0.8" />
        <circle cx="380" cy="620" r="180" stroke="#4B2F23" strokeWidth="2" />
        <path d="M 200 600 A 100 100 0 0 1 200 800 Z" fill="#C9633A" opacity="0.7" />
        <circle cx="100" cy="680" r="28" fill="#4B2F23" />
        <circle cx="600" cy="640" r="60" stroke="#4B2F23" strokeWidth="2" />
      </svg>

      {/* Top Logo */}
      <div className="relative z-10">
        <div className="inline-flex items-center px-4 py-2 bg-surface/10 backdrop-blur-sm rounded-full border border-surface/10">
          <Brand tone="on-dark" size="sm" />
        </div>
      </div>

      {/* Bottom Content / Testimonial */}
      <div className="relative z-10 flex flex-col gap-6 max-w-lg">
        <h2 className="text-display-md font-semibold tracking-tight text-white leading-tight">
          Tu cartera de clientes,<br />
          ordenada y siempre a la mano.
        </h2>

        <p className="text-body text-surface/70 leading-relaxed font-normal">
          “Pasamos de tres planillas a un solo directorio. Mi equipo ya no pregunta
          quién tiene el teléfono de cada cliente.”
        </p>

        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-[12px] bg-surface/20 border border-surface/20 flex items-center justify-center text-caption font-semibold text-white">
            MI
          </div>
          <div className="flex flex-col">
            <span className="text-label font-semibold text-white">
              Marcela Ibarra
            </span>
            <span className="text-caption text-surface/60">
              Operaciones · Taller Aurora, Cuenca
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

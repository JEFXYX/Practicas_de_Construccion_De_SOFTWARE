import React, { useState } from 'react'
import {
  Button,
  InputField,
  PasswordInput,
  SegmentedControl,
} from '../../../components/ui'

export interface RegisterFormProps {
  onSwitchToLogin: () => void
  onRegisterSuccess: () => void
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSwitchToLogin,
  onRegisterSuccess,
}) => {
  const [firstName, setFirstName] = useState('Mateo')
  const [lastName, setLastName] = useState('Carrasco')
  const [email, setEmail] = useState('mateo@estudiocarrasco.ec')
  const [phone, setPhone] = useState('+593 98 412 7731')
  const [password, setPassword] = useState('Admin1234')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      onRegisterSuccess()
    }, 600)
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Tab switch */}
      <SegmentedControl
        options={[
          { value: 'login', label: 'Iniciar sesión' },
          { value: 'register', label: 'Registro' },
        ]}
        value="register"
        onChange={(val) => {
          if (val === 'login') onSwitchToLogin()
        }}
        aria-label="Modalidad de acceso"
      />

      {/* Header */}
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-heading-lg font-semibold text-ink tracking-tight">
          Crea tu cuenta
        </h1>
        <p className="text-body text-ink-secondary">
          Completa tus datos para empezar a administrar tu directorio.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Nombre"
            required
          />
          <InputField
            label="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Apellido"
            required
          />
        </div>

        <InputField
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu.correo@empresa.com"
          required
        />

        <InputField
          label="Teléfono"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+593 99 999 9999"
          required
        />

        <PasswordInput
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••••••"
          hint="Mínimo 8 caracteres, con una mayúscula y un número."
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isLoading}
          className="mt-2"
        >
          Crear cuenta
        </Button>
      </form>

      {/* Footer */}
      <div className="flex flex-col items-center gap-3 pt-1 text-center">
        <p className="text-caption text-ink-secondary">
          ¿Ya tienes cuenta?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-accent hover:text-accent-hover font-semibold transition-colors focus:outline-none"
          >
            Inicia sesión
          </button>
        </p>
        <p className="text-[11px] text-ink-tertiary leading-tight max-w-xs">
          Al crear tu cuenta aceptas los Términos de uso y la Política de privacidad.
        </p>
      </div>
    </div>
  )
}

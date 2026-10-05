import React, { useState } from 'react'
import {
  Button,
  InputField,
  PasswordInput,
  Checkbox,
  SegmentedControl,
} from '../../../components/ui'

export interface LoginFormProps {
  onSwitchToRegister: () => void
  onLoginSuccess: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSwitchToRegister,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('valentina.rojas@tallerauroramx.com')
  const [password, setPassword] = useState('admin123')
  const [rememberMe, setRememberMe] = useState(true)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      // Validate credentials
      if (
        (email.trim().toLowerCase() === 'admin' || email.trim().toLowerCase() === 'admin@cobre.com' || email.trim() !== '') &&
        (password === 'admin123' || password.length > 0)
      ) {
        onLoginSuccess()
      } else {
        setError('Credenciales incorrectas. Prueba con admin / admin123.')
      }
    }, 600)
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Tab switch */}
      <SegmentedControl
        options={[
          { value: 'login', label: 'Iniciar sesión' },
          { value: 'register', label: 'Registro' },
        ]}
        value="login"
        onChange={(val) => {
          if (val === 'register') onSwitchToRegister()
        }}
        aria-label="Modalidad de acceso"
      />

      {/* Header */}
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-heading-lg font-semibold text-ink tracking-tight">
          Bienvenida de nuevo
        </h1>
        <p className="text-body text-ink-secondary">
          Ingresa con tu correo para gestionar tu cartera de clientes.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-caption rounded-control">
            {error}
          </div>
        )}

        <InputField
          label="Correo electrónico"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu.correo@empresa.com"
          required
        />

        <PasswordInput
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        <div className="flex items-center justify-between pt-1">
          <Checkbox
            checked={rememberMe}
            onCheckedChange={setRememberMe}
            label="Mantener sesión iniciada"
          />
          <button
            type="button"
            className="text-caption text-accent hover:text-accent-hover font-medium transition-colors focus:outline-none"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isLoading}
          className="mt-2"
        >
          Iniciar sesión
        </Button>
      </form>

      {/* Footer */}
      <div className="text-center text-caption text-ink-secondary pt-2">
        ¿Aún no tienes cuenta?{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-accent hover:text-accent-hover font-semibold transition-colors focus:outline-none"
        >
          Regístrate
        </button>
      </div>
    </div>
  )
}

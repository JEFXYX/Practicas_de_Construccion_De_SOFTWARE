import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { InputField, InputFieldProps } from './InputField'

export interface PasswordInputProps
  extends Omit<InputFieldProps, 'type' | 'trailingSlot'> {}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleVisibility = () => {
      setShowPassword((prev) => !prev)
    }

    return (
      <InputField
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        trailingSlot={
          <button
            type="button"
            onClick={toggleVisibility}
            className="text-ink-tertiary hover:text-ink transition-colors focus:outline-none focus:text-ink rounded"
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? (
              <EyeOff size={18} strokeWidth={1.8} />
            ) : (
              <Eye size={18} strokeWidth={1.8} />
            )}
          </button>
        }
        {...props}
      />
    )
  }
)

PasswordInput.displayName = 'PasswordInput'

import React, { InputHTMLAttributes, ReactNode, useId } from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  leadingIcon?: LucideIcon
  trailingSlot?: ReactNode
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      hint,
      error,
      leadingIcon: LeadingIcon,
      trailingSlot,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label font-medium text-ink select-none"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {LeadingIcon && (
            <div className="absolute left-3.5 pointer-events-none text-ink-tertiary flex items-center justify-center">
              <LeadingIcon size={18} strokeWidth={1.8} />
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              'h-input w-full bg-surface text-ink text-body placeholder:text-ink-tertiary rounded-control border border-line-strong px-3.5 transition-colors focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:bg-surface-muted disabled:opacity-60 disabled:cursor-not-allowed',
              LeadingIcon && 'pl-10',
              trailingSlot && 'pr-10',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              className
            )}
            {...props}
          />
          {trailingSlot && (
            <div className="absolute right-3.5 flex items-center justify-center text-ink-secondary">
              {trailingSlot}
            </div>
          )}
        </div>
        {error ? (
          <p className="text-caption text-red-600">{error}</p>
        ) : hint ? (
          <p className="text-caption text-ink-tertiary">{hint}</p>
        ) : null}
      </div>
    )
  }
)

InputField.displayName = 'InputField'

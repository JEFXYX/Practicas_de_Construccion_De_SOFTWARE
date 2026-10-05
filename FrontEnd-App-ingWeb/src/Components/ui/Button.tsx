import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { LucideIcon, Loader2 } from 'lucide-react'
import { cn } from '../../lib/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'secondary-accent' | 'ghost'
  size?: 'md' | 'lg' // 40px | 46px
  leadingIcon?: LucideIcon
  trailingIcon?: LucideIcon
  isLoading?: boolean
  fullWidth?: boolean
  children?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  isLoading = false,
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-control'

  const sizeStyles = {
    md: 'h-btn-md px-4 text-body gap-2',
    lg: 'h-btn-lg px-6 text-lead gap-2.5',
  }

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-hover active:bg-accent-hover',
    secondary:
      'bg-surface text-ink border border-line-strong hover:bg-surface-muted active:bg-surface-muted',
    'secondary-accent':
      'bg-accent-soft text-accent-ink hover:bg-accent-soft/80 active:bg-accent-soft/90',
    ghost: 'text-ink-secondary hover:text-ink hover:bg-surface-muted',
  }

  const iconSize = size === 'lg' ? 18 : 16

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={iconSize} strokeWidth={1.8} />
      ) : (
        LeadingIcon && <LeadingIcon size={iconSize} strokeWidth={1.8} />
      )}
      {children && <span>{children}</span>}
      {!isLoading && TrailingIcon && (
        <TrailingIcon size={iconSize} strokeWidth={1.8} />
      )}
    </button>
  )
}

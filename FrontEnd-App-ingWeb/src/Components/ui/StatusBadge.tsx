import React from 'react'
import { cn } from '../../lib/cn'

export interface StatusBadgeProps {
  active: boolean
  label?: string
  showDot?: boolean
  className?: string
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  active,
  label,
  showDot = true,
  className,
}) => {
  const displayLabel = label ?? (active ? 'Activo' : 'Inactivo')

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-caption font-medium tracking-wide transition-colors',
        active
          ? 'bg-status-active-soft text-status-active-ink'
          : 'bg-status-inactive-soft text-status-inactive-ink',
        className
      )}
    >
      {showDot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            active ? 'bg-status-active-ink' : 'bg-status-inactive-ink'
          )}
        />
      )}
      {displayLabel}
    </span>
  )
}

import React from 'react'
import { cn } from '../../lib/cn'

export interface SegmentedControlOption<T extends string> {
  value: T
  label: string
}

export interface SegmentedControlProps<T extends string> {
  options: SegmentedControlOption<T>[]
  value: T
  onChange: (value: T) => void
  fullWidth?: boolean
  size?: 'sm' | 'md' // 28px | 36px
  'aria-label'?: string
  className?: string
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  fullWidth = true,
  size = 'md',
  'aria-label': ariaLabel = 'Seleccionar opción',
  className,
}: SegmentedControlProps<T>) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center bg-surface-muted p-1 rounded-track select-none border border-line-subtle',
        fullWidth && 'w-full',
        size === 'sm' ? 'h-8' : 'h-11',
        className
      )}
    >
      {options.map((option) => {
        const isSelected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(option.value)}
            className={cn(
              'flex-1 flex items-center justify-center font-medium rounded-segment text-caption transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              size === 'sm' ? 'py-1 text-caption' : 'py-2 text-label',
              isSelected
                ? 'bg-surface text-ink shadow-sm font-semibold'
                : 'text-ink-secondary hover:text-ink'
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

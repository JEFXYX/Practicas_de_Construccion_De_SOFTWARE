import React, { useId } from 'react'
import { Check } from 'lucide-react'
import { cn } from '../../lib/cn'

export interface CheckboxProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label: React.ReactNode
  id?: string
  disabled?: boolean
  className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onCheckedChange,
  label,
  id,
  disabled = false,
  className,
}) => {
  const generatedId = useId()
  const checkboxId = id || generatedId

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        'inline-flex items-center gap-2 cursor-pointer select-none text-caption text-ink-secondary hover:text-ink transition-colors',
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
    >
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
      />
      <div
        className={cn(
          'w-[18px] h-[18px] rounded-check border flex items-center justify-center transition-colors shrink-0',
          checked
            ? 'bg-accent border-accent text-white'
            : 'bg-surface border-line-strong hover:border-ink-tertiary'
        )}
      >
        {checked && <Check size={12} strokeWidth={2.5} />}
      </div>
      {label && <span>{label}</span>}
    </label>
  )
}

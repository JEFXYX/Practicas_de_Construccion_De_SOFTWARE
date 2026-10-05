import React from 'react'
import { cn } from '../../lib/cn'

export interface BrandProps {
  tone?: 'default' | 'on-dark'
  size?: 'sm' | 'md' // 30px | 32px
  showWordmark?: boolean
  className?: string
}

export const Brand: React.FC<BrandProps> = ({
  tone = 'default',
  size = 'md',
  showWordmark = true,
  className,
}) => {
  const markSize = size === 'sm' ? 'w-7 h-7 text-caption' : 'w-8 h-8 text-body'

  return (
    <div className={cn('inline-flex items-center gap-2.5 select-none', className)}>
      <div
        className={cn(
          'rounded-full flex items-center justify-center font-bold tracking-tight shadow-sm shrink-0',
          markSize,
          tone === 'on-dark'
            ? 'bg-panel-glow text-white'
            : 'bg-accent text-white'
        )}
      >
        C
      </div>
      {showWordmark && (
        <span
          className={cn(
            'font-semibold text-lead tracking-tight',
            tone === 'on-dark' ? 'text-white' : 'text-ink'
          )}
        >
          Cobre
        </span>
      )}
    </div>
  )
}

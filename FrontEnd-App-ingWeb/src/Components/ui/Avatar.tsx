import React from 'react'
import { cn } from '../../lib/cn'

export type AvatarTone = 'clay' | 'sage' | 'lilac' | 'sand' | 'mist' | 'rose'

export interface AvatarProps {
  name: string
  size?: 'sm' | 'md' | 'xl' // 34px | 36px | 68px
  tone?: AvatarTone
  src?: string
  className?: string
}

const TONES: AvatarTone[] = ['clay', 'sage', 'lilac', 'sand', 'mist', 'rose']

function getToneFromName(name: string): AvatarTone {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const index = Math.abs(hash) % TONES.length
  return TONES[index]
}

function getInitials(name: string): string {
  if (!name) return ''
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase()
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const toneStyles: Record<AvatarTone, { bg: string; text: string }> = {
  clay: { bg: 'bg-avatar-clay-soft', text: 'text-avatar-clay-ink' },
  sage: { bg: 'bg-avatar-sage-soft', text: 'text-avatar-sage-ink' },
  lilac: { bg: 'bg-avatar-lilac-soft', text: 'text-avatar-lilac-ink' },
  sand: { bg: 'bg-avatar-sand-soft', text: 'text-avatar-sand-ink' },
  mist: { bg: 'bg-avatar-mist-soft', text: 'text-avatar-mist-ink' },
  rose: { bg: 'bg-avatar-rose-soft', text: 'text-avatar-rose-ink' },
}

const sizeStyles = {
  sm: 'w-[34px] h-[34px] text-caption font-semibold rounded-[10px]',
  md: 'w-[36px] h-[36px] text-label font-semibold rounded-[12px]',
  xl: 'w-[68px] h-[68px] text-heading-md font-semibold rounded-[22px]',
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  size = 'md',
  tone,
  src,
  className,
}) => {
  const selectedTone = tone || getToneFromName(name)
  const style = toneStyles[selectedTone]
  const initials = getInitials(name)

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={cn(
          'object-cover select-none',
          sizeStyles[size],
          className
        )}
      />
    )
  }

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center font-medium select-none shrink-0',
        style.bg,
        style.text,
        sizeStyles[size],
        className
      )}
    >
      {initials}
    </div>
  )
}

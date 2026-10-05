import React, { ReactNode } from 'react'
import { PatternPanel } from './PatternPanel'

export interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex bg-canvas text-ink">
      {/* Left visual panel */}
      <div className="hidden lg:block lg:w-1/2 min-h-screen">
        <PatternPanel />
      </div>

      {/* Right Form container */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center p-6 md:p-12 bg-surface">
        <div className="w-full max-w-form flex flex-col gap-8">
          {children}
        </div>
      </div>
    </div>
  )
}

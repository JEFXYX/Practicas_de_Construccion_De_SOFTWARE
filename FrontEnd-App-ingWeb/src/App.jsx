import React, { useState } from 'react'
import { AuthLayout } from './components/layout/AuthLayout'
import { LoginForm } from './features/auth/components/LoginForm'
import { RegisterForm } from './features/auth/components/RegisterForm'
import { AdminPage } from './pages/AdminPage'

function App() {
  const [authMode, setAuthMode] = useState('login')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (isAuthenticated) {
    return <AdminPage onLogout={() => setIsAuthenticated(false)} />
  }

  return (
    <AuthLayout>
      {authMode === 'login' ? (
        <LoginForm
          onSwitchToRegister={() => setAuthMode('register')}
          onLoginSuccess={() => setIsAuthenticated(true)}
        />
      ) : (
        <RegisterForm
          onSwitchToLogin={() => setAuthMode('login')}
          onRegisterSuccess={() => setIsAuthenticated(true)}
        />
      )}
    </AuthLayout>
  )
}

export default App
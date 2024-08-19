import User from 'models/User'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextProps {
  isAuthenticated: boolean
  token: string | null
  user: User | null
  login: (user: User, token: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')
    const storedUser = localStorage.getItem('authUser')
    if (storedToken) {
      setToken(storedToken)
      setIsAuthenticated(true)
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [])

  const login = async (user: User, token: string) => {
    try {
      localStorage.setItem('authToken', token)
      localStorage.setItem('authUser', JSON.stringify(user))

      setToken(token)
      setUser(user)
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Login failed:', error)
      setIsAuthenticated(false)
      setToken(null)
      setUser(null)
    }
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')

    setIsAuthenticated(false)
    setToken(null)
    setUser(null)
    console.log('Logged out')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const TOKEN_KEY = 'travel_auth_token'
const USER_KEY = 'travel_auth_user'

export const saveSession = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  window.dispatchEvent(new Event('auth-changed'))
}

export const clearSession = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
  window.dispatchEvent(new Event('auth-changed'))
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const getCurrentUser = () => {
  const rawUser = localStorage.getItem(USER_KEY)
  if (!rawUser) return null
  try {
    return JSON.parse(rawUser)
  } catch {
    return null
  }
}

export const isAuthenticated = () => Boolean(getToken() && getCurrentUser())

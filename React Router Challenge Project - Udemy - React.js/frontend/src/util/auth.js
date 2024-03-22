import { redirect } from "react-router-dom"

export function getTokenDuration() {
    const storedTokenExpiration = localStorage.getItem('expiration')
    const expirationTime = new Date(storedTokenExpiration)
    const now = new Date()
    const duration = expirationTime.getTime() - now.getTime()
    return duration
}

export function getAuthToken() {
    return localStorage.getItem('token') || ''
}

export function tokenLoader() {
    return getAuthToken()
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
    return redirect('/auth?mode=login')
}

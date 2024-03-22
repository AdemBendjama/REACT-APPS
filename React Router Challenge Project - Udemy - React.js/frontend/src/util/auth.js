import { redirect } from "react-router-dom"

export function getAuthToken() {
    return localStorage.getItem('token') || ''
}

export function tokenLoader() {
    return getAuthToken()
}

export function logout() {
    localStorage.removeItem('token')
    return redirect('/auth?mode=login')
}

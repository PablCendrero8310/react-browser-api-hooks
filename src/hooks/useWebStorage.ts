import { useState } from "react";
export function useLocalStorage<T = string>(key: string, initialValue: T): any[] {
    const [storedValue, setStoredValue] = useState<string>(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })
    const setValue = (value: T) => {
        try {
            setStoredValue(JSON.stringify(value))
            window.localStorage.setItem(key, storedValue)
        } catch (error) {
            console.error(error)
        }

    }
    return [storedValue, setValue]
}
export function useSessionStorage<T = string>(key: string, initialValue: T): any[] {
    const [storedValue, setStoredValue] = useState<string>(() => {
        try {
            const item = window.sessionStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })
    const setValue = (value: T) => {
        try {
            setStoredValue(JSON.stringify(value))
            window.sessionStorage.setItem(key, storedValue)
        } catch (error) {
            console.error(error)
        }

    }
    return [storedValue, setValue]
}
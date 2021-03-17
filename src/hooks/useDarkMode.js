import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [ mode, setDarkMode ] = useLocalStorage(key, initialValue)

    return [ mode, setDarkMode, initialValue ]
}
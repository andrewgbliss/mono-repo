import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
  return useLocalStorage('darkMode', false);
}

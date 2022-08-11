import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
  return useLocalStorage<boolean>('darkMode', false);
}

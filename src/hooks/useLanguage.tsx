import strings from '../lib/localization';
import { useLocalStorage } from './useLocalStorage';

export function useLanguage() {
  const [language, setLanguage] = useLocalStorage('language', 'en');

  // setLanguage('en');

  const updateLanguage = (newLanguage: string) => {
    strings.setLanguage(newLanguage);
    // setLanguage(newLanguage);
  };

  return { language, updateLanguage, strings };
}

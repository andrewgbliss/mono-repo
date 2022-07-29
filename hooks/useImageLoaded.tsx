import { useEffect, useState } from 'react';

export default function useImageLoaded() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function waitUntilLoaded() {
      try {
        await new Promise((r) => setTimeout(r, 5000));
        await Promise.all(
          Array.from(document.images).map((img) => {
            if (img.complete)
              if (img.naturalHeight !== 0) return Promise.resolve();
              else return Promise.reject(img);
            return new Promise((resolve, reject) => {
              img.addEventListener('load', resolve);
              img.addEventListener('error', () => reject(img));
            });
          })
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoaded(true);
      }
    }
    waitUntilLoaded();
  }, []);

  return loaded;
}

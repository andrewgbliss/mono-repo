import { useEffect, useState } from 'react';

function getOffset(el: any) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

function hasScrolledTo(el: any) {
  if (!el) return false;
  const top = getOffset(el).top;
  const offset = window.innerHeight - 200;
  return top - offset <= window.pageYOffset;
}

export default function useTriggerOnScroll(ref: any, onTrigger: any) {
  const [triggered, setTriggered] = useState<boolean>(false);
  useEffect(() => {
    function onScroll() {
      const viewed = hasScrolledTo(ref.current);
      if (viewed && !triggered) {
        setTriggered(true);
        onTrigger(true);
      } else if (!viewed && triggered) {
        setTriggered(false);
        onTrigger(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [ref, onTrigger, triggered]);
}

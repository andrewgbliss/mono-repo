import { useEffect, useState, useRef } from 'react';
import { Transition } from '@headlessui/react';
import useTriggerOnScroll from '../../../hooks/useTriggerOnScroll';

type Props = {
  children: React.ReactNode;
  duration?: number;
  wait?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
  opacity?: Array<string>;
  show?: boolean;
};

const durations = new Map();
durations.set(75, 'duration-75');
durations.set(100, 'duration-100');
durations.set(150, 'duration-150');
durations.set(200, 'duration-200');
durations.set(300, 'duration-300');
durations.set(500, 'duration-500');
durations.set(700, 'duration-700');
durations.set(1000, 'duration-1000');

export const Fade: React.FC<Props> = ({
  children,
  duration = 1000,
  wait = 0,
  opacity = ['opacity-0', 'opacity-100'],
  fadeIn = true,
  fadeOut = false,
  show = false,
}) => {
  const durationClassName = durations.get(duration);

  const [canShow, setCanShow] = useState<boolean>(show);

  useEffect(() => {
    if (wait <= 0) return;
    const tick = () => {
      setCanShow(true);
    };
    const timeout = setTimeout(tick, wait);
    return () => {
      clearTimeout(timeout);
    };
  }, [wait]);

  useEffect(() => {
    setCanShow(show);
  }, [show]);

  if (fadeIn) opacity = ['opacity-0', 'opacity-100'];
  if (fadeOut) opacity = ['opacity-100', 'opacity-0'];
  const [opacityFrom, opacityTo] = opacity;

  return (
    <Transition
      show={canShow}
      appear={true}
      enter={`transition ease-out ${durationClassName}`}
      enterFrom={`transform scale-95 ${opacityFrom}`}
      enterTo={`transform scale-100 ${opacityTo}`}
      leave={`transition ease-out ${durationClassName}`}
      leaveFrom={`transform scale-100 ${opacityTo}`}
      leaveTo={`transform scale-95 ${opacityFrom}`}
    >
      {children}
    </Transition>
  );
};

export const FadeIn: React.FC<Props> = ({ children, ...rest }) => (
  <Fade fadeIn {...rest}>
    {children}
  </Fade>
);

export const FadeOut: React.FC<Props> = ({ children, ...rest }) => (
  <Fade fadeOut {...rest}>
    {children}
  </Fade>
);

export const ScrollFadeIn: React.FC<Props> = ({ children, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);
  useTriggerOnScroll(ref, (triggered: boolean) => {
    setShow(triggered);
  });
  return (
    <div ref={ref}>
      <Fade show={show} {...rest}>
        {children}
      </Fade>
    </div>
  );
};

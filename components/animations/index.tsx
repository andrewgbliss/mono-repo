import { Transition } from '@headlessui/react';

type Props = {
  children: React.ReactNode;
};

export const FadeIn: React.FC<Props> = ({ children }) => (
  <Transition
    show={true}
    appear={true}
    enter="transition duration-1000 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-1000 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    {children}
  </Transition>
);

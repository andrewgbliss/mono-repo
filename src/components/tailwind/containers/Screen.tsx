interface Props {
  children: React.ReactNode;
}

export const Screen: React.FC<Props> = ({ children }) => (
  <div className="font-mono flex flex-wrap flex-col h-screen">
    <div className="bg-blue-200 flex-grow flex justify-center items-center">
      {children}
    </div>
  </div>
);

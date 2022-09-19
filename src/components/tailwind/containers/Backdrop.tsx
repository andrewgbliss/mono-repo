interface Props {
  open: boolean;
  children: React.ReactElement;
}

export const Backdrop: React.FC<Props> = (props) => {
  const { open, children } = props;
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-40">
      <div className="absolute w-screen h-screen bg-gray-100 opacity-90"></div>
      <div className="fixed w-screen h-screen z-40 overflow-y-auto">
        <div className="flex justify-center items-center w-screen h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

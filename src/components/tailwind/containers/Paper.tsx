interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Paper: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`shadow-2xl rounded-lg p-2 ${className}`}>{children}</div>
);

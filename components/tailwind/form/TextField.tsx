import { forwardRef } from 'react';

interface Props {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  error?: string;
  disabled?: boolean;
  value?: string;
}

export default forwardRef(
  (props: Props, ref: React.RefObject<HTMLInputElement>) => {
    const { label, error, ...rest } = props;
    return (
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={ref}
          {...rest}
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    );
  }
);

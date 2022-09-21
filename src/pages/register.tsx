import type { NextPage } from 'next';
import TextField from '../components/tailwind/form/TextField';
import Link from 'next/link';

const Register: NextPage = () => {
  return (
    <div className="full-screen page">
      <div className="paper-form">
        <form>
          <h6 className="text-center">Register to Abybyo</h6>
          <div className="py-6">
            <TextField
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
              label="Email Address"
            />
          </div>
          <div className="pb-6">
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              label="Password"
            />
          </div>
          <div className="pb-6">
            <TextField
              id="password2"
              name="password2"
              type="password"
              placeholder="Re-enter Password"
              label="Re-enter Password"
            />
          </div>
          <div className="flex items-center pb-6">
            <input id="newsletter" type="checkbox" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
              Newsletter?
            </label>
          </div>
          <div className="pb-6">
            <button className="btn btn-primary w-full" type="submit">
              Register
            </button>
          </div>
          <div className="text-center">
            <Link
              href="/login"
              className="text-primary hover:text-primary-light"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

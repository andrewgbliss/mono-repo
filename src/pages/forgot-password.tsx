import type { NextPage } from 'next';
import TextField from '../components/tailwind/form/TextField';
import Link from 'next/link';

const ForgotPassword: NextPage = () => {
  return (
    <div className="full-screen page">
      <div className="paper-form">
        <form>
          <div className="pb-4">
            <p>
              Please enter your email address below and we will send you an
              email with a reset link
            </p>
          </div>
          <div className="pb-4">
            <TextField
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
              label="Email Address"
            />
          </div>
          <div className="pb-4">
            <button className="btn btn-primary w-full" type="submit">
              Submit
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

export default ForgotPassword;

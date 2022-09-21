import type { NextPage } from 'next';
import TextField from '../components/tailwind/form/TextField';
import Link from 'next/link';

const Login: NextPage = () => {
  return (
    <div className="full-screen page">
      <div className="paper-form">
        <form>
          <h6 className="text-center">Login to Webstie</h6>
          <div className="py-6">
            <TextField
              id="email"
              name="email"
              type="text"
              label="Email Address"
            />
          </div>
          <div className="pb-6">
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
            />
          </div>
          <div className="py-6">
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>
          </div>
          <div className="py-4">
            <hr />
          </div>
          <div className="pt-4 text-center">
            <Link href="/forgot-password">
              <a className="hover:text-primary-light">Forgot Password?</a>
            </Link>
            <br />
            <br />
            <Link href={'/register'}>
              <a className={`hover:text-primary-light`}>
                Don&apos;t have an account?
                <br />
                Click here to register.
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

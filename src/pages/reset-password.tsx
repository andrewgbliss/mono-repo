import type { NextPage } from 'next';
import TextField from '../components/tailwind/form/TextField';

const ResetPassword: NextPage = () => {
  return (
    <div className="full-screen page">
      <div className="paper-form">
        <form>
          <div className="pb-4">
            <p>Reset Password</p>
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
          <div className="pb-4">
            <button className="btn btn-primary w-full" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

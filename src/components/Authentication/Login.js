import { useForm } from 'react-hook-form';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth } from "firebase/auth";
import swal from "sweetalert";
import { app } from '../../firebase.config';
import './login.css'

const Login = () => {
    const { signIn, githubLogin, googleLogin, facebookLogin } = useContext(AuthContext);
    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();
    const [showEye, setShowEye] = useState(false); // Potentially for toggling password visibility

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then((result) => {
                swal({
                    text: "Successfully logged in",
                    icon: "success",
                });
                navigate(location?.state?.from?.pathname || "/");
            })
            .catch((error) => {
                swal({
                    text: "Sign in failed!",
                    icon: "error",
                });
                console.error(error);
            });
    };

    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    swal({
                        text: "Successfully logged in",
                        icon: "success",
                    });
                    navigate(location?.state?.from?.pathname || "/");
                }
            })
            .catch((error) => {
                swal({
                    text: "Sign in failed!",
                    icon: "error",
                });
                console.error(error);
            });
    };

    return (
        <div className="login-container">
        <h2 className="login-header">Login to your account</h2>
        <p className="login-text">
          Don't have an account?
          <Link to="/signup">Sign up here</Link>
        </p>
        <div className="social-buttons">
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            aria-label="Login with Google"
            type="button"
            className="social-button"
          >
            {/* Google SVG */}
            <p>Login with Google</p>
         </button>
        </div>
        <div className="separator">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <form noValidate onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="leroy@jenkins.com"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <div className="flex justify-between">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              placeholder="*****"
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <button type="submit" className="submit-button">Sign in</button>
          <p>Dont have an account <Link to='/signup'>Signup</Link></p>
        </form>
      </div>
    );
};

export default Login;

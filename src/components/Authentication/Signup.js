
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './signup.css';

const Signup = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in signup', location);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password, name, image } = data;
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const result = await createUser(email, password);
            if (result.user) {
                await updateUserProfile(name, image);
                swal({
                    text: "Successfully signed up!",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
            }
        } catch (error) {
            swal({
                text: "Registration failed!",
                icon: "error"
            });
            setError(error.message);
            console.error('Registration error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container signup-container-lg">
            <div
                className="signup-image signup-image-lg"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')" }}
            ></div>

            <div className="signup-form signup-form-lg">
                <div className="signup-logo">
                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
                </div>

                <p className="signup-title">Create your account</p>


                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <div className="signup-input-group">
                        <label className="signup-input-label" htmlFor="RegistrationName">Name</label>
                        <input
                            id="RegistrationName"
                            className="signup-input"
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <span className="signup-error">{errors.name.message}</span>}
                    </div>

                    <div className="signup-input-group">
                        <label className="signup-input-label" htmlFor="RegistrationEmail">Email Address</label>
                        <input
                            id="RegistrationEmail"
                            className="signup-input"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Enter a valid email address',
                                },
                            })}
                        />
                        {errors.email && <span className="signup-error">{errors.email.message}</span>}
                    </div>

                    <div className="signup-input-group">
                        <label className="signup-input-label" htmlFor="RegistrationPassword">Password</label>
                        <input
                            id="RegistrationPassword"
                            className="signup-input"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                            })}
                        />
                        {errors.password && <span className="signup-error">{errors.password.message}</span>}
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="signup-button" disabled={loading}>
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>

                <div className="signup-footer">
                    <span className="signup-separator-line"></span>
                    <Link to='/login' className="signup-separator-text">or login</Link>
                    <span className="signup-separator-line"></span>
                </div>
            </div>
        </div>
    );
};

export default Signup;

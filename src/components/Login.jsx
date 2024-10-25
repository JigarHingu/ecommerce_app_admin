import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importing Font Awesome eye icons

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [loading, setLoading] = useState(false); // State for loading

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            setLoading(true); // Set loading state
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
            if (response.data.success) {
                setToken(response.data.token);
                toast.success("Login successful!");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                // Replace with your video file path or URL
                src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
            />
            <div className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-md relative z-10 transition-transform transform hover:scale-105">
                <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-700 mb-1 block" htmlFor="email">Email</label>
                        <input
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="text-sm font-medium text-gray-700 mb-1 block" htmlFor="password">Password</label>
                        <input
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none pr-10 focus:ring-2 focus:ring-blue-500"
                            type={showPassword ? "text" : "password"} // Toggle input type
                            placeholder="Enter your password"
                            required
                        />
                        <div
                            className="absolute right-3 top-1/2 transform -translate-y-1/1 cursor-pointer"
                            onClick={() => setShowPassword(prev => !prev)} // Toggle password visibility
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size="lg" />
                        </div>
                    </div>
                    <button
                        className={`mt-4 w-full py-2 px-4 rounded-md text-white bg-black transition-all duration-200 
                        hover:bg-gray-800 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

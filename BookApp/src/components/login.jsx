import React, { useState } from "react";
import "./login.css";

// File: src/components/login.jsx

export default function Login() {
    const [mode, setMode] = useState("login"); // "login" or "register"
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [regData, setRegData] = useState({ name: "", email: "", password: "", confirm: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (setter) => (e) => {
        setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validateLogin = () => {
        const e = {};
        if (!loginData.email) e.email = "Email required";
        if (!loginData.password) e.password = "Password required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateRegister = () => {
        const e = {};
        if (!regData.name) e.name = "Name required";
        if (!regData.email) e.email = "Email required";
        if (!regData.password) e.password = "Password required";
        if (regData.password !== regData.confirm) e.confirm = "Passwords do not match";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const onLogin = (ev) => {
        ev.preventDefault();
        if (!validateLogin()) return;
        // Replace with real auth call
        console.log("login", loginData);
    };

    const onRegister = (ev) => {
        ev.preventDefault();
        if (!validateRegister()) return;
        // Replace with real register call
        console.log("register", regData);
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <button
                        className={`tab ${mode === "login" ? "active" : ""}`}
                        onClick={() => {
                            setMode("login");
                            setErrors({});
                        }}
                        type="button"
                    >
                        Login
                    </button>
                    <button
                        className={`tab ${mode === "register" ? "active" : ""}`}
                        onClick={() => {
                            setMode("register");
                            setErrors({});
                        }}
                        type="button"
                    >
                        Register
                    </button>
                </div>

                <div className={`forms ${mode === "register" ? "show-register" : ""}`}>
                    <form className="form login-form" onSubmit={onLogin} noValidate>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange(setLoginData)}
                                placeholder="you@example.com"
                                autoComplete="username"
                            />
                            {errors.email && <small className="error">{errors.email}</small>}
                        </label>

                        <label>
                            Password
                            <input
                                type="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange(setLoginData)}
                                placeholder="••••••••"
                                autoComplete="current-password"
                            />
                            {errors.password && <small className="error">{errors.password}</small>}
                        </label>

                        <button className="primary" type="submit">Sign In</button>
                    </form>

                    <form className="form register-form" onSubmit={onRegister} noValidate>
                        <label>
                            Full name
                            <input
                                type="text"
                                name="name"
                                value={regData.name}
                                onChange={handleChange(setRegData)}
                                placeholder="Your full name"
                                autoComplete="name"
                            />
                            {errors.name && <small className="error">{errors.name}</small>}
                        </label>

                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={regData.email}
                                onChange={handleChange(setRegData)}
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                            {errors.email && <small className="error">{errors.email}</small>}
                        </label>

                        <label>
                            Password
                            <input
                                type="password"
                                name="password"
                                value={regData.password}
                                onChange={handleChange(setRegData)}
                                placeholder="Create a password"
                                autoComplete="new-password"
                            />
                            {errors.password && <small className="error">{errors.password}</small>}
                        </label>

                        <label>
                            Confirm password
                            <input
                                type="password"
                                name="confirm"
                                value={regData.confirm}
                                onChange={handleChange(setRegData)}
                                placeholder="Repeat password"
                                autoComplete="new-password"
                            />
                            {errors.confirm && <small className="error">{errors.confirm}</small>}
                        </label>

                        <button className="primary" type="submit">Create account</button>
                    </form>
                </div>

                <div className="auth-footer">
                    <small>
                        By continuing you agree to the terms and privacy policy.
                    </small>
                </div>
            </div>
        </div>
    );
}


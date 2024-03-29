import React, { Component, useState, useEffect } from 'react'
import { getExtensions } from '../src/getExtension/getExtension'
import { InjectedWindowProvider } from '../src/types/types'

const Login = ({ navigation }) => {
       return (
        <form>
            <h3 className="label-text-color">Sign In</h3>

            <div className="mb-3">
                <label className="label-text-color">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>

            <div className="mb-3">
                <label className="label-text-color">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>

            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
            </div>

            <div className="d-grid">
                <button type="submit" className="button">
                    Submit
                </button>
            </div>
            <p className="forgot-password text-right">
                <a href="#">Forgot Password?</a>
            </p>
        </form>
    )
};

export default Login;
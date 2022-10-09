﻿import React from 'react';
import { StaticResources } from '../../staticResources';
import '../auth/login.css';

export class Login extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="container login-rc">
                <div className="row">
                    <div className="col-12">
                        <main className="form-signin mx-auto">
                            <form>
                                <img className="mb-4" src={StaticResources.logo} alt="" width="72" height="57" />
                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

import React from 'react';
import 'reflect-metadata';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import { Dashboard } from './modules/dashboard/dashboard';
import { NotFound } from './modules/error/notfound';
import { Home } from './modules/home/home';
import { container } from 'tsyringe';
import { AuthService } from './services/authService';
import { Login } from './modules/auth/login';

export class App extends React.Component {
    public readonly authService: AuthService;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.authService = container.resolve(AuthService);
    }

    public render(): JSX.Element {
        let routes;
        if (this.authService.isAuthenticated()) {
            routes = <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>;
        } else {
            routes = <Routes>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>;
        }
        return (
            <div className="App" >
                {routes}
                {
                    !this.authService.isAuthenticated() && (
                        <Navigate to="/login" replace={true} />
                    )
                }
            </div>
        );
    }
}

export class Navigation extends React.Component {
    public render(): JSX.Element {
        return (
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
        );
    }
}

export default App;

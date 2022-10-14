import React from 'react';
import 'reflect-metadata';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Dashboard } from './modules/dashboard/dashboard';
import { NotFound } from './modules/error/notfound';
import { Home } from './modules/home/home';
import { container } from 'tsyringe';
import { AuthService } from './services/authService';
import { Login } from './modules/auth/login';
import { RequireAuth } from './shared/cores/requireAuth';
import { LanguageService } from './services/languageService';
import { ReactWithStageComponent } from './shared/cores/reactWithStageComponent';

export class App extends ReactWithStageComponent<any> {
    public readonly authService: AuthService = container.resolve(AuthService);
    public readonly languageService: LanguageService = container.resolve(LanguageService);

    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    public async init(): Promise<void> {
        const me = this;
        await me.loadLanguage();
    }

    public async loadLanguage(): Promise<void> {
        const me = this;
        await me.languageService.getJson();
    }

    public render(): JSX.Element {
        let routes;
        if (this.authService.isAuthenticated()) {
            routes = <Routes>
                <Route index element={<Navigate to="/home" replace/>}/>
                <Route path="home" element={RequireAuth.needAuth(<Home/>)}/>
                <Route path="dashboard" element={RequireAuth.needAuth(<Dashboard/>)}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>;
        } else {
            routes = <Routes>
                <Route index element={<Navigate to="/login" replace/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>;
        }
        return (
            <div className="App">
                {routes}
            </div>
        );
    }
}

export default App;

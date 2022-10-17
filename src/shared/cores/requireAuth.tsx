import React from 'react';
import { Navigate } from 'react-router-dom';
import { container } from 'tsyringe';
import { AuthService } from '../../services/authService';

export class RequireAuth {
    public static authService: AuthService;
    public static needAuth(children: JSX.Element): JSX.Element {
        const me = this;
        me.authService = container.resolve(AuthService);
        if (me.authService.isAuthenticated()) {
            return children;
        } else {
            return <Navigate to='/login' />;
        }
    }
}

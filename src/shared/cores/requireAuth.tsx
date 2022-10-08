import React from 'react';
import { Navigate } from 'react-router-dom';
import { container } from 'tsyringe';
import { AuthService } from '../../services/authService';

export class RequireAuth extends React.Component {
    public readonly authService: AuthService;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.authService = container.resolve(AuthService);
    }

    public render(): JSX.Element {
        const me = this;
        if (me.authService.isAuthenticated()) {

        }
        else {

        }
    }
}

import 'reflect-metadata';
import { injectable } from 'tsyringe';

@injectable()
export class AuthService {
    public isAuthenticated(): boolean {
        // sample get form localhost
        const user = localStorage.getItem('userInfo');
        if (user != null && user !== '') {
            return true;
        } else {
            return false;
        }
    }
}

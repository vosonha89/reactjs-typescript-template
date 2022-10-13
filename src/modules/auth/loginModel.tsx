import { BaseModel, ValidationModel } from '../../shared/cores/baseModel';

export class LoginModel extends BaseModel implements ValidationModel {
    private _username = '';
    private _password = '';

    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
        if (this.onPropertyChanged != null) {
            this.onPropertyChanged('username', value);
        }
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
        if (this.onPropertyChanged != null) {
            this.onPropertyChanged('password', value);
        }
    }

    public isValid(): boolean {
        return true;
    }
}

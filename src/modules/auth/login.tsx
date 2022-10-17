import React from 'react';
import { StaticResources } from '../../shared/cores/staticResources';
import '../auth/login.css';
import { LoginModel } from './loginModel';
import { ReactBindingComponent } from '../../shared/cores/reactBindingComponent';

export class Login extends ReactBindingComponent<LoginModel> {
    public async init(): Promise<void> {
        return await Promise.resolve();
    }

    public initModel(): LoginModel {
        return new LoginModel();
    }

    public changeLanguage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const me = this;
        me.languageService.currentLanguage = 'en-EN';
        me.languageService.getJson().then(() => {
            me.language.setText(me.languageService.text);
        }).catch((error) => {
            console.log(error);
        });
    };

    public render(): JSX.Element {
        return (
            <div className="container login-rc">
                <div className="row">
                    <div className="col-12">
                        <main className="form-signin mx-auto">
                            <form>
                                <img className="mb-4" src={StaticResources.logo} alt="" width="72" height="57" />
                                <h1 className="h3 mb-3 fw-normal">{this.language?.text?.title}</h1>
                                {this.model.username}
                                <div className="form-floating mb-3">
                                    <input type="email"
                                        className="form-control"
                                        placeholder="email@example.com"
                                        value={this.model.username}
                                        onChange={(e) => {
                                            this.model.username = e.target.value;
                                        }}
                                    />
                                    <label>Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword"
                                        placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={(e) => { this.changeLanguage(e); }}>Change</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

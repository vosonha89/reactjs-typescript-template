import React from 'react';
import { StaticResources } from '../../shared/cores/staticResources';
import '../auth/login.css';
import { LoginModel } from './loginModel';
import { ReactBindingComponent } from '../../shared/cores/reactBindingComponent';
import { SelectItem } from '../../shared/models/selectBox';

export class Login extends ReactBindingComponent<LoginModel> {
    public languageList: SelectItem[] = [];

    public async init(): Promise<void> {
        const me = this;
        me.languageList.push({ text: 'Vietnamese', value: 'vi-VN', selected: true } as SelectItem);
        me.languageList.push({ text: 'English', value: 'en-EN', selected: false } as SelectItem);
        me.model.selectedLanguage = me.languageList.find(a => a.selected) as SelectItem;
        return await Promise.resolve();
    }

    public initModel(): LoginModel {
        return new LoginModel();
    }

    public changeLanguage(event: React.MouseEvent<HTMLElement, MouseEvent>, value: string): void {
        const me = this;
        me.languageService.currentLanguage = value;
        me.languageList.forEach(a => {
            a.selected = false;
            if (a.value === value) {
                a.selected = true;
                me.model.selectedLanguage = a;
            }
        });
        me.languageService.getJson().then(() => {
            me.language.setText(me.languageService.text);
        }).catch((error) => {
            console.log(error);
        });
    };

    public render(): JSX.Element {
        return (
            <div className="container-fluid login-rc">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <div className="dropdown mt-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {this.model.selectedLanguage.text}
                            </button>
                            <ul className="dropdown-menu">
                                {
                                    this.languageList.map((object) => <li key={object.value} onClick={(e) => { this.changeLanguage(e, object.value); }}><a className="dropdown-item"> {object.text}</a></li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row login-box">
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
                                        onChange={(e) => { this.model.username = e.target.value; }}
                                    />
                                    <label>Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword"
                                        placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

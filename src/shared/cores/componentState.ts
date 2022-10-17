import React from 'react';
import { LanguageText } from '../models/languageText';

export interface DataInState<T> {
    isReady: boolean;
    data: T | any;
    languageText: LanguageText;
}

export class ComponentState<T> {
    private readonly _component: React.Component;
    private readonly _dataInState: DataInState<T>;
    public onComponentStateReady?: () => void;

    constructor(component: React.Component) {
        this._dataInState = {} as DataInState<T>;
        this._dataInState.isReady = false;
        this._dataInState.data = {} as T;
        this._dataInState.languageText = {} as LanguageText;
        this._component = component;
        this._component.setState(this._dataInState, () => {
            if (this.onComponentStateReady != null) {
                this.onComponentStateReady();
            }
        });
    }

    public get isReady(): boolean {
        return (this._component.state as DataInState<T>).isReady;
    }

    public set isReady(value: boolean) {
        const dataInState = this._component.state as DataInState<T>;
        dataInState.isReady = value;
        this._component.setState(this._dataInState);
    }

    public get data(): T | any {
        return (this._component.state as DataInState<T>).data as T;
    }

    public set data(value: T | any) {
        const dataInState = this._component.state as DataInState<T>;
        dataInState.data = value;
        this._component.setState(this._dataInState);
    }

    public get language(): LanguageText {
        return (this._component.state as DataInState<T>).languageText;
    }

    public set language(value: LanguageText) {
        const dataInState = this._component.state as DataInState<T>;
        dataInState.languageText = value;
        this._component.setState(this._dataInState);
    }
}

import React from 'react';
import { BaseModel } from './baseModel';

export abstract class ReactBindingComponent<T extends BaseModel> extends React.Component {
    public model: T;
    public abstract InitModel(): T;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.model = this.InitModel();
        this.model.onPropertyChanged = (field, value) => {
            this.updateState(field, value);
        };
        this.state = this.model;
    }

    public updateState(field: string, value: any): void {
        const me = this;
        me.setState({ field: value });
    }
}

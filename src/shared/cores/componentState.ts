import { singleton } from 'tsyringe';

export interface DataInState<T> {
    isReady: boolean;
    data: T | any;
}

@singleton()
export class ComponentState<T> {
    public component: any;
    private readonly _dataInState: DataInState<T>;

    constructor(component: React.Component) {
        this.component = component;
        this._dataInState = {} as DataInState<T>;
        this.component.setState({ dataInState: this._dataInState });
    }

    public get isReady(): boolean {
        const dataInState = this.component.state.dataInState as DataInState<T>;
        return dataInState.isReady;
    }

    public set isReady(value: boolean) {
        const dataInState = this.component.state.dataInState as DataInState<T>;
        dataInState.isReady = value;
        this.component.setState({ dataInState });
    }

    public get data(): T | any {
        const dataInState = this.component.state.dataInState as DataInState<T>;
        return dataInState.data;
    }

    public set data(value: T | any) {
        const dataInState = this.component.state.dataInState as DataInState<T>;
        dataInState.data = value;
        this.component.setState({ dataInState });
    }
}

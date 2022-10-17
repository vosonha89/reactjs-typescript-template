import { BaseModel } from './baseModel';
import { ReactWithStageComponent } from './reactWithStageComponent';

export abstract class ReactBindingComponent<T extends BaseModel> extends ReactWithStageComponent<T> {
    public model: T;

    public abstract initModel(): T;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.model = this.initModel();
        const me = this;
        me.model.onPropertyChanged = (field, value) => {
            me.updateState(field, value);
        };
    }

    public updateState(field: string, value: any): void {
        const me = this;
        if (me.componentState !== undefined) {
            me.componentState.data = me.model;
        }
    }
}

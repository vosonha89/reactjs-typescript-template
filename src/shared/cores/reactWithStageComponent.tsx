import React from 'react';
import { ComponentState } from './componentState';

export abstract class ReactWithStageComponent<T> extends React.Component {
    public componentState?: ComponentState<T>;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        const me = this;
        if (this.componentState === undefined || (this.componentState !== undefined && !this.componentState.isReady)) {
            const contextCheckInterval = setInterval(() => {
                console.log('contextCheckInterval');
                if (this.context !== undefined && this.context !== null) {
                    clearInterval(contextCheckInterval);
                    this.init()
                        .then(() => {
                            me.state = {};
                            me.componentState = new ComponentState(me);
                            me.componentState.isReady = true;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            }, 100);
        }
    }

    public abstract init(): Promise<void>;
}

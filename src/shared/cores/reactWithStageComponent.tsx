import React from 'react';
import { container } from 'tsyringe';
import { LanguageModel, LanguageService } from '../../services/languageService';
import { ComponentState } from './componentState';

export abstract class ReactWithStageComponent<T> extends React.Component {
    public readonly languageService: LanguageService = container.resolve(LanguageService);
    public language: LanguageModel = new LanguageModel();
    public componentState?: ComponentState<T>;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        const me = this;
        me.language.onLanguageChanged = (value) => {
            me.updateLanguage(value);
        };
    }

    public async componentDidMount(): Promise<void> {
        const me = this;
        await me.languageService.getJson();
        me.language.setText(me.languageService.text);
        if (me.componentState === undefined) {
            this.componentState = new ComponentState<T>(this);
            this.componentState.onComponentStateReady = () => {
                if (me.componentState !== undefined && !me.componentState.isReady) {
                    me.init()
                        .then(() => {
                            if (me.componentState !== undefined) {
                                me.componentState.language = me.languageService.text;
                                me.componentState.isReady = true;
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            };
        }
    }

    public abstract init(): Promise<void>;

    public updateLanguage(value: string): void {
        const me = this;
        if (me.componentState !== undefined) {
            me.componentState.language = me.language.text;
        }
    }
}

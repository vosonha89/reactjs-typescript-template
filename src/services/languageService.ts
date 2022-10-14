import { singleton } from 'tsyringe';
import { LanguageText } from '../shared/models/languageModel';

@singleton()
export class LanguageService {
    public currentLanguage = 'vi-VN';
    public text: LanguageText = {} as LanguageText;

    public async getJson(): Promise<void> {
        const me = this;
        let url = (process.env.PUBLIC_URL as string);
        url += './language/' + me.currentLanguage + '.json';
        const response = await fetch(url);
        if (response !== undefined) {
            const responseText = await response.text();
            if (responseText !== '') {
                me.text = JSON.parse(responseText);
            }
        }
        console.log(me.text);
    }
}

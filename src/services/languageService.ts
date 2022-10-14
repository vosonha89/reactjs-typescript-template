import { singleton } from 'tsyringe';

@singleton()
export class LanguageService {
    public currentLanguage = 'vi-VN';

    public async getJson(): Promise<void> {
        const me = this;
        let url = (process.env.PUBLIC_URL as string);
        url += './' + me.currentLanguage + '.json';
        const language = await fetch(url);
        console.log(language);
    }
}

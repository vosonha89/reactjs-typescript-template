import { singleton } from "tsyringe";

@singleton()
export class LanguageService {
    public currentLanguage = 'vi-VN';

    public getJson(): void {
        const me = this;

    }
}

import { SelectItem } from '../models/selectBox';

export abstract class BaseModel {
    private _selectedLanguage: SelectItem = {} as SelectItem;

    public onPropertyChanged?: (field: string, value: any) => void;

    public get selectedLanguage(): SelectItem {
        return this._selectedLanguage;
    }

    public set selectedLanguage(value: SelectItem) {
        this._selectedLanguage = value;
        if (this.onPropertyChanged != null) {
            this.onPropertyChanged('selectedLanguage', value);
        }
    }
}

export interface ValidationModel {
    isValid: () => boolean;
}

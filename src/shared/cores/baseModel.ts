export abstract class BaseModel {
    public onPropertyChanged?: (field: string, value: any) => void;
}

export interface ValidationModel {
    isValid: () => boolean;
}

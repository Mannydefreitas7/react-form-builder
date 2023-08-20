import { JSONFormData } from './form.type';
import { FC } from "react";

export interface FormComponents {
    [key: string]: FC<JSONFormData.FieldDataType>;
}

export interface LayoutComponents {
    [key: string]: FC<{ id: string, index?: number, row: JSONFormData.Row } | { id: string, index?: number, col: JSONFormData.Column }>;
}

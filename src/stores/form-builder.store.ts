import { createContext } from "react";
import { JSONFormData } from "../types/form.type";

export const initialValue: JSONFormData.Payload & FormBuilderContexType = {
    updateRows: () => {},
    selectFormElement: () => {},
    handleOnAddColumn: () => {},
    handleOnAddRow: () => {},
    payload: []
  }

export interface FormBuilderContexType {
    updateRows: (state: JSONFormData.Payload & FormBuilderContexType) => void,
    selectFormElement: (element: JSONFormData.Column | JSONFormData.Row | JSONFormData.FieldDataType) => void,
    handleOnAddRow: (row: JSONFormData.Row) => void,
    handleOnAddColumn: (row: JSONFormData.Row, side: string) => void,
    activeRow?: JSONFormData.Row | null,
    selected?: JSONFormData.Column | JSONFormData.Row | JSONFormData.FieldDataType | null
}

const FormBuilderContext = createContext(initialValue);

export default FormBuilderContext;
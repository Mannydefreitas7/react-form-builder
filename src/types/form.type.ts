import { FC, FunctionComponent } from "react";

export interface FormTypes {
    text: FunctionComponent,
    textarea: FunctionComponent,
    number: FunctionComponent,
    decimal: FunctionComponent,
    email: FunctionComponent,
    date: FunctionComponent,
    time: FunctionComponent,
    dropdownSingleSelection: FunctionComponent,
    dropdownMultiSelection: FunctionComponent,
    phone: FunctionComponent,
    media?: FunctionComponent,
    barcode?: FunctionComponent,
    image?: FunctionComponent
}

export namespace JSONFormData {

    export interface Payload {
        payload: JSONFormData.Row[]
    }

    export interface Row {
        id: string,
        index: number,
        type: string,
        name: string,
        columns: Column[]
    }

    export interface Column {
        id: string,
        index: number,
        type: string,
        name: string,
        children: FieldDataType[]
    }


    export type FieldDataType = {
        id: string;
        name: string;
        showCard: Boolean;
        isBuildingForm: Boolean;
        label?: string | null;
        type: string;
        index: number;
        description?: string | null;
        placeholder?: string | null;
        blob?: Blob | null;
        defaultValue?: string | null;
        options?: FieldDataOptions[] | null;
    }

    export type FieldDataOptions = {
        name: string;
        value: string;
    }

}

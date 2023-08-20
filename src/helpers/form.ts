
import { CalendarMonthTwoTone, WatchLaterTwoTone, NotesTwoTone, CheckBoxTwoTone, PhoneTwoTone, PinTwoTone, TitleTwoTone, PriceChangeTwoTone, LibraryAddCheckTwoTone, MailTwoTone } from '@mui/icons-material';
import { JSONFormData } from "../types/form.type";
import { v4 as uuidv4, v4 } from 'uuid';
import { FormComponents } from "../types/component.type";
import {DateFieldInput, DecimalFieldInput, EmailFieldInput, MultiSelectionDropdown, NumberFieldInput, PhoneFieldInput, SingleSelectionDropdown, TextAreaFieldInput, TextFieldInput, TimeFieldInput} from "../components/form";
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface DynamicComponentIconType {
    [key: string]: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
  };
}

interface FieldTypeNames {
    [key: string]: string;
}

export const fieldTypeIcons: DynamicComponentIconType = {
    text: TitleTwoTone,
    date: CalendarMonthTwoTone,
    time: WatchLaterTwoTone,
    textarea: NotesTwoTone,
    decimal: PriceChangeTwoTone,
    number: PinTwoTone,
    email: MailTwoTone,
    dropdownMultiSelection: LibraryAddCheckTwoTone,
    dropdownSingleSelection: CheckBoxTwoTone,
    phone: PhoneTwoTone,
}

export const fieldTypes: FormComponents = {
    text: TextFieldInput,
    date: DateFieldInput,
    time: TimeFieldInput,
    textarea: TextAreaFieldInput,
    number: NumberFieldInput,
    decimal: DecimalFieldInput,
    email: EmailFieldInput,
    dropdownMultiSelection: MultiSelectionDropdown,
    dropdownSingleSelection: SingleSelectionDropdown,
    phone: PhoneFieldInput,
}

export const fieldTypeNames: FieldTypeNames = {
    text: 'Text',
    date: 'Date',
    time: 'Time',
    textarea: 'Multiline Text',
    number: 'Number',
    decimal: 'Decimal',
    email: 'Email',
    dropdownMultiSelection: 'Multi Seclection Dropdown',
    dropdownSingleSelection: 'Single Seclection Dropdown',
    phone: 'Phone',
}

export const allFromFields: JSONFormData.FieldDataType[] = Object.keys(fieldTypes).map((key, index) => {
    return {
        name: fieldTypeNames[key],
        type: key,
        index,
        showCard: true,
        isBuildingForm: true,
        id: `input-${key}-${uuidv4()}`,
        options: [],
        label: "",
        placeholder: "",
    }
});

export const data: JSONFormData.Row[] = [
    {
        id: uuidv4(),
        index: 0,
        name: 'Section',
        type: 'row',
        columns: []
    }
]

export const addRow = (index?: number): JSONFormData.Row => {
    const row : JSONFormData.Row = {
        id: `row-${v4()}`,
        name: `Row`,
        type: 'row',
        index: index ?? 0,
        columns: [
            {
                id: `column-${v4()}`,
                index: 0,
                type: 'column',
                name: 'Column',
                children: []
            },
        ]
    }
    return row;
}

   

export const addColumn = (index?: number): JSONFormData.Column => {
    const column : JSONFormData.Column = {
        id: `column-${v4()}`,
        type: 'column',
        name: 'Column',
        index: index ?? 0,
        children: []
    }
    return column;
}

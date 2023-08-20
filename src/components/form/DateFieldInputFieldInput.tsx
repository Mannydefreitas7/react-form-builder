import React from "react";
import { JSONFormData } from "../../types/form.type";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const DateFieldInput: React.FC<JSONFormData.FieldDataType> = (
  props: JSONFormData.FieldDataType
) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label={props.label ?? "Enter Date"} className="w-full" />
    </LocalizationProvider>
  );
};

export default DateFieldInput;

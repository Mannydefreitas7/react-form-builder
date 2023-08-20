import React, { forwardRef } from "react";
import DynamicIcon from "../DynamicIcon";
import DragIndicatorTwoToneIcon from "@mui/icons-material/DragIndicatorTwoTone";

interface FormInputCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  active: boolean;
  name: string;
  type: string;
}

const FormInputCard = forwardRef<HTMLDivElement, FormInputCardProps>(({type, name, active, ...props}, ref) => {
  return (
    <div ref={ref} className={`cursor-move select-none type flex p-2 border-1 border-solid justify-between bg-white dark:bg-neutral-800 rounded-sm ${active ? type : 'border-neutral-300 dark:border-neutral-700'}`} onClick={() => console.log('pressed')} {...props}>
      <div className="flex">
        <DynamicIcon name={type} />
        <div className="ml-3">{name}</div>
      </div>
      <DragIndicatorTwoToneIcon className="text-neutral-500" />
    </div>
  );
});

export default FormInputCard;

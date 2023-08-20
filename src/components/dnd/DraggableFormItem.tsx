import React, { useContext, useEffect } from "react";
import { JSONFormData } from "../../types/form.type";
import { FormInputCard } from "../form";
import { useDraggable} from '@dnd-kit/core';
import FormBuilderContext from "../../stores/form-builder.store";


interface DraggableFormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  active: boolean;
  hasOverlay: boolean;
  data: JSONFormData.FieldDataType,
}

function DraggableFormItem({active, hasOverlay, ...props}: DraggableFormItemProps) {
  const {id, data} = props;
  const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id,
    data
});

  const style = !hasOverlay && transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const state = useContext(FormBuilderContext);
  const { selectFormElement } = state; 



  useEffect(() => {
    if (isDragging) {
      selectFormElement(data)
    } else {
      console.log('dragging end')
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging])

  return (
        <FormInputCard ref={setNodeRef} style={style} active={isDragging} type={data.type} name={data.name} id={`lib-${id}`}  {...listeners} {...attributes} />
  );
}

export default DraggableFormItem;

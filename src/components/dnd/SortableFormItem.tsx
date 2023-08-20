import React from 'react'
import { JSONFormData } from '../../types/form.type';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


function SortableFormItem({id, data, index}: {id: string, index?: number, data: JSONFormData.FieldDataType}) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* <Droppable id={`droppable-${id}`} index={index ?? 0} position={Position.before} /> */}
       {/* <h1>{data.type}</h1> */}
      {/* <DynamicComponent name={data.type} data={data} /> */}
      
    </div>
  )
}

export default SortableFormItem
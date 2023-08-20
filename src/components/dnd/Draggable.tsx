import React from 'react'
import { useDraggable} from '@dnd-kit/core';


interface DraggableProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  hasOverlay: boolean;
  data: any;
}


function Draggable({hasOverlay, ...props}: DraggableProps) {

    const {data, id, children} = props;
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id,
        data
    });

    

    const style = !hasOverlay && transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;
    

  return (
    <div style={style} className={`cursor-move ${isDragging && 'shadow-lg'}`}  ref={setNodeRef} {...listeners} {...attributes}>{children}</div>
  )
}

export default Draggable
import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable({
  id,
  index,
  children,
  accepts
}: {
  id: string;
  index: number;
  disabled?: boolean;
  children?: ReactNode;
  accepts: string[];
}) {



  const { isOver, setNodeRef, active } = useDroppable({
    id,
    data: {
      index,
      accepts,
    },
  }); 

  const isDisabled = () => {
    return active && active.data.current && active.data.current.type && !accepts.includes(active.data.current.type)
  }

  const activeType = () => {
    return active && active.data.current ? active.data.current.type : ''
  }

  return (
    <div
      ref={setNodeRef}
      className={`type droppable w-full h-full
      ${
        !isDisabled() && isOver
          && activeType()
      }`}
    >
      {children && children}
    </div>
  );
}

export default Droppable;

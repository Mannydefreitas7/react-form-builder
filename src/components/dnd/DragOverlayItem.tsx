import { UseDraggableArguments } from '@dnd-kit/core';
import React, { ReactNode, forwardRef } from 'react'
export type Ref = HTMLDivElement;


export const DragOverlayItem = forwardRef<Ref, UseDraggableArguments & {children: ReactNode, id: string, className: string}>(({children, ...props}, ref) => {
  return (
    <div {...props} ref={ref}>{children}</div>
  )
});

export default DragOverlayItem

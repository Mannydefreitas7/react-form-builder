import React from 'react'
import { JSONFormData } from '../../types/form.type'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import DragHandleIcon from '@mui/icons-material/DragHandle';

function RowSection({row, listeners} : {row: JSONFormData.Row, index?: number, listeners?: SyntheticListenerMap}) {
  return (
    <div className='flex w-full justify-between items-end pb-1'>
      {/* <div className='text-sm opacity-30 font-bold'>{row.name}</div> */}
      <div className='cursor-move h-6' {...listeners}>
        <DragHandleIcon className='opacity-50 ' />
      </div>
  </div>
  )
}

export default RowSection
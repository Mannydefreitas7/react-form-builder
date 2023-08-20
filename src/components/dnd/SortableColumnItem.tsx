import React from 'react'
import { JSONFormData } from '../../types/form.type';
import Droppable from './Droppable';
import { allFromFields } from '../../helpers/form';
import DynamicComponent from '../DynamicComponent';
import { Fab, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'

function SortableColumnItem({id, column, index}: {id: string, index?: number, column: JSONFormData.Column}) {

  return (
    <div className={`min-h-[200px] my-4 w-full relative border-neutral-300 border-solid dark:border-neutral-700 rounded bg-white dark:bg-black flex relative group`}>
      <Droppable accepts={allFromFields.map(item => item.type)} id={id} index={index ?? 0}>
        <div className='px-3 py-2'>
          <div className='text-neutral-400 dark:text-neutral-600 mb-2 text-xs'>Column</div>
          <div className='flex flex-col gap-2'>
            {
              column && column.children.map((item, index) => {
                return <DynamicComponent key={index} name={item.type} data={item}></DynamicComponent>
              })
            }
          </div>
        </div>
      </Droppable>
      {/* <IconButton size='small' className='absolute left-1/2 -bottom-4' color="primary" aria-label="add to shopping cart">
        <Add />
      </IconButton> */}
      {/* <Fab size="small" color="primary" aria-label="add" className='absolute -right-5 opacity-0 group-hover:opacity-100'>
        <AddIcon />
      </Fab> */}
    </div>  
  )
}

export default SortableColumnItem
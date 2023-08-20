import React, { useContext } from 'react'
import { JSONFormData } from '../../types/form.type';
import Droppable from './Droppable';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import SortableColumnItem from './SortableColumnItem';
import { RowSection } from '../form';
import { IconButton } from '@mui/material';
import Add from '@mui/icons-material/Add';
import FormBuilderContext from '../../stores/form-builder.store';
import { addRow } from '../../helpers/form';

function SortableRowItem({id, row, index}: {id: string, index?: number, row: JSONFormData.Row}) {

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

  const state = useContext(FormBuilderContext);
  const {handleOnAddRow, handleOnAddColumn} = state;


  return (
    <div ref={setNodeRef} style={style} {...attributes} className='w-full flex flex-col items-stretch group/container'>
      <RowSection index={index} listeners={listeners} row={row} />

      <div className='w-full border-solid border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 flex rounded-sm' style={{ minHeight: 200}}>
        <Droppable accepts={['column']} id={`row-droppable-${id}`} index={index ?? 0}>
          <div className={`flex gap-2 relative items-stretch ${row.columns.length > 2 && 'px-4'}`}>
            {
                row.columns.length < 3 && <div className='opacity-0 group-hover/container:opacity-100 self-stretch rounded bg-blue-500 bg-opacity-10 w-3 hover:w-8 my-4 transition-all ease-in-out flex items-center justify-center group'>
                <IconButton onClick={() => handleOnAddColumn(row, 'left')} className='opacity-0 group-hover:opacity-100' size='small' color="primary" aria-label="add to shopping cart">
                  <Add />
                </IconButton>
              </div>
            }

            {row.columns.map((col, index) => {
                return (<SortableColumnItem key={index} column={col} id={col.id} />)
            })}

            {
              row.columns.length < 3 
              && <div className='opacity-0 group-hover/container:opacity-100 self-stretch rounded bg-blue-500 bg-opacity-10 w-3 hover:w-8 my-4 transition-all ease-in-out flex items-center justify-center group'>
                <IconButton onClick={() => handleOnAddColumn(row, 'right')} className='opacity-0 group-hover:opacity-100' size='small' color="primary" aria-label="add to shopping cart">
                  <Add />
                </IconButton>
              </div>
            }
            
          </div>
        </Droppable>
      </div> 
        <div className='rounded-sm opacity-0 group-hover/container:opacity-100 self-stretch h-2 hover:h-12 transition-all ease-in-out flex items-center justify-center group bg-blue-500 bg-opacity-10 my-2'>
            <IconButton className='opacity-0 group-hover:opacity-100' size='small' color="primary" onClick={() => handleOnAddRow(row)}>
              <Add />
            </IconButton>
        </div>
    </div>
  )
}

export default SortableRowItem
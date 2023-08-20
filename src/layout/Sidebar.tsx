import React, { useContext } from 'react'
import { allFromFields } from '../helpers/form'
import { DraggableFormItem } from '../components/dnd';
import FormBuilderContext from '../stores/form-builder.store';
import { JSONFormData } from '../types/form.type';

function Sidebar() {
    const fields = allFromFields;

    const state = useContext(FormBuilderContext);

    const isActive = (field: JSONFormData.Column | JSONFormData.Row | JSONFormData.FieldDataType) => {
        if (state.selected && state.selected.id) {
            return state.selected.id === field.id
        }
        return false; 
    }


    return (
        <div className='flex flex-col gap-2'>
            {
                fields.map((field, index) => {
                    return (
                        <DraggableFormItem hasOverlay={false} key={index} active={isActive(field)} id={field.id} data={field} onClick={() => console.log('pressed')}>
                        </DraggableFormItem>
                    )
                })
            }
        </div>
    )
}

export default Sidebar
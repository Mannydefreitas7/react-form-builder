import React, { useContext } from 'react'
import { allFromFields } from '../helpers/form'
import { DraggableFormItem } from '../components/dnd';
import FormBuilderContext from '../stores/form-builder.store';
import { JSONFormData } from '../types/form.type';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <>
            <Accordion elevation={0} disableGutters>
                <AccordionSummary id="elements" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Elements</Typography>
                </AccordionSummary> 
                <AccordionDetails>
                    
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} disableGutters>
                <AccordionSummary id="inputs" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Inputs</Typography>
                </AccordionSummary> 
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>
        </>

    )
}

export default Sidebar
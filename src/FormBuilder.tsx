import React, { useEffect, useState } from 'react';
import FormBuilderContext, { initialValue } from './stores/form-builder.store';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import Layout from './layout';
import Main from './layout/Main';
import Sidebar from './layout/Sidebar';
import { JSONFormData } from './types/form.type';
import { addColumn, addRow } from './helpers/form';


function FormBuilder() {



  const [state, setState] = useState(initialValue);

  useEffect(() => {

    if (state.payload.length === 0) {
        const row: JSONFormData.Row = addRow(0)
        state.payload.push(row);
        setState({
            ...state,
            payload: state.payload,
        })
    }
   
  }, [state])


  const selectFormElement = (element: JSONFormData.Column | JSONFormData.Row | JSONFormData.FieldDataType) => {
        setState({
            ...state,
            selected: element,
        })
  }

  const handleOnAddRow = (row: JSONFormData.Row) => {
    const index = state.payload.findIndex(item => item.id === row.id);
    if (index >= 0) {
      const row = addRow(index + 1)
      state.payload.push(row);
        setState({
            ...state,
            payload: state.payload
        }) 
    }
  }

  const handleOnAddColumn = (row: JSONFormData.Row, side: string) => {

    const column = addColumn();

      state.payload.forEach(r => {
        if (r.id === row.id && r.columns.length < 3) {
            if (side === 'left') {
                r.columns = [
                    column,
                    ...r.columns
                ];
            } else {
                r.columns.push(column);
            }
        }
      })
        setState({
            ...state,
            payload: state.payload
        }) 

  }

  const handleOneStartDrag = (event: DragStartEvent) => {

    if (event.active && event.active.id && event.active.id.toString().includes('row')) {
        const row = event.active.data.current as JSONFormData.Row;
        const activeRow = state.payload.find(item => item.id === row.id)
        setState({
            ...state,
            activeRow
        }) 
    }
  }




  
  const handleOnEndDrag = ({over, active}: DragEndEvent) => {

        if (over && over.id && over.id.toString().includes('row') && (active.data.current && active.data.current.sortable)) {

            const oldIndex = state.payload.findIndex(item => item.id === active.id);
            const newIndex = state.payload.findIndex(item => item.id === over.id);

            const oldRow = state.payload[oldIndex];
            const newRow = state.payload[newIndex];
            state.payload[newIndex] = oldRow;
            state.payload[oldIndex] = newRow;

            setState({
                ...state,
                payload: state.payload,
            }) 

            return
        }

        if (over && over.data.current && over.data.current.accepts && over.data.current.accepts.includes('row')) {
            
            console.log(active)
            if (active.id && active.id.toLocaleString().includes('row')) {
                const row: JSONFormData.Row = addRow(state.payload.length)
                state.payload.push(row);
                setState({
                    ...state,
                    payload: state.payload,
                }) 
            return
            }
            
        }

        if (over && over.data.current && active.data.current && over.data.current.accepts.includes(active.data.current.type)) {
            
            const field = active.data.current as JSONFormData.FieldDataType;
            const column = over.id;
            const columns = state.payload.map(row => row.columns.map(col => col)).flat()

            state.payload.forEach(row => {
                row.columns.forEach(col => {
                    console.log(over, col)
                    if (over.id === col.id) {
                      
                        col.children.push(field)
                    }
                })
            })

            //console.log(state.payload)

            setState({
                ...state,
                payload: state.payload,
            }) 
           // console.log(field, column);
            //state.payload

        }
   

        // if (over && over.id === 'general' && (active.data.current && !active.data.current.sortable)) {
        //     const data = active.data.current as JSONFormData.FieldDataType;
        //     const row: JSONFormData.Row = addRow(data, state.payload.length)
        //     state.payload.push(row);
        //     setState({
        //         ...state,
        //         payload: state.payload,
        //     }) 
        //     return
        // }

        // if (event.over && event.over.data.current) {
            
        //     const fieldData: JSONFormData.FieldType = {
        //         id: v4(),
        //         index: 0,
        //         type: data.type,
        //         data: data
        //     }
        //     row.columns[0].children.push(fieldData);
        //     setForm({
        //         payload: [
        //             ...form.payload,
        //             row
        //         ]
        //     })
        //     return;
        // }



  }

  return (
    <FormBuilderContext.Provider value={{
        ...state,
        selectFormElement,
        handleOnAddRow,
        handleOnAddColumn,
    }}>
        <DndContext onDragStart={handleOneStartDrag} onDragEnd={handleOnEndDrag}>
            <Layout main={<Main />} sidebar={<Sidebar />} />
        </DndContext>
    </FormBuilderContext.Provider>

  )
}

export default FormBuilder;
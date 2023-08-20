import React, { FC, FunctionComponent } from 'react'
import { fieldTypes } from '../helpers/form'
import { JSONFormData } from '../types/form.type';

function DynamicComponent({name, data}:{name: string, data: JSONFormData.FieldDataType}) {

const Component = fieldTypes[name];
  return (
    <Component {...data} />
  )
}

export default DynamicComponent
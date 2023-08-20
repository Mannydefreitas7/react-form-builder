import { fieldTypeIcons } from '../helpers/form'


function DynamicIcon(props: { name: string }) {

const Component = fieldTypeIcons[props.name];
  return (
    <Component {...props} />
  )
}

export default DynamicIcon
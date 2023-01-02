import { PropType } from "vue"

export type InputType = 'text' | 'number'

export const inputProps = () => ({
  type: {type: String as PropType<InputType>, default: 'text'},
  placeholder: {type: String},
  password: {type: String, default: false},
  label: {type: String}
})

export default inputProps
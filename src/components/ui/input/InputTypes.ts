import { PropType } from "vue"

export type InputType = 'string' | 'number'

export const inputProps = () => ({
  type: {type: String as PropType<InputType>, default: 'string'},
  placeholder: {type: String},
  password: {type: String, default: false},
})
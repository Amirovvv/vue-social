import { PropType } from "vue"

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger'

export const buttonProps = () => ({
  type: {type: String as PropType<ButtonType>, default: 'default'},
})

export default buttonProps;
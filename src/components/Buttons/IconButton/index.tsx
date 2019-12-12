import * as React from 'react'
import MuiIconButton, {IconButtonProps} from '@material-ui/core/IconButton'

interface Props extends IconButtonProps {
  children?: React.ReactNode
}

const IconButton: React.FC<Props> = (props: Props) => {
  const {
    children
  } = props

  return (
    <MuiIconButton>
      {children}
    </MuiIconButton>
  )
}

export default IconButton

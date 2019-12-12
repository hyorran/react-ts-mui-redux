import * as React from 'react'
import MuiAppBar, { AppBarProps } from '@material-ui/core/AppBar'
import MuiToolBar from '@material-ui/core/Toolbar'
import MuiMenuIcon from '@material-ui/icons/Menu'
import IconButton from 'components/Buttons/IconButton'

interface Props extends AppBarProps {
  title?: string
}

const AppBar: React.FC<Props> = (props: Props) => {
  const {
    title
  } = props
  return (
    <MuiAppBar>
      <MuiToolBar>
        <IconButton
          edge="start"
          aria-label="menu"
        >
          <MuiMenuIcon />
        </IconButton>
        <h1>{title}</h1>
      </MuiToolBar>
    </MuiAppBar>
  )
}

export default AppBar

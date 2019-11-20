import React from 'react'
import RouterSwitch from '../../components/RouterSwitch'
import withLayout from '../../layouts'
import get from 'lodash/get'
import routes from '../../routes/guest'

const GuestScreenRouter = (props: object) => <RouterSwitch escapeTo={get(props, 'espaceTo')} routes={ routes } { ...props } />

export default withLayout('guest')(GuestScreenRouter)

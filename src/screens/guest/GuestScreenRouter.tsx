import React from 'react'
import get from 'lodash/get'
import RouterSwitch from '../../components/RouterSwitch/Index'
import withLayout from '../../layouts/Index'
import routes from '../../routes/Guest'

const GuestScreenRouter: React.FC = (props: object) => <RouterSwitch escapeTo={get(props, 'espaceTo')} routes={ routes } { ...props } />

export default withLayout('guest')(GuestScreenRouter)

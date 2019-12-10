import React from 'react'
import get from 'lodash/get'
import RouterSwitch from '../../components/RouterSwitch'
import withLayout from '../../layouts'
import routes from '../../routes/guest'

// eslint-disable-next-line react/jsx-props-no-spreading
const GuestScreenRouter: React.FC = (props: object) => <RouterSwitch escapeTo={get(props, 'escapeTo')} routes={ routes } { ...props } />

export default withLayout('guest')(GuestScreenRouter)

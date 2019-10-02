import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/userForm/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
export const NotRegisteredUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) =>
                <RegisterMutation>
                    {
                        (register) => {
                            const onSubmit = ({ email, password }) => {
                                const input = { email, password }
                                const variables = { input }
                                register({ variables })
                                    .then(() => {
                                        activateAuth()
                                    })
                            }
                            return <UserForm
                                onSubmit={onSubmit}
                                title='Registrarse' />
                        }
                    }

                </RegisterMutation>
        }
    </Context.Consumer>
)
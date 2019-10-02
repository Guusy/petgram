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
                        (register, { data, loading, error }) => {
                            const onSubmit = ({ email, password }) => {
                                const input = { email, password }
                                const variables = { input }
                                register({ variables })
                                    .then(() => {
                                        activateAuth()
                                    })
                            }
                            const errorMsg = error && 'El usuario ya existe o hay algun problema'

                            return <UserForm
                                disabled={loading}
                                error={errorMsg}
                                onSubmit={onSubmit}
                                title='Registrarse' />
                        }
                    }

                </RegisterMutation>
        }
    </Context.Consumer>
)
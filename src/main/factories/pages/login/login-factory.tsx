// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Login } from '@/presentation/pages'
import React from 'react'
import { makeRemoteAuthentication } from '../../usecases/authentication/remote-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login validation={makeLoginValidation()} authentication={makeRemoteAuthentication()} />
  )
}

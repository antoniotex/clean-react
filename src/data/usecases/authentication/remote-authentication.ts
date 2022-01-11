import { InvalidCredencialsError } from './../../../domain/errors/invalid-credencials-error'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Authentication, AuthenticationParams } from '@/domain/usecases/authentication'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AccountModel } from '@/domain/models/account-model'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredencialsError()
      default:
        throw new UnexpectedError()
    }
  }
}

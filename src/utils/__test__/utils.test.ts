import { describe, expect, it } from 'vitest'
import { isAxiosError, isAxiosUnprocessableEntityError } from '../utils'
import { AxiosError } from 'axios'
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum'

describe('isAxiosError', () => {
  it('Kiểm tra xem có phải lỗi từ Axios không', () => {
    expect(isAxiosError(new Error())).toBe(false)
    expect(isAxiosError(new AxiosError())).toBe(true)
  })
})

describe('isAxiosUnprocessableEntityError', () => {
  it('Kiểm tra xem có phải lỗi UnprocessableEntityError từ Axios không', () => {
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.UnprocessableEntity,
          data: null
        } as any)
      )
    ).toBe(true)
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.InternalServerError,
          data: {}
        } as any)
      )
    ).toBe(false)
  })
})

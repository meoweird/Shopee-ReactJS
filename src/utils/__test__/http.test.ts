import { beforeEach, describe, expect, it } from 'vitest'
import { Http } from '../http'
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum'
import { setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

describe('Call API', () => {
  let http = new Http().instance
  beforeEach(() => {
    http = new Http().instance
    localStorage.clear()
  })
  const access_token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xNVQxNDowMzoyMy41NzdaIiwiaWF0IjoxNjcxMTEzMDAzLCJleHAiOjE2NzExMTMwMDR9.-gQIpbbKFlRqBlpiiAOBD4puP8jcMtZ2lobXPcy1zmU'
  const refresh_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xNVQxNDowNTozNS41MTVaIiwiaWF0IjoxNjcxMTEzMTM1LCJleHAiOjE3NTc1MTMxMzV9.OHDBqBjhih1fgNe6-mWo0PQ-IcukNz4ljlXUCxM-8V8'

  it('Call Product API', async () => {
    const res = await http.get('/products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Auth Request', async () => {
    await http.post('/login', {
      email: 'd7@gmail.com',
      password: '123123'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Refresh Token', async () => {
    setAccessTokenToLS(access_token)
    setRefreshTokenToLS(refresh_token)
    const httpNew = new Http().instance
    const res = await httpNew.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})

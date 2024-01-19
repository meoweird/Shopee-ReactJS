import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http } from 'msw'
import config from './src/constants/config'
import HttpStatusCode from './src/constants/httpStatusCode.enum'
const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjRkZTUxMWFmYzJlMWExZjk2Yjk5ZiIsImVtYWlsIjoidGhhbmhAbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAxLTE5VDAzOjI3OjUyLjc3MFoiLCJpYXQiOjE3MDU2MzQ4NzIsImV4cCI6MTcwNjIzOTY3Mn0.c329sGNmtn-ELSwDr4ewLD4GkOb-CJdaL7UB1Z_iCoc',
    expires: 604800,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjRkZTUxMWFmYzJlMWExZjk2Yjk5ZiIsImVtYWlsIjoidGhhbmhAbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAxLTE5VDAzOjI3OjUyLjc3MFoiLCJpYXQiOjE3MDU2MzQ4NzIsImV4cCI6MTcxNDI3NDg3Mn0.0BLrMjAF0ZDz65l_T2kjihOP20vf5_5sVaFVPpzbHPA',
    expires_refresh_token: 8640000,
    user: {
      _id: '64b4de511afc2e1a1f96b99f',
      roles: ['User'],
      email: 'thanh@mail.com',
      createdAt: '2023-07-17T06:23:13.660Z',
      updatedAt: '2023-08-11T07:00:03.255Z',
      __v: 0,
      date_of_birth: '2023-01-07T17:00:00.000Z',
      address: 'No',
      name: 'Thanh',
      phone: '0123456789',
      avatar: 'f68913bb-9f47-4ded-9f12-910f1192ffd2.jpg'
    }
  }
}

// export const restHandlers = [
//   http.post(`${config.baseURL}login`, (req, res, ctx) => {
//     return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes))
//   })
// ]

const server = setupServer(
  http.post(`${config.baseURL}login`, (req, res, ctx) => {
    return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes))
  })
)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

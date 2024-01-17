import { describe, expect, test } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import { logScreen, renderWithRouter } from './utils/testUtils'
import path from './constants/path'

expect.extend(matchers)

describe('App', () => {
  test('App render và chuyển trang', async () => {
    const { user } = renderWithRouter()

    await waitFor(() => {
      expect(document.querySelector('title')?.textContent).toBe('Trang chủ | Shopee Clone')
    })

    await user.click(screen.getByText(/Đăng nhập/i))
    await waitFor(() => {
      expect(screen.findByText('Bạn chưa có tài khoản?')).toBeTruthy()
      expect(document.querySelector('title')?.textContent).toBe('Đăng nhập | Shopee Clone')
    })
  })

  test('Render trang register', async () => {
    renderWithRouter({ route: path.register })
    await waitFor(() => {
      expect(screen.findByText(/Bạn đã có tài khoản?/i)).toBeTruthy()
    })
    // await logScreen()
  })
  test('Về trang not found', async () => {
    const badRoute = '/some/bad/route'
    renderWithRouter({ route: badRoute })
    await waitFor(() => {
      expect(screen.queryByText(/Page not found/i)).toBeTruthy()
    })
  })
})

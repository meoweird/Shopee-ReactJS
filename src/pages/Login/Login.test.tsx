import { screen, waitFor, fireEvent } from '@testing-library/react'
import path from 'src/constants/path'
import { logScreen, renderWithRouter } from 'src/utils/testUtils'
import { beforeAll, describe, expect, it } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

describe('Login', () => {
  beforeAll(async () => {
    renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeTruthy()
    })
  })
  it('Hiển thị lỗi required khi không nhập gì', async () => {
    const submitButton = document.querySelector('form button[type="submit"]') as Element
    fireEvent.submit(submitButton)
    await waitFor(async () => {
      expect(await screen.findByText('Email là bắt buộc')).toBeTruthy()
      expect(await screen.findByText('Password là bắt buộc')).toBeTruthy()
    })
  })
  it('Hiển thị lỗi required khi không nhập gì', async () => {
    const emailInput = document.querySelector('form input[type="email"]') as HTMLInputElement
    const passwordInput = document.querySelector('form input[type="password"]') as HTMLInputElement
    const submitButton = document.querySelector('form button[type="submit"]') as HTMLButtonElement
    fireEvent.change(emailInput, {
      target: {
        value: 'test@mail'
      }
    })
    fireEvent.change(passwordInput, {
      target: {
        value: '123'
      }
    })
    fireEvent.submit(submitButton)
    await waitFor(() => {
      expect(screen.queryByText('Email không đúng định dạng')).toBeTruthy()
      expect(screen.queryByText('Độ dài từ 6 - 160 ký tự')).toBeTruthy()
    })
    // await logScreen()
  })
})

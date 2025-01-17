import { screen, waitFor, fireEvent, cleanup } from '@testing-library/react'
import path from 'src/constants/path'
import { logScreen, renderWithRouter } from 'src/utils/testUtils'
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
expect.extend(matchers)

describe('Login', () => {
  let emailInput: HTMLInputElement
  let passwordInput: HTMLInputElement
  let submitButton: HTMLButtonElement
  beforeEach(async () => {
    renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })
    emailInput = document.querySelector('form input[type="email"]') as HTMLInputElement
    passwordInput = document.querySelector('form input[type="password"]') as HTMLInputElement
    submitButton = document.querySelector('form button[type="submit"]') as HTMLButtonElement
  })
  afterEach(() => {
    cleanup()
  })
  it('Hiển thị lỗi required khi không nhập gì', async () => {
    const submitButton = document.querySelector('form button[type="submit"]') as HTMLButtonElement
    // console.log(submitButton)
    fireEvent.submit(submitButton)
    await waitFor(async () => {
      expect(await screen.findByText('Email là bắt buộc')).toBeTruthy()
      expect(await screen.findByText('Password là bắt buộc')).toBeTruthy()
    })
  })
  it('Hiển thị validate form', async () => {
    fireEvent.change(emailInput, {
      target: {
        value: 'dong'
      }
    })
    fireEvent.change(passwordInput, {
      target: {
        value: '123'
      }
    })
    fireEvent.submit(submitButton)
    expect(await screen.findByText(/Email không đúng định dạng/i)).toBeTruthy()
    expect(await screen.findByText(/Độ dài từ 6 - 160 ký tự/i)).toBeTruthy()
    // await logScreen()
  })
  it('Không nên hiển thị lỗi khi nhập lại value đúng', async () => {
    fireEvent.change(emailInput, {
      target: {
        value: 'test@mail.com'
      }
    })
    fireEvent.change(passwordInput, {
      target: {
        value: '123456'
      }
    })
    await waitFor(() => {
      expect(screen.queryByText('Email không đúng định dạng')).toBeFalsy()
      expect(screen.queryByText('Độ dài từ 6 - 160 ký tự')).toBeFalsy()
    })
    fireEvent.submit(submitButton)
    await logScreen()
    // await waitFor(() => {
    //   expect(document.querySelector('title')?.textContent).toBe('Trang chủ | Shopee Clone')
    // })
    // console.log(await screen.findByText('Email không đúng định dạng'))
  })
})

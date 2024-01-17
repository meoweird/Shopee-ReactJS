import path from 'src/constants/path'
import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const authApi = {
  registerAccount: (body: { email: string; password: string }) => http.post<AuthResponse>(path.register, body),
  loginAccount: (body: { email: string; password: string }) => http.post<AuthResponse>(path.login, body),
  logoutAccount: () => http.post(path.logout)
}

export default authApi

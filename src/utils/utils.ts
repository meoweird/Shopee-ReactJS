import axios, { AxiosError } from 'axios'
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum'
import userImage from 'src/assets/images/user.svg'
import config from 'src/constants/config'
import { ErrorResponse } from 'src/types/utils.type'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export function isAxiosUnauthorizedError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized
}

export function isAxiosExpiredTokenError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return (
    isAxiosUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error) &&
    error.response?.data?.data?.name === 'EXPIRED_TOKEN'
  )
}

export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('de-DE').format(currency)
}

export const formatNumberToSocialStyle = (value: number) => {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}

export const rateSale = (original: number, sale: number) => Math.round(((original - sale) / original) * 100) + '%'

const removeSpecialCharacter = (str: string) =>
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i-')
  return arr[arr.length - 1]
}

export const getAvatarUrl = (avatarName?: string) => (avatarName ? `${config.baseURL}images/${avatarName}` : userImage)

import { randomId } from '../../utils/string'
import { TOASTS_ADD_TOAST, TOASTS_DISMISS_TOAST } from './constants'
import { ToastType } from './types'

export interface AddToastsProps {
  id?: string
  type: ToastType
  title?: string
  description?: string
  autoDismiss?: boolean
  stayDuration?: number
}

export function addToast({
  id,
  autoDismiss = true,
  stayDuration = 5000,
  ...rest
}: AddToastsProps) {
  return {
    type: TOASTS_ADD_TOAST,
    payload: {
      ...rest,
      autoDismiss: autoDismiss,
      stayDuration: stayDuration,
      id: id || randomId()
    }
  }
}

export function dismissToast(id: string) {
  return {
    type: TOASTS_DISMISS_TOAST,
    payload: { id }
  }
}

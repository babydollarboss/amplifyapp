export enum ToastType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

export interface IToastsState {
  toasts: IToast[]
}

export interface IToast {
  id: string
  type: ToastType
  title?: string
  description?: string
  hidden?: boolean
  autoDismiss?: boolean
  stayDuration?: number
}

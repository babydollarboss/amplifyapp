import createReducer from '../../utils/create-reducer'
import { IToastsState, IToast } from './types'
import { TOASTS_ADD_TOAST, TOASTS_DISMISS_TOAST } from './constants'
import { AddToastsProps } from './actions'

export const initialStates = {
  toasts: []
}

export default createReducer(initialStates, {
  [TOASTS_ADD_TOAST]: (state: IToastsState, toast: AddToastsProps) => ({
    ...state,
    toasts: [...state.toasts, toast]
  }),

  [TOASTS_DISMISS_TOAST]: (state: IToastsState, { id }: { id: string }) => ({
    toasts: [...state.toasts].reduce((acc, curr) => {
      return id === curr.id ? acc : [...acc, curr]
    }, [] as IToast[])
  })
})

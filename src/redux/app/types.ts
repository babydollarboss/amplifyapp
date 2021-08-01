export interface IAppState {
  showReloadOption: boolean
  showWhatsNew: boolean
  latestVersion: string
  settings?: IAppSettingsRes
  deferredAppInstallPrompt?: Event
  showAppInstallOption: boolean
}

export interface IAppSettingsRes {
  apiKey: boolean
}

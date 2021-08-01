const pwaHandler = (
  store: any,
  customUIInstallAction: Function,
  customUIHideInstallAction: Function
) => {
  // Listen to beforeinstallpropmpt event for pwa
  let deferredPrompt: any

  window.addEventListener('beforeinstallprompt', e => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault()
    // Stash the event so it can be triggered later.
    deferredPrompt = e
    // Update UI notify the user they can install the PWA
    // dispatch action here to show custom UI
    store.dispatch(customUIInstallAction(deferredPrompt))
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`)
  })

  window.addEventListener('appinstalled', () => {
    // Hide the app-provided install promotion
    store.dispatch(customUIHideInstallAction())
    // Clear the deferredPrompt so it can be garbage collected
    deferredPrompt = null
    // Optionally, send analytics event to indicate successful install
    console.log('PWA was installed')
  })
}

export default pwaHandler

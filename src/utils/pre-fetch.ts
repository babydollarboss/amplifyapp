export function getFetchUploadOpts(
  file: any,
  fileFieldName = 'theFile',
  body = null,
  token = ''
) {
  let base: any = {
    method: 'post',
    headers: {
      Accept: 'application/json'
    }
  }

  if (token) {
    base.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  const formData = new FormData()

  if (Array.isArray(file)) {
    file.forEach(f => {
      formData.append(fileFieldName, f)
    })
  } else {
    formData.append(fileFieldName, file)
  }

  if (body) formData.append('jsonBody', JSON.stringify(body))

  base = { ...base, body: formData }

  return base
}

export function getFetchOpts(method = 'get', body = {}, token = '') {
  let base: any = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (token) {
    base.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
      // credentials: 'include',
    }
  }

  if (['post', 'put', 'delete', 'patch'].indexOf(method) !== -1) {
    base = { ...base, body: JSON.stringify(body) }
  }

  return base
}

export function getFetchUrlEncodedOptions(
  method = 'post',
  body: any,
  token = ''
) {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
  let base: any = {
    method,
    headers: myHeaders
  }

  if (token) {
    myHeaders.append('Authorization', `Bearer ${token}`)
  }

  const urlencoded = new URLSearchParams()
  const keys = Object.keys(body)
  keys.forEach(key => {
    urlencoded.append(key, body[key])
  })

  if (['post', 'put', 'delete'].indexOf(method) !== -1) {
    base = { ...base, body: urlencoded }
  }

  return base
}

export function processUrl(url: string, query = {}) {
  const keys = Object.keys(query)
  if (keys.length) {
    const { searchParams, pathname, origin } = new URL(url)
    keys.forEach(k => {
      searchParams.set(k, query[k])
    })
    return `${origin}${pathname}?${searchParams.toString()}`
  } else {
    return url
  }
}

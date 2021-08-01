export function parseTextResponse(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response.text().then((t: any) => t)
  }

  if (response.status === 401) {
    throw new Error('Failed to authenticate.')
  }

  throw new Error('API call failed')
}

export function parseJsonResponse(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  }

  return response
    .json()
    .then((jsonText: { message: string; error_description?: string }) => {
      throw new Error(
        jsonText.message || jsonText.error_description || 'API call failed'
      )
    })
}

export function parseBlobResponse(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response.blob()
  }

  throw new Error('API call failed')
}

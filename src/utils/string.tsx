import React from 'react'

export const randomId = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

export const shortenFileName = (fileName: string) => {
  return fileName
    ? decodeURIComponent(fileName.replace('.spj2', '').replace('.spj', ''))
    : ''
}

export const splitNewlineStrings = (text: string, returnArray?: boolean) => {
  if (typeof text !== 'string') return ['']
  const textRows = text.split('\n')
  if (returnArray) {
    return textRows
  }
  return (
    <React.Fragment>
      {textRows.map((t: string, index: number) => (
        <div key={`${t}-${index}`}>{t}</div>
      ))}
    </React.Fragment>
  )
}

export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
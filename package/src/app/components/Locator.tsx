'use client'

import { ClickToComponent } from 'click-to-react-component'

export default function Locator() {
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return <ClickToComponent />
}

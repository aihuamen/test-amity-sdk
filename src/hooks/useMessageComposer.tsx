import { createMessage, createQuery, runQuery } from "@amityco/ts-sdk"
import React, { useState } from "react"

export const useMessageComposer = (
  channelId: string, 
  msgRef: React.RefObject<HTMLUListElement>
) => {
  const [message, setMessage] = useState('')

  const handleChange = (
    e: 
      | React.ChangeEvent<HTMLTextAreaElement 
      | HTMLInputElement>
  ) => {
    setMessage(e.target.value)
  }

  const handleSend = (
    e: 
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if(message === "") return

    const q = createQuery(createMessage, {
      channelId,
      type: 'text',
      data: {
        text: message
      }
    })
    runQuery(q, res => {
      console.log(res)
      setMessage('')
      msgRef.current?.scrollTo({
        top: msgRef.current.scrollHeight,
        behavior: 'smooth'
      })
    })
  }

  return {message, handleChange, handleSend}
}
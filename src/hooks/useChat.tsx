import { createQuery, joinChannel, observeChannel, observeMessages, queryMessages, runQuery } from "@amityco/ts-sdk"
import { useEffect, useRef, useState } from "react"

export const useChat = (channelId: string) => {
  const [messages, setMessages] = useState<Amity.Message[]>([])
  const [channel, setChannel] = useState<Amity.Channel>()
  const msgRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const m = createQuery(queryMessages, {channelId})
    const join = createQuery(joinChannel, channelId)
    runQuery(join, res => {
      if(res.error) {
        console.error(res.error)
        return
      }
    })
    runQuery(m, res => {
      if(res.error) {
        console.log(res.error)
        return
      }
      console.log(res)
      const msg = Object.values(res.data!) 
      setMessages(msg)
    })
    observeChannel(channelId, ch => {
      if(ch.error) {
        console.error(ch.error)
        return
      }
      if(ch.loading) {
        return
      }
      setChannel(ch.data!)
    })
    observeMessages(channelId, ms => {
      setMessages(msgs => [...msgs, ms])
      msgRef.current?.scrollTo({
        top: msgRef.current.scrollHeight,
        behavior: 'smooth'
      })
    })
  }, [])

  return {channel, messages, msgRef}
}
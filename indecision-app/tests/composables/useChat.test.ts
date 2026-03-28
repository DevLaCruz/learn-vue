import { useChat } from '@/composables/useChat'
import { describe, test, expect } from 'vitest'

describe('useChat', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'hello'
    const { messages, onMessage } = useChat()

    await onMessage(text)

    expect(messages.value.length).toBe(1)
    expect(messages.value[0].itsMine).toBe(true)
    expect(messages.value[0].message).toBe(text) // Cambiar `true` por `text`
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    })
  })
})

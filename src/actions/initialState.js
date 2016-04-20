export default {
  application: {
    mode: 'channels' // messages
  },
  channels: {
    list: [
      { id: 1, title: 'title', private: true },
      { id: 2, title: 'title2', private: false },
      { id: 3, title: 'title2', private: false }
    ]
  },
  messages: {
    channel: { title: 'title', private: true, id: 1 },
    list: [
      { id: 1, text: 'text' }
    ]
  },
  subscriptions: [3]
}

import { useState, useRef, useEffect } from 'react'

interface Message {
    role: 'user' | 'assistant',
    content: string,
}

export default function Chatbot() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const messagesEnd = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const send = async () => {
        const question = input.trim()
        if (!question || loading) return

        setInput('')
        setMessages(prev => [...prev, { role: 'user', content: question }])
        setLoading(true)

        try {
            const res = await fetch('/api/question', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: question,
            })
            const data = await res.json()
            const answer = data?.response
            setMessages(prev => [...prev, { role: 'assistant', content: answer }])
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {/* Floating trigger button */}
            <button
                id="chatbot-toggle"
                onClick={() => setOpen(prev => !prev)}
                aria-label="Open chatbot"
                className={`fixed z-50 bottom-6 right-6 size-14 rounded-full cursor-pointer
                    flex items-center justify-center shadow-lg
                    bg-gradient-to-br from-[#3b71ff] to-[#1da5ff]
                    hover:scale-110 active:scale-95 transition-all duration-200
                    ${!open ? 'animate-[pulse_3s_ease-in-out_infinite]' : ''}`}
            >
                {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </button>

            {/* Chat panel */}
            <div className={`fixed z-50 bottom-24 right-6 w-[calc(100vw-3rem)] sm:w-[22rem] max-h-[32rem] rounded-2xl
                flex flex-col overflow-hidden
                border-2 transition-all duration-300 origin-bottom-right
                dark:bg-black/60 dark:border-dark-blue dark:backdrop-blur-xl
                bg-white/80 border-gray-300 backdrop-blur-xl
                shadow-2xl
                ${open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}`}
            >
                {/* Header */}
                <div className="px-4 py-3 border-b dark:border-dark-blue border-gray-300
                    bg-gradient-to-r from-[#3b71ff] to-[#1da5ff] text-white">
                    <p className="font-bold text-base tracking-wide">Chat with Emmanuel's AI</p>
                    <p className="text-xs opacity-80">Powered by RAG &middot; Ask anything about me</p>
                </div>

                {/* Messages area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[14rem] no-scrollbar">
                    {messages.length === 0 && (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-sm dark:text-gray-500 text-gray-400 italic">
                                No messages yet — ask away!
                            </p>
                        </div>
                    )}

                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed
                                ${msg.role === 'user'
                                    ? 'bg-gradient-to-br from-[#3b71ff] to-[#1da5ff] text-white rounded-br-sm'
                                    : 'dark:bg-white/10 bg-gray-200/80 dark:text-gray-200 text-gray-800 rounded-bl-sm'
                                }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex justify-start">
                            <div className="dark:bg-white/10 bg-gray-200/80 px-4 py-2 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                                <span className="size-2 rounded-full bg-gradient-to-br from-[#3b71ff] to-[#1da5ff] animate-bounce [animation-delay:0ms]" />
                                <span className="size-2 rounded-full bg-gradient-to-br from-[#3b71ff] to-[#1da5ff] animate-bounce [animation-delay:150ms]" />
                                <span className="size-2 rounded-full bg-gradient-to-br from-[#3b71ff] to-[#1da5ff] animate-bounce [animation-delay:300ms]" />
                            </div>
                        </div>
                    )}

                    <div ref={messagesEnd} />
                </div>

                {/* Input area */}
                <form
                    onSubmit={e => { e.preventDefault(); send() }}
                    className="flex items-center gap-2 p-3 border-t dark:border-dark-blue border-gray-300"
                >
                    <input
                        id="chatbot-input"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Ask me interview questions"
                        disabled={loading}
                        className="flex-1 px-3 py-2 rounded-xl text-sm outline-none
                            dark:bg-white/10 dark:text-white dark:placeholder-gray-500
                            bg-gray-100 text-gray-900 placeholder-gray-400
                            focus:ring-2 focus:ring-[#3b71ff]/50 transition-all"
                    />
                    <button
                        id="chatbot-send"
                        type="submit"
                        disabled={loading || !input.trim()}
                        aria-label="Send message"
                        className="size-9 rounded-xl flex items-center justify-center cursor-pointer
                            bg-gradient-to-br from-[#3b71ff] to-[#1da5ff]
                            hover:scale-105 active:scale-95 transition-all
                            disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}

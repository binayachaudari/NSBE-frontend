import { useState, useRef } from "react"
import Navbar from "./Navbar"

const Tennant = () => {
    const [userText, setUserText] = useState('')


    const [chatHistory, setChatHistory] = useState(["Hello there, Welcome to EasyLease Interactive Portal.Please, put forward your queries and we will try to answer it for you."])

    const onTextChange = (e) => {
        setUserText(e.target.value)
    }

    const chatBoxRef = useRef(null)

    const [isLoading, setIsLoading] = useState(false)

    const onSendBtnClick = async () => {
        if (userText === '') {
            return
        }
        setIsLoading(true)

        setChatHistory([...chatHistory, userText])
        setUserText('')
        await fetchResponse()
        setIsLoading(false)
    }

    // fetchResponse

    // METHOD: POST

    // URL: https://nsbe-backend.onrender.com/chat/

    // CONTENT - TYPE: application / json

    // PAYLOAD:

    // {
    // "message": userText
    // }

    const fetchResponse = async () => {
        const response = await fetch('https://nsbe-backend.onrender.com/chat/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: userText
            })
        })

        const data = await response.json()
        console.log("Data response", data)
        setChatHistory([...chatHistory, data.text])
    }

    return (<>
        <Navbar />
        {/* tailwind 2 column grid */}

        <div className="grid grid-cols-2 gap-4 p-10">

            <div ref={chatBoxRef} id="chat-container" className="w-full">
                <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                    <div className="p-4 border-b bg-yellow-600 text-white rounded-t-lg flex justify-around">
                        <p className="text-lg font-semibold">EasyLease</p>
                    </div>
                    <div id="chatbox" className="p-4 h-96 overflow-y-auto">
                        {/* <div className="mb-2 text-right">
                        <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">hello</p>
                    </div> */}
                        {/* chat history first index baground is white second is blue */}

                        {chatHistory.map((chat, index) => {

                            // bg-yellow-600 for sent message and on the right side, bg-white for received message and on the left side
                            if (index % 2 !== 0) {
                                return <div key={index} className="mb-2 text-right">
                                    <p className="bg-yellow-600 text-white rounded-lg py-2 px-4 inline-block">{chat}</p>
                                </div>
                            } else {
                                return <div key={index} className="mb-2 text-left">
                                    <p className="bg-white text-gray-800 rounded-lg py-2 px-4 inline-block">{chat}</p>
                                </div>
                            }

                        })}

                    </div>
                    <div className="p-4 border-t flex">
                        <input
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSendBtnClick()
                                }
                            }
                            }
                            value={userText} onChange={onTextChange} id="user-input" type="text" placeholder="Type a message" className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button disabled={isLoading} onClick={onSendBtnClick} id="send-button" className="bg-yellow-600 text-white px-4 py-2 rounded-r-md hover:bg-yellow-800 transition duration-300">Send</button>
                    </div>
                </div>
            </div>
            {/* <!-- Container for demo purpose --> */}

            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button onClick={
                        () => {
                            const target = document.getElementById('accordion-collapse-body-1')
                            target.classList.toggle('hidden')
                        }
                    } type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>Is there really a crisis for housing in Canada?</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aliquam maxime voluptates dolore harum, sed ut quasi earum minus, soluta, necessitatibus beatae at! Nemo laborum voluptas inventore perspiciatis est quia.</p>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                    <button onClick={
                        () => {
                            const target = document.getElementById('accordion-collapse-body-2')
                            target.classList.toggle('hidden')

                        }
                    } type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                        <span>How difficult is it to find a affordable housing?</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut dicta, asperiores, at aliquam, praesentium nemo quae voluptatibus maxime ipsum non eum dolorum pariatur tenetur?</p>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                    <button onClick={
                        () => {
                            const target = document.getElementById('accordion-collapse-body-3')
                            target.classList.toggle('hidden')
                        }
                    } type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                        <span>What is the average size of house in Canada?</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque mollitia veniam modi, error commodi, non ad iusto, aspernatur deleniti dicta consequuntur exercitationem dignissimos temporibus!</p>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}

export default Tennant
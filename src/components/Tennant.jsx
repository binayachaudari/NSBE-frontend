import { useState, useRef } from 'react';
import Navbar from './Navbar';
import { fetchResponse } from '../services/chat.service';
import { useMutation } from 'react-query';

const Tennant = () => {
  const [userText, setUserText] = useState('');

  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', text: 'Ask me anything!' },
  ]);

  const onTextChange = (e) => {
    setUserText(e.target.value);
  };

  const chatBoxRef = useRef(null);

  const { mutate, isLoading } = useMutation('chat', fetchResponse, {
    enabled: false,
    onSuccess: (data) => {
      setChatHistory([...chatHistory, { type: 'bot', text: data.text }]);
    },
  });

  const onSendBtnClick = async () => {
    if (userText === '') {
      return;
    }
    mutate(userText);
    setChatHistory([...chatHistory, { type: 'user', text: userText }]);
    setUserText('');
  };

  return (
    <>
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
                if (chat?.type === 'user') {
                  return (
                    <div key={index} className="mb-2 text-right">
                      <p className="bg-yellow-600 text-white rounded-lg py-2 px-4 inline-block">
                        {chat.text}
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="mb-2 text-left">
                      <p className="bg-white text-gray-800 rounded-lg py-2 px-4 inline-block">
                        {chat.text}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <div className="p-4 border-t flex">
              <input
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onSendBtnClick();
                  }
                }}
                value={userText}
                onChange={onTextChange}
                disabled={isLoading}
                id="user-input"
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                disabled={isLoading}
                onClick={onSendBtnClick}
                id="send-button"
                className="bg-yellow-600 text-white px-4 py-2 rounded-r-md hover:bg-yellow-800 transition duration-300 ml-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Container for demo purpose --> */}

        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              onClick={() => {
                const target = document.getElementById(
                  'accordion-collapse-body-1'
                );
                target.classList.toggle('hidden');
              }}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>What are my rights as a tenant in Canada?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Tenants often seek clarification on their rights regarding rent
                increases, lease agreements, maintenance responsibilities,
                privacy rights, and eviction procedures under Canadian tenancy
                laws.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button
              onClick={() => {
                const target = document.getElementById(
                  'accordion-collapse-body-2'
                );
                target.classList.toggle('hidden');
              }}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span>Can I claim a tax refund on the rent I've paid?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Tenants may inquire about the possibility of claiming tax
                refunds or credits on the rent they've paid, especially if
                they're eligible for certain housing-related tax benefits or
                deductions.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button
              onClick={() => {
                const target = document.getElementById(
                  'accordion-collapse-body-3'
                );
                target.classList.toggle('hidden');
              }}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span>Can I live with my pets?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Landlords have the right to refuse tenants if they suspect they
                will move in with pets. However, once a landlord accepts a
                tenant, in spite of any verbal agreements or contract
                stipulations, landlords cannot evict tenants for pet ownership
                under most circumstances.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-4">
            <button
              onClick={() => {
                const target = document.getElementById(
                  'accordion-collapse-body-4'
                );
                target.classList.toggle('hidden');
              }}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-4"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-4"
            >
              <span>Can my landlord evict me without any reason?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                There is a legal process under the{' '}
                <a
                  target="_blank"
                  href="https://www.ontario.ca/laws/statute/06r17"
                >
                  Residential Tenancies Act{' '}
                </a>
                which a landlord must follow in order to evict a tenant. There
                are many points in this process at which a tenant can try to fix
                the situation and/or pay arrears and have the eviction stopped.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-5">
            <button
              onClick={() => {
                const target = document.getElementById(
                  'accordion-collapse-body-5'
                );
                target.classList.toggle('hidden');
              }}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-5"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-5"
            >
              <span>
                What if my landlord increases my rent fee unexpectedly?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-5"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-5"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The landlord is allowed to raise the rent by a guideline amount
                once per year. This can happen 12 months after:
                <ul>
                  <li>a tenant first moves in, or</li>
                  <li>the last rent increase</li>
                </ul>
                The annual rent increase guideline amount is set by the Ontario
                government every year (e.g., between January 1 and December 31,
                2020, rent increases up to 2.2 per cent may be applied).The
                landlord must provide the tenant with written notice of a rent
                increase at least 90 days before it takes effect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tennant;

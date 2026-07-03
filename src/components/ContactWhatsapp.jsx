    import React, { useState } from "react";

    const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = "919819832060"; // replace with your number
    const defaultMessage = "Need enquiry";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        defaultMessage
    )}`;

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">

        {/* 💬 Chat Box */}
        {isOpen && (
            <div className="w-72 sm:w-80 bg-white rounded-xl shadow-xl mb-3 overflow-hidden animate-fadeIn">
            
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
                <h3 className="font-semibold">Chat with us</h3>
                <p className="text-xs">We typically reply within minutes</p>
            </div>

            {/* Message Area */}
            <div className="p-4 bg-gray-100">
                <div className="bg-white p-3 rounded-lg shadow text-sm">
                👋 Hi there! <br />
                Need help? Click below to start chat on WhatsApp.
                </div>
            </div>

            {/* Action Button */}
            <div className="p-4">
            <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-orange-400 hover:bg-[#E5A31D] text-white font-semibold py-2 rounded-lg transition"
                >
                Start Chat
                </a>
            </div>
            </div>
        )}

        {/* 🟢 Floating Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
            {isOpen ? (
            <span className="text-white text-xl"><i class="fa-regular fa-xmark"></i></span>
            ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-6 h-6 fill-white"
            >
                <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.646.86 5.09 2.316 7.074L4 29l7.14-2.27A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.628 3 16 3zm0 21.8a9.74 9.74 0 01-4.96-1.36l-.35-.21-4.24 1.35 1.38-4.13-.23-.37A9.74 9.74 0 016.2 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8zm5.3-7.3c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.78-1.45-1.75-1.62-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.19 2.07 3.17 5.02 4.44.7.3 1.25.48 1.67.62.7.22 1.33.19 1.83.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.1-.26-.17-.55-.32z" />
            </svg>
            )}
        </button>
        </div>
    );
    };

    export default WhatsAppChat;
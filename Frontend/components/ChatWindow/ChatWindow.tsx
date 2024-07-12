import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatWindow: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4">
            {!isOpen && (
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={toggleChat}
                >
                    Open Chat
                </button>
            )}
            {isOpen && (
                <div className="bg-black border border-gray-300 rounded-lg shadow-lg p-4 mt-2 w-80 h-96">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white">Chat with us</h3>
                        <button
                            className="text-white hover:text-gray-600"
                            onClick={toggleChat}
                        >
                            X
                        </button>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="flex-1 overflow-y-auto text-white">
                            {/* Chat messages go here */}
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faRobot} className="text-white" />
                                <p className="text-white">Hello! How can we help you?</p>
                            </div>
                        </div>
                        <div className="flex mt-3 my-10">
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-l-lg p-2 text-black"
                                placeholder="Type your message..."
                            />
                            <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-r-lg ml-2 flex items-center justify-center w-10">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWindow;

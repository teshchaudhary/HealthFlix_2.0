'use client'
import '../global.css';
import ChatWindow from '../../components/ChatWindow/ChatWindow';

const Contact: React.FC = () => {
    return (
        <div className="bg-black opacity-90 min-h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <p className="text-xl mb-4">We'd love to hear from you! Reach out to us via the chat window.</p>
            <ChatWindow />
        </div>
    );
};

export default Contact;

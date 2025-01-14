import React, { useState } from 'react';
import { Search, Paperclip, Send, Star, Archive, MoreHorizontal, ThumbsUp, Heart, Bell, StarOutline } from 'lucide-react';
import DashboardHeader from '../../components/DashboardHeader'; // Import the DashboardHeader

// Filters for conversations
const filters = ['All', 'Unread', 'Starred', 'Urgent'];

// Sorting options for messages
const sortingOptions = ['Date', 'Sender', 'Priority'];

const MessagesPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Hello, how are you?',
      preview: 'Hey, just checking in. How have you been?',
      timestamp: '12:30 PM',
      isRead: false,
      isStarred: false,
      isUrgent: false,
      reactions: [],
    },
    {
      id: 2,
      sender: 'Nurse Clara',
      subject: 'Your vitals report',
      preview: 'Your vitals are stable. Please keep monitoring your condition.',
      timestamp: '1:15 PM',
      isRead: true,
      isStarred: true,
      isUrgent: false,
      reactions: ['👍', '❤️'],
    },
    {
      id: 3,
      sender: 'AI Guardian',
      subject: 'Reminder to take your medication',
      preview: 'Just a reminder to take your daily medication.',
      timestamp: '2:00 PM',
      isRead: false,
      isStarred: false,
      isUrgent: true,
      reactions: ['❤️'],
    },
  ]);

  const [activeMessage, setActiveMessage] = useState(messages[0]);
  const [messageInput, setMessageInput] = useState('');
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Date');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        subject: 'New Message',
        preview: messageInput,
        timestamp: new Date().toLocaleTimeString(),
        isRead: false,
        isStarred: false,
        isUrgent: false,
        reactions: [],
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  // Apply filters to messages
  const filteredMessages = messages.filter((msg) => {
    if (filter === 'All') return true;
    if (filter === 'Unread' && !msg.isRead) return true;
    if (filter === 'Starred' && msg.isStarred) return true;
    if (filter === 'Urgent' && msg.isUrgent) return true;
    return false;
  });

  // Sort messages based on selected option
  const sortedMessages = filteredMessages.sort((a, b) => {
    if (sortOrder === 'Date') {
      return new Date(b.timestamp) - new Date(a.timestamp);
    } else if (sortOrder === 'Sender') {
      return a.sender.localeCompare(b.sender);
    } else if (sortOrder === 'Priority') {
      return b.isUrgent - a.isUrgent;
    }
    return 0;
  });

  const handleReaction = (messageId, reaction) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === messageId ? { ...msg, reactions: [...msg.reactions, reaction] } : msg
    );
    setMessages(updatedMessages);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Messages Page Content */}
      <div className="py-28">
        <div className="max-w-6xl mx-auto px-6 bg-white rounded-lg shadow-lg">
          <div className="flex">
            {/* Sidebar (Conversation List) */}
            <div className="w-1/3 bg-gray-100 p-4 rounded-l-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-xl text-gray-800">Inbox</h3>
                <button className="text-[#FF7F50] flex items-center gap-2">
                  <Star className="w-5 h-5" /> Starred
                </button>
              </div>

              {/* Filters */}
              <div className="space-y-4 mb-6">
                {filters.map((filterOption) => (
                  <button
                    key={filterOption}
                    onClick={() => setFilter(filterOption)}
                    className={`p-2 w-full text-left rounded-lg hover:bg-gray-200 ${filter === filterOption ? 'bg-[#FF7F50]/10' : ''}`}
                  >
                    {filterOption}
                  </button>
                ))}
              </div>

              {/* Sorting */}
              <div className="space-y-4 mb-6">
                <label className="font-semibold text-gray-700">Sort By</label>
                {sortingOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortOrder(option)}
                    className={`p-2 w-full text-left rounded-lg hover:bg-gray-200 ${sortOrder === option ? 'bg-[#FF7F50]/10' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Message List */}
              <div className="space-y-4">
                {sortedMessages.map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => setActiveMessage(msg)}
                    className={`p-3 rounded-lg hover:bg-gray-200 cursor-pointer ${msg.isRead ? 'bg-white' : 'bg-[#FF7F50]/10'}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{msg.sender}</span>
                      <span className="text-sm text-gray-500">{msg.timestamp}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{msg.subject}</span>
                      {!msg.isRead && <div className="w-2.5 h-2.5 bg-[#FF7F50] rounded-full" />}
                    </div>
                    <p className="text-sm text-gray-500">{msg.preview}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Message View (Right Panel) */}
            <div className="w-2/3 bg-white p-6 rounded-r-lg shadow-inner">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{activeMessage.sender}</h3>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-500"><Archive className="w-5 h-5" /></button>
                    <button className="text-gray-500"><MoreHorizontal className="w-5 h-5" /></button>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-700 mb-2">{activeMessage.subject}</h4>
                <p className="text-sm text-gray-500 mb-6">{activeMessage.timestamp}</p>
                <div className="bg-gray-50 p-4 rounded-lg">{activeMessage.preview}</div>

                {/* Reactions */}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleReaction(activeMessage.id, '👍')}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#FF7F50]"
                  >
                    <ThumbsUp className="w-5 h-5" />
                    {activeMessage.reactions.filter((r) => r === '👍').length}
                  </button>
                  <button
                    onClick={() => handleReaction(activeMessage.id, '❤️')}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#FF7F50]"
                  >
                    <Heart className="w-5 h-5" />
                    {activeMessage.reactions.filter((r) => r === '❤️').length}
                  </button>
                </div>
              </div>

              {/* Message Input */}
              <div className="border-t pt-4">
                <textarea
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                  rows="4"
                  placeholder="Type your message..."
                ></textarea>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                      <Paperclip className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    className="bg-[#FF7F50] text-white py-2 px-6 rounded-lg hover:bg-[#FF6347]"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
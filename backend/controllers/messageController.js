// messageController.js
const Message = require('../models/Message');
const User = require('../models/User');

const messageController = {
  // Fetch all threads
  getAllThreads: async (req, res) => {
    try {
      const threads = await Message.aggregate([
        {
          $group: {
            _id: "$threadId",
            messages: { $push: "$message" },
            participants: { $first: "$participants" }
          }
        }
      ]);
      res.json(threads);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch threads' });
    }
  },

  // Fetch messages in a thread
  getMessagesByThread: async (req, res) => {
    try {
      const { threadId } = req.params;
      const messages = await Message.find({ threadId });
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  },

  // Send a message
  sendMessage: async (req, res) => {
    try {
      const { threadId, senderId, content } = req.body;
      const message = new Message({ threadId, senderId, content });
      await message.save();
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message' });
    }
  },

  // Delete a message
  deleteMessage: async (req, res) => {
    try {
      const { id } = req.params;
      await Message.findByIdAndDelete(id);
      res.json({ message: 'Message deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete message' });
    }
  }
};

module.exports = messageController;

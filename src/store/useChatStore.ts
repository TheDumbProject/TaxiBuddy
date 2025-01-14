import axios from "axios";
import { io } from "socket.io-client";
import { create } from "zustand";

export const useChatStore = create((set, get) => ({
  messageList: [],
  setMessageList: (message) => {
    const { messageList } = get();
    set({ messageList: [...messageList, message] });
  },
  selectedChatBooking: null,
  isChatLoading: false,
  socket: null,
  selectedBookingDetails: null,

  setSelectedBookingDetails: (details) => {
    set({ selectedBookingDetails: details });
  },

  getMessages: async (bookingId) => {
    set({ isChatLoading: true });
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:2707/getChatsForBooking",
        {
          bookingId: bookingId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      set({ messageList: response.data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isChatLoading: false });
    }
  },

  setSelectedBooking: (booking) => {
    set({ selectedChatBooking: booking });
    console.log(booking);
  },

  sendMessage: async (message) => {
    try {
      const { selectedChatBooking } = get();
      const token = localStorage.getItem("token");
      const { socket } = get();

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  },

  connectSocket: () => {
    const { socket } = get();

    if (socket?.connected) return;
    const connection = io("http://localhost:2707");
    connection.connect();
    set({ socket: connection });
  },

  disconnectSocket: () => {
    const { socket } = get();
    if (socket?.connected) {
      socket.disconnect();
    }
  },
}));

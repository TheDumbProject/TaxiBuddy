import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

// Create the context
const SocketContext = createContext(null);

// Create a provider component
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io("http://your-socket-url");
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect(); // Clean up on unmount
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

// Custom hook for accessing the socket context
export const useSocket = () => {
  return useContext(SocketContext);
};

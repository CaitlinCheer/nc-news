import { createContext, useState } from "react";

export const UsersContext = createContext();

const defaultUser = {
  username: "tickle122",
  name: "Tom Tickle",
  avatar_url:
    "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
};

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(defaultUser);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

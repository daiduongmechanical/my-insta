import { createContext, useState } from "react";

type IChildrentType = {
  children: React.ReactNode;
};
export type IUserData = {
  avatar: string;
  comments: any[];
  createdDate: string;
  email: string;
  friends: any[];
  fullName: string;
  id: string;
  likes: any[];
  password: string;
  phone: string;
  posts: any[];
  replyComments: any;
  updatedDate: string;
  userName: string;
};

interface ContextDataType {
  userData: IUserData | null;
  setUserData: (_value: IUserData) => void;
}

export const userDataContext = createContext<ContextDataType>({
  userData: null,
  setUserData: (_value: IUserData) => {},
});

const UserDataProvider = ({ children }: IChildrentType) => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserDataProvider;

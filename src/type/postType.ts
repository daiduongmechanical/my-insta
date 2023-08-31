import { UserType } from "./userType";

export type postType = {
    url: string;
    content: string;
    type: string;
    userId: string;
    user: UserType;
    comments: [];
    likes: [];
    id: string;
  };
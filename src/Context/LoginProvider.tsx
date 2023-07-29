import { createContext, useState } from "react";

interface IStatusLoginProps{
children: React.ReactNode
}

export const StatusLoginContext=createContext(
    {isLogin:false,
    setIsLogin: (_isLogin:boolean) => {}}
);

const IStatusLoginProvider=({children}:IStatusLoginProps)=>{

    const [isLogin,setIsLogin]=useState<boolean>(false);



    return (
    <StatusLoginContext.Provider value={ {isLogin,setIsLogin}}>
        {children}
    </StatusLoginContext.Provider>
    )
}

export default IStatusLoginProvider;

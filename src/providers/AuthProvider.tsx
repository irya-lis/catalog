import React, {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState} from "react";
import {TypeUser} from "../types/user.interfase";

type TypeContext = {
    user: TypeUser
    setUser: Dispatch<SetStateAction<TypeUser>>
}

export const AuthContext = createContext<TypeContext>({
    user: null,
    setUser: () => {}
});

const AuthProvider: FC<PropsWithChildren <unknown>> = ({children}) => {
    const [user, setUser] = useState<TypeUser>(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
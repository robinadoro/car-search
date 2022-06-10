import React, { useContext,useState } from 'react'
import {auth} from '../components/Firebase/Firebase-config'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)

}

function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = React.useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
         }
    
    

    const value={
        currentUser
    }
  return (
    <AuthContext.Provider   >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
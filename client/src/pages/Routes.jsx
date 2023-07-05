import React, { useContext } from 'react'
import { UserContext } from '../component/UserContext'
import RegisterAndLogin from '../pages/RegisterAndLogin'
import Chat from '../pages/Chat';

const Routes = () => {
    const {username, id} = useContext(UserContext);

    if(username){
        return <Chat />;
    }

  return (
    <RegisterAndLogin />
  )
}

export default Routes
import { Modal } from "@mantine/core";
import { useState } from "react";
import SignupFields from "./SignupFields";
import LoginFields from "./LoginFields";

const AuthModal = ({opened, setOpened}) => {
  const [mode, setMode] = useState('login');

  return (
    <Modal
     opened={opened}
     onClose={() => setOpened(false)}
     centered
    >
        {mode === 'login' ?
            <LoginFields setMode={setMode}/>
        :
            <SignupFields setMode={setMode}/>
        }
    </Modal>
  )
};

export default AuthModal;
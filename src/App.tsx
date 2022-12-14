import React, { memo } from "react";
import Clients from "./components/Clients.tsx";
import { users } from "./feature/constants.ts";
import { useSendAccountIdToClientConfigServer } from "./feature/useSendAccountIdToClientConfigServer.ts";

function App(): JSX.Element {
  const sendData = useSendAccountIdToClientConfigServer();

  users.forEach((item) => {
    sendData(item.id);
  });

  return <Clients />;
}

export default memo(App);

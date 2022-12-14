import { useCallback } from "react";
import { useAddData, useCustomData } from "@kameleoon/react-sdk";

export function useSendAccountIdToClientConfigServer(): (userId: string) => void {
  const { addData } = useAddData();
  const { addCustomData } = useCustomData();

  const sendData = useCallback(
    (userId: string) => {
      addData(userId, addCustomData(1, userId));
    },
    [addCustomData, addData]
  );

  return sendData;
}

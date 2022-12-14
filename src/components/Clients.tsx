import React, { memo } from "react";
import Client from "./Client.tsx";
import { users } from "../feature/constants.ts";
import styles from "./Clients.module.scss";

function Clients(): JSX.Element {
  return (
    <div className={styles["clients"]}>
      {users.map((item) => (
        <Client key={item.id} user={item} />
      ))}
    </div>
  );
}

export default memo(Clients);

import React, { memo } from "react";
import { useActivateFeature, useFeatureVariable } from "@kameleoon/react-sdk";
import styles from "./Client.module.scss";
import { FEATURE_REACT_DEMO_APP, VARIABLE_KEY } from "../feature/feature.ts";
import { TypeUser } from "./types";

type Props = {
  user: TypeUser;
};

function Client(props: Props): JSX.Element {
  const { hasFeature } = useActivateFeature();
  const { getFeatureVariable } = useFeatureVariable();

  const isFeatureEnabled = hasFeature(FEATURE_REACT_DEMO_APP, props.user.id);
  const variable = getFeatureVariable(FEATURE_REACT_DEMO_APP, VARIABLE_KEY);

  return (
    <div className={styles["client"]}>
      <span>{props.user.id}</span>
      <span>{props.user.email}</span>
      <span>
        Targeted:{" "}
        <span className={styles["value"]}>{`${isFeatureEnabled}`}</span>
      </span>
      <span>
        Variable: <span className={styles["value"]}>{variable}</span>
      </span>
    </div>
  );
}

export default memo(Client);

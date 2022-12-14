import React, { ReactNode } from "react";
import { createClient, KameleoonProvider } from "@kameleoon/react-sdk";

type Props = {
  children: ReactNode;
};

export function FeatureProvider({ children }: Props): JSX.Element {
  const client = createClient({
    siteCode: "0fpmcg34lg",
    options: {
      actions_configuration_refresh_interval: 5,
    },
  });

  return <KameleoonProvider client={client}>{children}</KameleoonProvider>;
}

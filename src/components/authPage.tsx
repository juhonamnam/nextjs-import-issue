import { observer } from "mobx-react-lite";
import { PropsWithChildren, useEffect, useState } from "react";
import { applicationStore } from "../stores/applicationStore";
import { Loading } from "./loading";
import { NoAuthPage } from "./noAuthPage";

/**
 * A component used for authorization.
 * If authorized, render children.
 */
export const AuthPage = observer(({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<string>(null);

  useEffect(() => {
    if (!applicationStore.userInfo) {
      applicationStore.getUserInfomation().then((userInfo) => {
        setAuth(userInfo ? "AUTH" : "NOAUTH");
      });
    }
  }, []);

  if (!auth) {
    return <Loading />;
  }

  if (auth === "NOAUTH") {
    return <NoAuthPage />;
  }
  return <>{children}</>;
});

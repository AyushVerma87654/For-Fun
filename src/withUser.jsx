import React, { useContext } from "react";
import { UserContext } from "./Context";

const withUser = (IncomingComponent) => (props) => {
  const data = useContext(UserContext);
  return <IncomingComponent {...props} {...data} />;
};

export default withUser;

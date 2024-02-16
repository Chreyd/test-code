import React from "react";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import { Search } from "../screens";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
      <Stack.Screen name={navigationStrings.SEARCH} component={Search} />
    </>
  );
}

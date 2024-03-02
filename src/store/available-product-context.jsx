import React from "react";

const AvailableProductContext = React.createContext({
  items: [],
  addItem: (item) => {},
});

export default AvailableProductContext;

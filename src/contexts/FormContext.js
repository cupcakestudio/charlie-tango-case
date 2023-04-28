import { createContext } from "react";

export const formsSellerContext = createContext();
//store values for the context
const FormFromSeller = {
  m2: 122,
  price: 1200000,
};

//make sure that the context gets provided so other components know about this context, at the top.
export const FormsProvider = ({ children }) => {
  return (
    <formsSellerContext.Provider value={FormFromSeller}>
      {children}
    </formsSellerContext.Provider>
  );
};

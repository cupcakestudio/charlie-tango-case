import { createContext, useState } from "react";
//create context for the initial state of the seller form
export const FormsSellerContext = createContext();

//create context for the updater function of seller form state
export const UpdateSellerContext = createContext();
//store values for the context FormsSellerContext
const FormFromSeller = 23;
//{
//   m2: 122,
//   price: 1200000,
// };

//make sure that the context gets provided so other components know about this context, at the top.
export const FormsProvider = ({ children }) => {
  //set up state for the context so that context gets turned to a state to add stuff stored to an object somewhere else
  const [formsSeller, setFormsSeller] = useState(FormFromSeller);
  return (
    <FormsSellerContext.Provider value={formsSeller}>
      <UpdateSellerContext.Provider value={setFormsSeller}>
        {children}
      </UpdateSellerContext.Provider>
    </FormsSellerContext.Provider>
  );
};

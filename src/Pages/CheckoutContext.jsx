import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

export function CheckoutProvider({ children }) {
  const [billingAddress, setBillingAddress] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);

  return (
    <CheckoutContext.Provider
      value={{
        billingAddress,
        setBillingAddress,
        shippingAddress,
        setShippingAddress,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

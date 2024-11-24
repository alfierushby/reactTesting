import React from 'react';

// Creates a context to be accessed.
const LoginContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>,string,number] | undefined
>(undefined);

// Add a tag name to be defined in the context
// To be used to wrap around children that use the context
export function LoginProvider({ children, name , loggedIn,id}: { children: React.ReactNode, name: string, loggedIn: boolean , id: number}) {
  const [state, setState] = React.useState(loggedIn);
  return (
    <LoginContext.Provider value={[state, setState, name, id]}>
      {children}
    </LoginContext.Provider>
  );
}

// To be used within components that want to use the context
export function useLogin() {
    const context = React.useContext(LoginContext);
    if (context === undefined) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  }

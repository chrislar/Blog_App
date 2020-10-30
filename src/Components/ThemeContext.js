import React, { createContext,useState } from 'react';
export const Theme = createContext();

export default function ThemeContext({ children }) {
    const [theme, setTheme] = useState("light");
  const themeValue = [theme, setTheme];
    return (
        <Theme.Provider value={themeValue}>
            { children}
        </Theme.Provider>



    );

}
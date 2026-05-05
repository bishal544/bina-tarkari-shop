// layout.tsx
import React from 'react';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Bina Tarkari Shop</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
};

export default Layout;
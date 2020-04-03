import React from 'react';

function Layout({children,html}){
    return (
        <div>
            <header></header>
            <body>
            {children}
            </body>
            {html}
        </div>
    )
}

export default Layout
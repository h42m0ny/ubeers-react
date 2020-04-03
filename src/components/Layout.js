import React from 'react';

function Layout({children,html}){
    return (
        <div>
            {children}
            {html}
        </div>
    )
}

export default Layout
import React from 'react';
import Footer from './Footer/Footer';
import TopBar from './TopBar/TopBar';



interface IOwnProps {
    
}

const Layout : React.FC<IOwnProps> = ({children}) => {
    return (
        <>
           <TopBar/>
           {children}
           <Footer/>
        </>
    )
}


export default Layout
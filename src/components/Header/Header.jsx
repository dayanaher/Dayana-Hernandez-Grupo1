<<<<<<< HEAD
import Navbar from "../Navbar/Navbar";
export default function HeaderComponent() {

    return (
        <div className="container mx-auto max-w-[1170px]">
            <div className="flex h-[130px] items-center justify-between">
                <div><img  alt="Verdurafrutis" /></div>
                <div><Navbar /></div>
            </div>
        </div>
    );
}
=======

import React from "react";

function Header()  {
    return(
        <header className={"nav-arial light-blue darken-2"}>
            <h3 className={"Brand-logo"}>Header</h3>

        </header>

    )
}

export default Header;
>>>>>>> 7586f7d60cea32e1abfe70403978ce78da42eca8

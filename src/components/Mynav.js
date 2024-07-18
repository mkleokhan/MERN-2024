
import Homepage from "./Homepage";
import { Link, Route, Routes } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <div className="">
            <header >
                <nav className="navbar navbar-expand bg-dark mt-0  ">
                <Link className="nav-brand nav-link" to='/' id="logo">abcd123.COM lOGO</Link>
                    <div className="navbar nav shiftItemsRight">
                        
                        <li className="nav-item navitemlinks">
                            <Link className="nav-link" id="navbarLinks" to ="search" >Search</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" id="navbarLinks"  to ="customerSupport">Customer Support</Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link"  id="navbarLinks"  to ="signUp">Create an account</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  id="navbarLinks"  to ="signUp">Sign In</Link>
                            </li>                        
                            <li className="nav-item">
                                <Link className="nav-link"  id="navbarLinks"  to ="signUp">Conditional Item</Link>
                            </li>         
                            </div>
                </nav>
                </header>
            </div>
        </div>
    )
}

export default Navbar;
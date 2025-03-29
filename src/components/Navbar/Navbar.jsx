
import "./Navbar.css";
import logo from '../../../public/logo.svg';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
     const navigate = useNavigate();
     const links = [
          {
               title: "Home",
               link: "/",
          },
          {
               title: "SQL Editor",
               link: "/sql-editor",
          },
          {
               title: "Contact Us",
               link: "/",
          },
          {
               title: "About",
               link: '/',
          }
     ];

     const handleClick = () => {
          navigate('/');
     };

     return (
          <div className="navbar-container">
               <div className='mini-header'>
                    <img src={logo} alt="atlan-logo" onClick={handleClick} />
               </div>
               <div className={`nav-main`}>
                    <ul className={`nav-links`}>
                         {links.map((link, index) => {
                              return (
                                   <li className='nav-link-original'>
                                        <div
                                             className='nav-link-original'
                                             onClick={() => navigate(link.link)}
                                             key={index}
                                        >
                                             {link.title}
                                        </div>
                                        <div className='underline'></div>
                                   </li>
                              );
                         })}
                    </ul>

               </div>
          </div>
     );
};

export default Navbar;

import "./Home.css";
import LogoSvg from "../../../public/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
     return (
          <div className="home-background">
               <div className='home-container'>
                    <div className='home-heading-container'>
                         <h1 className='home-heading'>SQL Editor - Query Made Easy{<br />}</h1>
                         <h2 className='blue'>
                              Write SQL queries faster than ever before. Experience a smoother, more efficient way to craft your queries.
                         </h2>
                         <Link to='/sql-editor'>
                              <button className='button'>Lets Begin</button>
                         </Link>
                    </div>
               </div>
               <footer className='footer'>
                    <p>
                         Developed with &#9829; by Akshay for{" "}
                         <a
                              href='https://atlan.com/'
                              target='_blank'
                              rel='noreferrer'
                              aria-label='atlan-link'
                         >
                              <img src={LogoSvg} alt='atlan' className='footer-logo' />
                         </a>
                    </p>
               </footer>
          </div>
     );
};

export default Home;

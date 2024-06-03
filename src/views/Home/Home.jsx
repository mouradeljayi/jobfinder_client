import { Link } from 'react-scroll';
import FamousEmployers from '../../components/FamousEmployers/FamousEmployers';
import LatestJobs from '../../components/LatestJobs/LatestJobs';
import './Home.css';
import { CiSearch } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import PublicAnalytics from '../../components/PublicAnalytics/PublicAnalytics';
import Footer from "../../components/Footer/Footer";


function Home() {

    return (
        <>
            <div className="hero-image">
               <img src="/svgs/resume.svg" alt="" className='online_resume' />
                <p className='hero-header'>JobLink est une application qui met en relation les employeurs avec leurs futurs collaborateurs</p>
                <div className="search-container">
                    <CiSearch className='search-icon' />
                    <input type="text" placeholder="Trouvez votre future job..." className="search-input" />
                    <button className="search-btn">
                        Chercher
                    </button>
                </div>

                
               
                <Link to="famous-employers" smooth={true} duration={1000}>
                    <button className="animated-button">
                        Démarrer
                        <span className="arrow-icon">
                            <FaArrowDown />
                        </span>
                    </button>
                </Link>
            </div>

            <FamousEmployers />
            <LatestJobs />
            <PublicAnalytics />
            <Footer />

        </>
    )
}

export default Home;

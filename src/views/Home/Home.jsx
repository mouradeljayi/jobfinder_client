import FamousEmployers from '../../components/FamousEmployers/FamousEmployers';
import LatestJobs from '../../components/LatestJobs/LatestJobs';
import './Home.css';
import { CiSearch } from "react-icons/ci";

function Home() {

    return (
        <>
        <div className="hero-image">
            <div className="overlay"></div>
            <p className='hero-header'>JobFinder est une application qui met en relation les employeurs avec leurs futurs collaborateurs</p>
            <div className="search-container">
            <CiSearch className='search-icon' />
                <input type="text" placeholder="Trouvez votre future job..." className="search-input" />
                <button className="search-btn">
                   Chercher
                </button>
            </div>
        </div>

        <FamousEmployers />
        <LatestJobs />
        </>
    )
}

export default Home;

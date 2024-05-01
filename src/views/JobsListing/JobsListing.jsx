import { useState } from 'react';
import './JobsListing.css';
import CustomSelect from '../../components/common/CustomSelect/CustomSelect';
import { CiSearch, CiFilter } from "react-icons/ci";
import JobCard from '../../components/JobCard/JobCard';
import Pagination from '../../components/common/Pagination/Pagination';

function JobsListing() {

  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    // Do whatever you want with the selected number
  };
  const numbers = [10, 25, 50, 100];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch data for the new page here
  };



  return (
    <div className='container'>
      <h3>Nos offres d'emploi</h3>
      <section className='filter-container mt-20'>
        <div>
          <button className='filter-btn'><CiFilter className='icon'/> Filtrer</button>
        </div>
        <div>
          <input type="text" placeholder="Rechercher par titre, type, salaire..." className="jobs-search" />
          <button className="jobssearch-btn">
            <CiSearch className='icon'/> Chercher
          </button>
        </div>
        <div className='number-filter'>
        <p>Filtrer par : </p>
        <CustomSelect options={numbers} onSelect={handleNumberSelect} />
         <p>éléments</p>
        </div>
      </section>

      <section className='jobs-section'>
      <JobCard />
      <JobCard />
      <JobCard />
    </section>

    <Pagination totalPages={10} onPageChange={handlePageChange} />


    </div>
  )
}

export default JobsListing

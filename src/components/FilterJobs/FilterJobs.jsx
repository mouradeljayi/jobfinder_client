import { useState } from 'react';
import './FilterJobs.css';
import { FaTimes } from 'react-icons/fa';
import { CiFilter } from 'react-icons/ci';
import { motion } from 'framer-motion';


function FilterJobs({ isFilterOpen, onClose }) {
  const [isFiltering, setIsFiltering] = useState(false);
  const handleFilter = () => {
    setIsFiltering(true);
    // Perform filtering logic here
  };

  return (
    <>
      {isFilterOpen && (
        <motion.div
          className='filter-card'
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'bounce', stiffness: 120, duration: 0.5 }}
        >

          <div className='filter-header'>
            <p>Filtrer les offres d'emploi</p>
            <FaTimes onClick={onClose} style={{ cursor: 'pointer' }} />
          </div>

          <div className='filter-form'>
            <input type="text" placeholder='Titre' />
            <input type="text" placeholder='Type de contrat' />
            <input type="text" placeholder='Ville' />
            <input type="text" placeholder='Salaire' />
            <input type="text" placeholder='Experience' />

            <button className='filterBtn'>
              <CiFilter className='icon' /> Commencer le filtrage
            </button>
          </div>

        </motion.div>
      )}
    </>
  );
}

export default FilterJobs;

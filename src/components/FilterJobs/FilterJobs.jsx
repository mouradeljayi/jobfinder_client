import { useState } from 'react';
import './FilterJobs.css';
import { FaTimes } from 'react-icons/fa';
import { CiFilter } from 'react-icons/ci';
import useEscape from '../../hooks/useEscape';
import { motion } from 'framer-motion';



function FilterJobs({ isFilterOpen, onClose }) {  
    const [isFiltering, setIsFiltering] = useState(false); // State to track filtering state
    const handleFilter = () => {
        setIsFiltering(true);
        // Perform filtering logic here
      };

      const filterContainerVariants = {
        hidden: { transform: 'translateX(-100px)', opacity: 0 },
        visible: { transform: 'translateX(0)', opacity: 1 },
      };

  return (
    <motion.div variants={filterContainerVariants} initial="hidden" animate={isFilterOpen ? "visible" : "hidden"}>
<div className='filter-card'>
     <div className='filter-header'>
        <p>Filtrer les offres d'emploi</p>
        <FaTimes />
     </div>

     <div className='filter-form'>
          <input type="text" placeholder='Titre' />
          <input type="text" placeholder='Type de contrat' />
          <input type="text" placeholder='Ville' />
          <input type="text" placeholder='Salaire' />
          <input type="text" placeholder='Experience' />

          <button className='filterBtn'>
          <CiFilter className='icon'/> Commencer le filtrage
          </button>
        </div>
    </div>
    </motion.div>
    
  );
}

export default FilterJobs;

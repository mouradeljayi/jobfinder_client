import './JobCard.css'
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";



const JobCard = () => {
    return (

        <div className='custom-card'>
        <div className='grid-container'>
          <div className='image-content'>
            <img
              src="https://images.jobfinder.lu/insecure/rs:fit:640:640:1/ex:1/czM6Ly9qb2JmaW5kZXIucHVibGljLzI1YzFlMzI4ZjU4MzhkNGY4NjQyMzNlMmM1YzYwNGUxMzcxODVjYTA="
              alt='Job Image' />
            <div className='card-content'>
              <h4>Ingénieur Java Spring boot FullStack (F/H)</h4>
              <p>ION Group</p>
              <p>Contrat : CDI</p>
              <p>Publié le : 30/04/2024</p>
            </div>
          </div>
          <div className='icon-container'>
            <CiHeart />
            {/* <IoMdHeart/> */}
          </div>
        </div>
      </div>
      
    );
};

export default JobCard;

import './JobCard.css'

const JobCard = () => {
    return (
       
        <div className='custom-card'>
            <img 
                src="https://images.jobfinder.lu/insecure/rs:fit:640:640:1/ex:1/czM6Ly9qb2JmaW5kZXIucHVibGljLzI1YzFlMzI4ZjU4MzhkNGY4NjQyMzNlMmM1YzYwNGUxMzcxODVjYTA=" 
                alt='Job Image' />
            <div className='card-content'>
                <h4>Ingénieur d'étude et développement</h4>
                <p>ION Group</p>
                <p>Contrat : CDI</p>

                <p>Publié le : 30/04/2024</p>
                
            </div>
        </div>
    );
};

export default JobCard;

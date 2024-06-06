import { FaBuilding, FaEnvelope, FaPhone, FaPlus, FaStar, FaUsers } from 'react-icons/fa'
import './CompanyDetail.css'
import { IoMdOpen } from 'react-icons/io'
import { useInView } from 'react-intersection-observer';


function CompanyDetail() {

    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <div className='companydetail-container'>
            <section className='companydetail-grid'>
                <div>
                    <div className='companydetail-header'>
                        <img src="https://leseco.ma/wp-content/uploads/2021/11/Marjane-Holding.jpg" alt="" />
                        <div>
                            <h1>Marjane Group SARL</h1>
                            <div className='company-rating'>
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className='companystar' />
                                ))}
                            </div>
                            <button> <FaPlus className='icon' />  Suivre</button>
                        </div>
                    </div>
                    <p className='companydetail-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid minus consequuntur quas tempore totam voluptas voluptatibus debitis perspiciatis perferendis dignissimos cupiditate architecto iste ipsum animi nobis, possimus tempora aspernatur quaerat. Incidunt, non quia tenetur iure eligendi eos molestias quae eveniet reiciendis vitae pariatur dolor enim fuga quas. Quia impedit libero cupiditate! Dolorum eligendi, voluptatum laboriosam, natus illo doloribus iure repellendus nobis dolores hic saepe quae at, esse quaerat nostrum veritatis impedit facere nulla aspernatur eius velit alias illum labore sunt. Cum odio voluptate numquam maiores adipisci totam temporibus, quaerat molestias sed veniam ducimus accusamus neque harum placeat. Minus, consequuntur possimus.</p>
                </div>

                <div className='companysidenav'>
                <div className={`companydetail-card ${inView ? '' : 'fixed'}`}>
                    
                            <p className='companyadress'> <FaBuilding className='icon companydetail-icon' /> <span>Bloc 5, Bureau 167, Agadir Bay, Agadir</span></p>
                                <p> <FaUsers className='icon companydetail-icon' /> 278 personnes</p>
                            <p> <FaPhone className='icon companydetail-icon' /> +352 26430094</p>
                            <p> <FaEnvelope className='icon companydetail-icon' /> marjanegroup@info.com</p>
                            <p><a href='https://www.letzshop.lu' target='_black'> <IoMdOpen  className='icon companydetail-icon'/> https://www.letzshop.lu</a></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CompanyDetail
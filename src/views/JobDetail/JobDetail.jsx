import './JobDetail.css'
import { FaPrint, FaShareAlt, FaPhone, FaBuilding } from 'react-icons/fa'
import { CiHeart } from "react-icons/ci";
import { IoMdHeart, IoMdOpen } from "react-icons/io";
import { useInView } from 'react-intersection-observer';


const JobDetail = () => {

    const { ref, inView } = useInView({
        threshold: 0,
    });

    // const { ref1, inView1 } = useInView({
    //     threshold: 0,
    // });

    return (
        <div className='jobdetail-container'>
            <section className='job-grid'>

                <div className='job-info'>
                    <h1 className='jobtitle'>Assistant(e) de Support opérationnel et de Projets</h1>
                    <h4 className='metajobtitle'>
                        Dell for Shopping GIE
                        <span className='vertical-line'></span>
                        <span className='jobdate'> Publiée le 03/06/2024</span>
                    </h4>

                    <div className={`job-metainfo ${inView ? '' : 'fixed'}`} >
                        <button className='applybtn'>Postuler maintenant</button>
                        <button className='jobbtn'><FaPrint className='icon' /></button>
                        <button className='jobbtn'><FaShareAlt className='icon' /> Partager</button>
                        <button className='jobbtn'><CiHeart className='icon jobhearticon' /></button>
                    </div>

                    <div ref={ref}></div>

                    <div className='jobdetails'>
                        <div className='detailjob'>
                            <h4>Niveau d'études</h4>
                            <p>Bac +3</p>
                        </div>

                        <div className='detailjob'>
                            <h4>Expérience</h4>
                            <p>Junior (1-2 ans)</p>
                        </div>

                        <div className='detailjob'>
                            <h4>Spécialisation</h4>
                            <p>Internet & E-Commerce</p>
                        </div>

                        <div className='detailjob'>
                            <h4>Type de contrat</h4>
                            <p>CDI</p>
                        </div>

                        <div className='detailjob'>
                            <h4>Salaire</h4>
                            <p>£ 7000 NET / mois</p>
                        </div>

                        <div className='detailjob'>
                            <h4>Dernier délais</h4>
                            <p>le 03/06/2024</p>
                        </div>

                    </div>

                    <div className='descriptionjob'>
                        <h2>Votre mission</h2>
                        <p>Sous la direction du coordinateur, vous jouerez un rôle clé dans le développement et l'amélioration continus de nos services. Vous serez le moteur de projets variés et passionnants, impliquant à la fois des initiatives en cours d'une importance capitale et le développement de nouveaux projets prometteurs. Il s'agit donc d'un poste dynamique, offrant une grande variété de tâches qui évolueront au fil du temps.</p>
                    </div>

                    <div className='descriptionjob'>
                        <h2>Tâches principales</h2>
                        <ul>
                            <li>Réceptionner, analyser et suivre les requêtes des clients, en assurant un support personnalisé pour améliorer leur présence en ligne</li>
                            <li>Réceptionner, analyser et suivre les requêtes des clients, en assurant un support personnalisé pour améliorer leur présence en ligne</li>

                            <li>Réceptionner, analyser et suivre les requêtes des clients, en assurant un support personnalisé pour améliorer leur présence en ligne</li>

                            <li>Réceptionner, analyser et suivre les requêtes des clients, en assurant un support personnalisé pour améliorer leur présence en ligne</li>

                            <li>Réceptionner, analyser et suivre les requêtes des clients, en assurant un support personnalisé pour améliorer leur présence en ligne</li>

                        </ul>
                    </div>


                    <div className='descriptionjob'>
                        <h2>Profil Recherché</h2>
                        <ul>
                            <li>BAC+2 dans des domaines variés, ou expérience professionnelle équivalente</li>
                            <li>Très bonne maîtrise des langues usuelles du pays, à l'écrit comme à l'oral (LU, FR, DE, EN obligatoires).</li>
                            <li>Curiosité intellectuelle et envie d'apprendre au quotidien</li>
                            <li>Intérêt pour les enjeux liés au commerce de détail et à l'urbanisme</li>

                        </ul>
                    </div>

                    <div className='descriptionjob'>
                        <h2>Ce que nous offrons</h2>
                        <ul>
                            <li>Un cadre et environnement de travail stimulant</li>
                            <li>Un cadre et environnement de travail stimulant</li>
                            <li>Un cadre et environnement de travail stimulant</li>
                            <li>Un cadre et environnement de travail stimulant</li>

                        </ul>
                    </div>


                </div>


                <div className='job-sidebar'>
                    <div className={`company-card ${inView ? '' : 'fixed'}`}>
                        <img src="https://static.vecteezy.com/ti/vecteur-libre/p3/20190669-dell-logo-vecteur-dell-icone-gratuit-vecteur-gratuit-vectoriel.jpg" alt="" />
                        <div className='companyinfo'>
                            <h3>Dell for Shopping GIE</h3>
                            <p> <FaBuilding className='icon companyicon' /> rue Erasme, 14
                                1468 Luxembourg
                                Luxembourg</p>
                            <p> <FaPhone className='icon companyicon' /> +352 26430094</p>
                            <p><a href='https://www.letzshop.lu' target='_black'> <IoMdOpen  className='icon companyicon'/> https://www.letzshop.lu</a></p>
                            <button>Consulter le profil de l'entreprise</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default JobDetail
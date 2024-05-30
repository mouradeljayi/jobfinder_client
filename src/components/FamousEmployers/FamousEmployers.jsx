import './FamousEmployers.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const FamousEmployers = () => {
  return (
    <div id="famous-employers">
      <h2 className='famouscompanies-header'>LES ENTREPRISES DE LA SEMAINE</h2>

      <div className='grid-famouscompanies'>

        <div>
          <img className='famouscompanies-card'
            src="https://static.vecteezy.com/ti/vecteur-libre/p3/20190669-dell-logo-vecteur-dell-icone-gratuit-vecteur-gratuit-vectoriel.jpg"
            alt='Job Image' />
          <img className='famouscompanies-card'
            src="https://lereporterexpress.ma/wp-content/uploads/2022/11/capgemini.jpeg"
            alt='Job Image' />
          <img className='famouscompanies-card'
            src="https://cdn.lesnumeriques.com/optim/news/20/208707/a75ebb00-5-astuces-pour-enfin-apprendre-a-utiliser-google__1200_678__237-675-3943-2765.jpeg"
            alt='Job Image' />
        </div>

        <div>
          <img className='famouscompanies-maincard'
            src="https://leseco.ma/wp-content/uploads/2021/11/Marjane-Holding.jpg"
            alt='Job Image' />
        </div>

        <div>
          <img className='famouscompanies-card'
            src="https://www.developpez.net/forums/attachments/p649989d1/a/a/a"
            alt='Job Image' />
          <img className='famouscompanies-card'
            src="https://www.dreamjob.ma/wp-content/uploads/2024/04/Leoni-Emploi-Recrutement-2.png"
            alt='Job Image' />
          <img className='famouscompanies-card'
            src="https://www.developpez.net/forums/attachments/p579174d1/a/a/a"
            alt='Job Image' />
        </div>

      </div>


      <button className='allCompanies-btn' type='button'>Voir toutes les entreprises <MdKeyboardDoubleArrowRight className='icon' />
      </button>


    </div>
  )
}

export default FamousEmployers
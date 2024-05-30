import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './RegisterForm.css';
import { FaCheck, FaTimes, FaGoogle } from "react-icons/fa";

import GlobalSpinner from '../common/GlobalSpinner';
import useEscape from '../../hooks/useEscape';


function RegisterForm({ accountType, onCloseForm }) {

  const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);


  const handleClose = () => {
    onCloseForm();
  };

  useEscape(handleClose)

  return (
    <motion.div
      className='flowing-section'
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      // other types : spring, anticipate, easeOut, ease, easeIn, easeInOut
      transition={{ type: 'bounce', stiffness: 120, duration: 0.5 }}
    >
      <div>
        <FaTimes className='close-icon' onClick={handleClose} />
        <h3 className='title'>Créer un compte en tant que
          <span className='type'> {accountType}</span>
        </h3>
        {/* <div className="spinner-container">
          <GlobalSpinner loading={loading} color={"#0460D9"} />
        </div> */}
        <div className='form-section'>
          <input type="text" placeholder='Nom' />
          <input type="text" placeholder='Prénom' />
          <input type="email" placeholder='Email' />
          <select className='' placeholder='Spécialisation'>
            <option value="">Spécialisation</option>
            <option value="informatique">Informatique</option>
            <option value="médecine">Médecine</option>
            <option value="finance">Finance</option>
            <option value="art">Art</option>
          </select>
          {accountType === "Employeur" && (
            <>
              <input type="text" placeholder='Nom de votre société' />
              <input type="text" placeholder='Taille de votre société' />
            </>
          )}
          <input type="password" className='' placeholder='Mot de passe' />
          <input type="password" className='' placeholder='Confimrer le mot de passe' />

          <button className='submit-btn'>
            Créer mon compte  <FaCheck className='icon' />
          </button>
          <button className='google'>
            Se connecter avec Google <FaGoogle className='icon' />
          </button>
        </div>

      </div>
    </motion.div>
  );
}

export default RegisterForm;

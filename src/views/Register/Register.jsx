import "./Register.css"
import { FaUserTie } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useState } from "react";




function Register() {

  const [selectedAccount, setSelectedAccount] = useState(null);
  const handleAccountSelect = (accountType) => {
    setSelectedAccount(accountType);
  };
  const handleCloseForm = () => {
    setSelectedAccount(null);
  };

  return (
    <div className="parent-container">
      <h3 className="title">Créez votre compte et bénéficiez de nos riches fonctionnalités</h3>
      <p className="meta-title">Choisissez votre type de compte</p>
      <section className="container">
        <div className="choice-card">
          <div className="card" onClick={() => handleAccountSelect("Chercheur d'emploi")}>
            <GrUserWorker className="register-icon" />
            <p>Chercheur d'emploi</p>
          </div>
          <div className="card" onClick={() => handleAccountSelect("Employeur")}>
            <FaUserTie className="register-icon" />
            <p>Employeur</p>
          </div>
        </div>
      </section>

      { 
        selectedAccount && 
        <RegisterForm accountType={selectedAccount}  onCloseForm={handleCloseForm}/>
      }
    </div>
  )
}

export default Register

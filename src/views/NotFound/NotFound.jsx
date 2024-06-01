import "./NotFound.css"
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found-container">
      <div className="content">
        <h1 className="not-found-title">404 - Page Introuvable</h1>
        <p className="not-found-message">Oops! La page que vous recherchez n'existe pas.</p>
        <button className="go-back-button" onClick={goBack}>Retourner</button>
      </div>
    </div>
  );
}

export default NotFound;

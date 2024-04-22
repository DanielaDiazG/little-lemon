import Button from '../components/Button';
import chef from '../icons/chef.jpg';
import { useNavigate } from 'react-router-dom';

function Confirm({}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create');
  };
  return (
    <div className="container-confirm">
      <h1>Reservation created successfully</h1>
      <img src={chef} alt="chef" width={300} />
      <h2>Do you want to register with us to have multiple benefits?</h2>
      <div className="container-button">
        <Button onClick={handleClick}>Create account</Button>
        <span>Already have and account? LOGIN</span>
      </div>
    </div>
  );
}
export default Confirm;

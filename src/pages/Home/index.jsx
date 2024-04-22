import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import restauranfood from '../../icons/restauranfood.jpg';
import greekSalad from '../../icons/greekSalad.jpg';

function Home({}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/bookings');
  };
  return (
    <>
      <div
        style={{
          height: '300px',
          backgroundColor: '#495E57',
          padding: '10PX 20px'
        }}
      >
        <div>
          <h1 style={{ color: '#F4CE14' }}>Little Lemon</h1>
          <h3 style={{ color: 'white' }}>Chicago</h3>
        </div>
        <div style={{ display: 'flex' }}>
          <spam style={{ color: 'white', width: ' 200px' }}>
            We are a family owner Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </spam>
          <img
            src={restauranfood}
            alt="Instagram Little Lemon"
            width={90}
            className="image-small"
          />
        </div>

        <Button onClick={handleClick}>
          <span>Reserve a table</span>
        </Button>
      </div>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <img src={greekSalad} alt="Greek Salad" width="90%" />
      </div>
    </>
  );
}

export default Home;

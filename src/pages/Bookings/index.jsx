import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Bookings({ setBookingData }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookingData({
      useData: {
        name: event.currentTarget.elements.fullName.value,
        email: event.currentTarget.elements.email.value,
        phone: event.currentTarget.elements.phone.value
      },

      bookingData: {
        date: event.currentTarget.elements.date.value,
        time: event.currentTarget.elements.time.value,
        numberOfPeople: event.currentTarget.elements.numberOfPeople.value
      }
    });
    navigate('/confirm');
  };
  return (
    <form className="container-bookings" onSubmit={handleSubmit}>
      <Input id="fullName" label="Full name" />
      <Input id="email" label="Email" type="email" />
      <Input id="phone" label="Phone" type="number" />
      <div className="center-element" style={{ color: 'white' }}>
        Reservation details
      </div>
      <Input id="date" label="Date" type="date" />
      <Input id="time" label="Time" type="time" />
      <Input id="numberOfPeople" label="Number of people" type="number" />
      <div className="center-element">
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
}
export default Bookings;

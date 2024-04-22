import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../utils/MockApi';

function Bookings({ setBookingData }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookingData({
      useData: {
        name: event.currentTarget.elements.name.value,
        lastName: event.currentTarget.elements.lastName.value,
        email: event.currentTarget.elements.email.value,
        phone: event.currentTarget.elements.phone.value
      },

      bookingData: {
        date: event.currentTarget.elements.date.value,
        time: event.currentTarget.elements.time.value,
        numberOfPeople: event.currentTarget.elements.numberOfPeople.value
      }
    });
    const response = submitAPI({
      name: event.currentTarget.elements.name.value,
      lastName: event.currentTarget.elements.lastName.value,
      email: event.currentTarget.elements.email.value,
      phone: event.currentTarget.elements.phone.value,
      date: event.currentTarget.elements.date.value,
      time: event.currentTarget.elements.time.value,
      numberOfPeople: event.currentTarget.elements.numberOfPeople.value
    });
    if (response) navigate('/confirm');
  };
  return (
    <form className="container-bookings" onSubmit={handleSubmit}>
      <Input id="name" label="Name" required />
      <Input id="lastName" label="Last name" required />
      <Input id="email" label="Email" type="email" />
      <Input id="phone" label="Phone" type="number" required />
      <div className="center-element" style={{ color: 'white' }}>
        Reservation details
      </div>
      <Input id="date" label="Date" type="date" required />
      <Input id="time" label="Time" type="time" required />
      <Input
        id="numberOfPeople"
        label="Number of people"
        type="number"
        required
      />
      <div className="center-element">
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
}
export default Bookings;

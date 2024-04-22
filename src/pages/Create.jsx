import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Create({ setBookingData }) {
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
    <form className="container-create" onSubmit={handleSubmit}>
      <div>
        <h1>Create Account</h1>
        <h2>CREATE A NEW ACCOUNT</h2>
      </div>
      <Input id="name" label="Name" />
      <Input id="last-name" label="Last name" />
      <Input id="phone" label="Phone" type="number" />
      <Input id="email" label="Email" type="email" />
      <Input id="pasword" label="Pasword" type="pasword" />
      <div className="center-element">
        <Button type="submit">Create account</Button>
      </div>
    </form>
  );
}
export default Create;

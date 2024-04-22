import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Create({ userData, setCreateData }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setCreateData({
      name: event.currentTarget.elements.name.value,
      lastName: event.currentTarget.elements.lastName.value,
      phone: event.currentTarget.elements.phone.value,
      email: event.currentTarget.elements.email.value
    });
    navigate('/');
  };

  const { name, lastName, phone, email } = userData;

  return (
    <form className="container-create" onSubmit={handleSubmit}>
      <div>
        <h1>Create Account</h1>
        <h2>CREATE A NEW ACCOUNT</h2>
      </div>
      <Input
        className="input-create"
        id="name"
        label="Name"
        defaultValue={name}
        required
      />
      <Input
        className="input-create"
        id="lastName"
        label="Last name"
        defaultValue={lastName}
        required
      />
      <Input
        className="input-create"
        id="phone"
        label="Phone"
        type="number"
        defaultValue={phone}
        required
      />
      <Input
        className="input-create"
        id="email"
        label="Email"
        type="email"
        defaultValue={email}
        required
      />
      <Input
        className="input-create"
        id="pasword"
        label="Password"
        type="password"
        required
      />
      <div className="center-element">
        <Button type="submit">Create account</Button>
      </div>
    </form>
  );
}
export default Create;

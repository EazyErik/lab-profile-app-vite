import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button>Signup</button>
      <button>Login</button>
    </div>
  );
};

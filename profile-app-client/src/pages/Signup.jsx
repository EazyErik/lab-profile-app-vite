import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [course, setCourse] = useState('');
  const BASE_URL = `http://localhost:5005`;
  const locations = [
    'Madrid',
    'Barcelona',
    'Miami',
    'Paris',
    'Berlin',
    'Amsterdam',
    'México',
    'Sao Paulo',
    'Lisbon',
    'Remote',
  ];

  const courses = ['Web Dev', 'UX/UI', 'Data Analytics', 'Cyber Security'];

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    axios
      .post(`${BASE_URL}/auth/signup`, { username, password, campus, course })
      .then((response) => {
        console.log(response);
        navigate('/login');
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form action="submit" onSubmit={handleSignupSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={username}
          placeholder="enter your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          value={password}
          placeholder="enter your name"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">Campus</label>
        <select
          name="campus"
          value={campus}
          onChange={(e) => setCampus(e.target.value)}
        >
          {locations.map((location, index) => {
            return (
              <option key={index} value={location}>
                {location}
              </option>
            );
          })}
        </select>
        <label htmlFor="">Course</label>
        <select
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          {courses.map((course, index) => {
            return (
              <option key={index} value={course}>
                {course}
              </option>
            );
          })}
        </select>
        <button type="submit">Create accout</button>
      </form>
    </div>
  );
};

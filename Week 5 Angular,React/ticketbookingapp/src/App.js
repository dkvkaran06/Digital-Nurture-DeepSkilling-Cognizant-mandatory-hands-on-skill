import React, { useState } from "react";
import "./App.css";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h2>Please Sign Up</h2>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>10:00 AM</td>
          </tr>

          <tr>
            <td>6E202</td>
            <td>Bangalore</td>
            <td>Chennai</td>
            <td>1:30 PM</td>
          </tr>

          <tr>
            <td>UK303</td>
            <td>Kolkata</td>
            <td>Hyderabad</td>
            <td>5:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome Back</h2>

      <h3>Book Your Ticket</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>10:00 AM</td>
            <td>
              <button>Book</button>
            </td>
          </tr>

          <tr>
            <td>6E202</td>
            <td>Bangalore</td>
            <td>Chennai</td>
            <td>1:30 PM</td>
            <td>
              <button>Book</button>
            </td>
          </tr>

          <tr>
            <td>UK303</td>
            <td>Kolkata</td>
            <td>Hyderabad</td>
            <td>5:00 PM</td>
            <td>
              <button>Book</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Ticket Booking Application</h1>

      <Greeting isLoggedIn={isLoggedIn} />

      <br />

      {isLoggedIn ? (
        <LogoutButton onClick={handleLogout} />
      ) : (
        <LoginButton onClick={handleLogin} />
      )}
    </div>
  );
}

export default App;
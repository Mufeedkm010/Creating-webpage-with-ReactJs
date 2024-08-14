import React from 'react';
import './Content.css';

function Content() {
  return (
    <main>
      <h1>Welcome to the Content Section</h1>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mufeed</td>
            <td>mufee@example.com</td>
            <td>123-456-7890</td>
            <td>Malappuram</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Harish</td>
            <td>Hari@example.com</td>
            <td>987-654-3210</td>
            <td>Tiruppur</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dhanu</td>
            <td>Dhanu@example.com</td>
            <td>555-123-4567</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Akram</td>
            <td>ak@example.com</td>
            <td>444-555-6666</td>
            <td>Kanyakumari</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Paramesh</td>
            <td>Paramesh@example.com</td>
            <td>777-888-9999</td>
            <td>Ooty</td>
          </tr>
        </tbody>
      </table>

      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" id="password" name="password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}

export default Content;

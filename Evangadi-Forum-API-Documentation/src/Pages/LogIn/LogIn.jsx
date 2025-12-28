import React from 'react'

function LogIn() {
  return (
    <section>
      <h2>Authentication</h2>
      <p>JWT-based authentication is used to protect secured endpoints.</p>

      <table>
        <tr>
          <th>Endpoint</th>
          <th>Method</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>/api/users/check</td>
          <td>GET</td>
          <td>Verify authenticated user</td>
        </tr>
      </table>
    </section>
  );
}

export default LogIn

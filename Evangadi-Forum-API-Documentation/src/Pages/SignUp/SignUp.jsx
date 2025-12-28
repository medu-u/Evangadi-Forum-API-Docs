import React from 'react'

function SignUp() {
  return (
    <section>
      <h2>User Endpoints</h2>
      <table>
        <tr>
          <th>Endpoint</th>
          <th>Method</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>/api/users/register</td>
          <td>POST</td>
          <td>User signup</td>
        </tr>
        <tr>
          <td>/api/users/login</td>
          <td>POST</td>
          <td>User login</td>
        </tr>
      </table>
    </section>
  );
}

export default SignUp

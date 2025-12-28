import React from 'react'

function Question() {
  return (
    <section>
      <h2>Question Endpoints</h2>
      <table>
        <tr>
          <th>Endpoint</th>
          <th>Method</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>/api/question</td>
          <td>GET</td>
          <td>Fetch all questions</td>
        </tr>
        <tr>
          <td>/api/question</td>
          <td>POST</td>
          <td>Create a new question</td>
        </tr>
        <tr>
          <td>/api/question/:id</td>
          <td>GET</td>
          <td>Get single question</td>
        </tr>
      </table>
    </section>
  );
}

export default Question

import React from 'react'

function Answer() {
  return (
    <section>
      <h2>Answer Endpoints</h2>
      <table>
        <tr>
          <th>Endpoint</th>
          <th>Method</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>/api/answer/:question_id</td>
          <td>GET</td>
          <td>Get answers for a question</td>
        </tr>
        <tr>
          <td>/api/answer</td>
          <td>POST</td>
          <td>Post an answer</td>
        </tr>
      </table>
    </section>
  );
}

export default Answer

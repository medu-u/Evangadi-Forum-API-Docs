import React from 'react'
import styles from './Answer.module.css'

function Answer() {
  return (
    <div className={styles.doc}>
      <h1>Post Answers for a Question</h1>

      <p>
        <span className={styles.label}>Endpoint:</span>
        <span className={styles.inlineCode}>/api/user/login</span>
      </p>

      <p>
        <span className={styles.label}>Method:</span>
        <span className={styles.inlineCode}>POST</span>
      </p>

      <h2>Description</h2>
      <p>Authenticates a user and returns a JWT token.</p>

      <h2>Request Body Parameters</h2>
      <ul>
        <li>
          <span className={styles.labeled}>email(string)</span>:The email of the
          user
        </li>
        <li>
          <span className={styles.labeled}> password (string)</span>: The
          password of the user.
        </li>
      </ul>

      <h2>Successful Response</h2>
      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusOk}>200 OK</span>
      </p>
      <p>
        <span className={styles.label}>Content-Type:</span>
        <span className={styles.inlineCode}>application/json</span>
      </p>

      <pre>{`{"message": "User login successful",
   "token": "jwt_token"
   
       }`}</pre>

      <h2>Error Responses</h2>

      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusError}>400 Bad Request</span>
      </p>
      <p>Description: Missing required fields.</p>

      <pre>{`{"error": "Bad Request",
   "message": "Please provide all required fields"
       }`}</pre>

      <p>
        <span className={styles.label}>Status Code:</span>{" "}
        <span className={styles.statusError}>500 Internal Server Error</span>
      </p>
      <p>Description:An unexpected error occurred.</p>

      <pre>{`{"error": "Internal Server Error",
   "message": "An unexpected error occurred."
   
       }`}</pre>
    </div>
  );
}

export default Answer

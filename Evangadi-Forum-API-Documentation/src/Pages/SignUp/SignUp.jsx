import React from 'react'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <div className={styles.doc}>
      <h1>Signup</h1>

      <p>
        <span className={styles.label}>Endpoint:</span>
        <span className={styles.inlineCode}>/api/user/register</span>
      </p>

      <p>
        <span className={styles.label}>Method:</span>
        <span className={styles.inlineCode}>POST</span>
      </p>

      <h2>Description</h2>
      <p>
        Registers a new user in the system. The endpoint validates user input,
        checks if the email already exists, hashes the password, and stores the
        user information in the database.
      </p>

      <h2>Request Body Parameters</h2>
      <ul>
        <li>
          <span className={styles.labeled}>username(string)</span>: The username
          of the user
        </li>
        <li>
          <span className={styles.labeled}>first_name(string)</span>: The first
          name of the user
        </li>
        <li>
          <span className={styles.labeled}>last_name(string)</span>: The last
          name of the user
        </li>
        <li>
          <span className={styles.labeled}>email(string)</span>: The email
          address of the user
        </li>
        <li>
          <span className={styles.labeled}>password(string)</span>: The password
          of the user
        </li>
      </ul>

      <h2>Successful Response</h2>
      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusOk}> 201 Created</span>
      </p>
      <p>
        <span className={styles.label}>Content-Type:</span>
        <span className={styles.inlineCode}>application/json</span>
      </p>

      <pre>{`     {
        "message": "User registered successfully"
     }`}</pre>

      <h2>Error Responses</h2>

      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusError}> 400 Bad Request</span>
      </p>
      <p>Description: Missing or invalid fields.</p>

      <pre>{`      {
           "error": "Bad Request",
           "message": "Please provide all required fields"
      }`}</pre>

      <p>
        <span className={styles.label}>Status Code:</span>{" "}
        <span className={styles.statusError}>400 Bad Request</span>
      </p>
      <p>Description: Missing or invalid fields.</p>

      <pre>{`      {
          "error": "Bad Request",
          "message": "Password must be at least 8 characters"
      }`}</pre>

      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusError}> 409 Conflict</span>
      </p>
      <p>
        Description: A user with the provided username or email already exists.
      </p>

      <pre>{`     {
          "error": "Conflict",
          "message": "User already existed"
     }`}</pre>

      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusError}> 500 Internal Server Error</span>
      </p>
      <p>Description: An unexpected error occurred.</p>

      <pre>{`      {
          "error": "Internal Server Error",
          "message": "Internal server error occurred"
      }`}</pre>
    </div>
  );
}

export default SignUp

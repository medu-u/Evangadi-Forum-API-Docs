import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <section className={styles.paint}>
        <div className={styles.top}>
          <h1>Evangadi Forum API Documentation</h1>
          <p>Backend API Documentation for Q & A Platform</p>
        </div>
            <div className={styles.docWrapper}>
              <h1 className={styles.title}>Authentication Middleware</h1>
              <hr></hr>
              <h2>Overview</h2>
              <p>
                The Authentication Middleware is responsible for validating incoming
                requests by verifying the identity of the user. It ensures that only
                authenticated users can access protected resources within the Evangadi Forum application. This middleware runs before protected API endpoints are executed.
              </p>
              <h3>Middleware Behavior</h3>
              <ul>
                <li>
                  The middleware extracts the token from the <span>Authorization</span>
                  header.
                </li>
                <li>It validates the token’s signature and expiration.</li>
                <li>
                  If the token is valid, the user’s identity is decoded from the token.
                </li>
                <li>
                  The authenticated user’s information is attached to the request
                  object.
                </li>
                <li>The request proceeds to the next middleware or controller.</li>
              </ul>
              <p>
                If the token is missing, invalid, or expired, the middleware blocks the
                request and returns an error response.
              </p>
              <h3>Endpoint and Method</h3>
              <p>
                <strong>Endpoint:</strong>
                <span className={styles.code}>/api/user/checkUser</span>
              </p>
              <p>
                <strong>Method:</strong> <span className={styles.code}>GET</span>
              </p>
              <p>
                <strong>Description:</strong> Checks the current authenticated user's
                information.
              </p>
              <h2>Request Headers</h2>
              <span className={styles.code}>Authorization</span>: Bearer token
              <p>
                The token is typically a JSON Web Token (JWT) generated during user
                login. The token must be included in every request that requires
                authentication.
              </p>
              <h2>Successful Response</h2>
              <p>
                <strong>Status Code:</strong>
                <span className={styles.success}>200 OK</span>
              </p>
              <p>
                <strong>Content-Type:</strong>
                <span className={styles.code}>application/json</span>
              </p>
              <pre className={styles.codeBlock}>
                {`{
             "message": "Valid user",
             "username": "Kebede",
             "userid": "123"
           }`}
              </pre>
              <h2>Error Responses</h2>
              <p>
                <strong>Status Code:</strong>
                <span className={styles.error}>401 Unauthorized</span>
              </p>
              <p>
                <strong>Description:</strong> Authentication credentials were missing or
                incorrect.
              </p>
              <pre className={styles.codeBlock}>
                {`{
             "error": "Unauthorized",
             "message": "Authentication invalid"
           }`}
              </pre>
            </div>
          
      </section>

      <section className={styles.paint}>
        <h2>Database Schema</h2>

        <h3>Users</h3>
        <pre>
          id (PK) username first_name last_name email password created_at
        </pre>

        <h3>Questions</h3>
        <pre>id (PK) user_id (FK) title description created_at</pre>

        <h3>Answers</h3>
        <pre>id (PK) question_id (FK) user_id (FK) answer created_at</pre>
      </section>
    </>
  );
}

export default Main;

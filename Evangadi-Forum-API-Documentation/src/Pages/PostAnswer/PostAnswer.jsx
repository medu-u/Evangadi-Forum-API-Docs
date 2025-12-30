import React from "react";
import styles from './PostAnswer.module.css'

function PostAnswer() {
  return (
    <div className={styles.doc}>
      <h1>Post Answers for a Question</h1>
      <p>
        <span className={styles.label}>Endpoint:</span>
        <span className={styles.inlineCode}>api/answer</span>
      </p>

      <p>
        <span className={styles.label}>Method:</span>
        <span className={styles.inlineCode}>POST</span>
      </p>

      <h2>Description</h2>
      <p>Submits an answer for a specific question.</p>

      <h2>Request Body </h2>
      <ul>
        <li>
          <span className={styles.labeled}>questionid (number)</span>:The id for
          a specific question.
        </li>
        <li>
          <span className={styles.labeled}> answer (string)</span>: The answer
          for a specific question.
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

      <pre>
        {`      {
         "message": "Answer posted successfully"
      }`}
      </pre>

      <h2>Error Responses</h2>

      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusError}> 400 Bad Request</span>
      </p>
      <p>Description: Missing or invalid fields.</p>

      <pre>{`      {
        "error": "Bad Request",
        "message": "Please provide answer""
      }`}</pre>

      <p>
        <span className={styles.label}>Status Code:</span>{" "}
        <span className={styles.statusError}> 500 Internal Server Error</span>
      </p>
      <p>Description:An unexpected error occurred.</p>

      <pre>{`     {
        "error": "Internal Server Error",
        "message": "An unexpected error occurred."
     }`}</pre>
    </div>
  );
}

export default PostAnswer;

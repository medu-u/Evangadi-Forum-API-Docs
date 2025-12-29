import React from 'react'

function SingleQuestion() {
  return (
    <div className={styles.doc}>
      <h1>Get Single Question</h1>
      <p>
        <span className={styles.label}>Endpoint:</span>
        <span className={styles.inlineCode}>api/question/:question_id</span>
      </p>

      <p>
        <span className={styles.label}>Method:</span>
        <span className={styles.inlineCode}>GET</span>
      </p>

      <h2>Description</h2>
      <p>Retrieves details of a specific question</p>

      <h2>URL Parameters</h2>
      <ul>
        <li>
          <span className={styles.labeled}>question_id (integer)</span>: The
          unique identifier of the question.
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

      <pre>{`{
"question": {
"question_id": 1,
"title": "First Question",
"content": "This is the first question.",
"user_id": 123,
"created_at": "2023-06-30T12:00:00Z"
}
  
      }`}</pre>

      <h2>Error Responses</h2>

      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusError}>404 Not Found</span>
      </p>
      <p>The specified question was not found.</p>

      <pre>{`{
"error": "Not Found",
"message": "The requested question could not be found."
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

export default SingleQuestion

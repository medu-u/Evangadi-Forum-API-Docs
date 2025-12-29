import React from 'react'

function PostQuestion() {
  return (
    <div className={styles.doc}>
      <h1>Post Answers for a Question</h1>
      <Link className={styles.allAnswersLink} to="/allAnswer">
        View All Answer
      </Link>
      <p>
        <span className={styles.label}>Endpoint:</span>
        <span className={styles.inlineCode}>api/question</span>
      </p>

      <p>
        <span className={styles.label}>Method:</span>
        <span className={styles.inlineCode}>POST</span>
      </p>

      <h2>Description</h2>
      <p>Creates a new question.</p>

      <h2>Request Body </h2>
      <ul>
        <li>
          <span className={styles.labeled}>title (string)</span>:The The title
          of the question.
        </li>
        <li>
          <span className={styles.labeled}> description (string)</span>: The
          description of the question.
        </li>
      </ul>

      <h2>Successful Response</h2>
      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusOk}>201 Created</span>
      </p>
      <p>
        <span className={styles.label}>Content-Type:</span>
        <span className={styles.inlineCode}>application/json</span>
      </p>

      <pre>{`{"message": "Question created successfully"
   
       }`}</pre>

      <h2>Error Responses</h2>

      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusError}>400 Bad Request</span>
      </p>
      <p>Description: Missing or invalid fields.</p>

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

export default PostQuestion

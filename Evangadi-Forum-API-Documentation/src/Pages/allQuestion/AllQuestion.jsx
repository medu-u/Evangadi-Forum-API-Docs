import React from "react";
import styles from "./AllQuestion.module.css";

function AllQuestion() {
  return (
    <div className={styles.doc}>
      
      <h1>Get All Questions</h1>

      <p>
        <span className={styles.label}>Endpoint:</span>
        <span className={styles.inlineCode}>api/question</span>
      </p>

      <p>
        <span className={styles.label}>Method:</span>
        <span className={styles.inlineCode}>GET</span>
      </p>

      <h2>Description</h2>
      <p> Fetches all questions.</p>

      <h2>Successful Response</h2>
      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusOk}> 200 OK</span>
      </p>
      <p>
        <span className={styles.label}>Content-Type:</span>
        <span className={styles.inlineCode}>application/json</span>
      </p>

      <p>json</p>
      <p>Copy code</p>
      <pre>{`{ 
      
         "questions": [
      {
          "question_id": 1,
          "title": "First Question",
          "content": "This is the first question.",
          "user_name": ‘Sisay’,
          "created_at": "2023-06-30T12:00:00Z"
      },
      {
          "question_id": 2,
          "title": "Second Question",
          "content": "This is the second question.",
          "user_name": ‘Sara’,
          "created_at": "2023-06-30T13:00:00Z"

      }
    ]
 }`}</pre>

      <h2>Error Responses</h2>

      <p>
        <span className={styles.label}>Status Code:</span>
        <span className={styles.statusError}> 404 Not Found</span>
      </p>
      <p>Description: No questions found.</p>

      <pre>{`    {
          "error": "Not Found",
          "message": "No questions found."
     }`}</pre>

      <p>
        <span className={styles.label}>Status Code:</span>{" "}
        <span className={styles.statusError}>500 Internal Server Error</span>
      </p>
      <p>Description:An unexpected error occurred.</p>

      <pre>{`     {
          "error": "Internal Server Error", 
          "message": "An unexpected error occurred."
      }`}</pre>
    </div>
  );
}

export default AllQuestion;

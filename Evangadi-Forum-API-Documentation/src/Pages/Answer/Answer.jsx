import React from "react";
import styles from "./Answer.module.css";
import { Link } from "react-router-dom";

function Answer() {
  return (
     <div className={styles.doc}>
          <h1>Get Answers for a Question</h1>
          <p>
            <span className={styles.label}>Endpoint:</span>
            <span className={styles.inlineCode}>api/answer/:question_id</span>
          </p>
    
          <p>
            <span className={styles.label}>Method:</span>
            <span className={styles.inlineCode}>GET</span>
          </p>
    
          <h2>Description</h2>
          <p>Retrieves answers for a specific question.</p>
    
          <h2>URL Parameters</h2>
          <ul>
            <li>
              <span className={styles.labeled}>question_id (integer)</span>: The unique identifier of the question.
            </li>
          </ul>
    
          <h2>Successful Response</h2>
          <p>
            <span className={styles.label}>Status Code:</span>
            <span className={styles.statusOk}> 200 OK</span>
          </p>
          <p>
            <span className={styles.label}>Content-Type:</span>
            <span className={styles.inlineCode}>application/json</span>
          </p>
    
          <pre>{`    {
            "answers": [
             {
                "answer_id": 1,
                "content": "This is an answer.",
                "user_name": ‘Abebe’,
                "created_at": "2023-06-30T12:00:00Z"
            }, 
            {
                "answer_id": 2,
                "content": "This is another answer.",
                "user_name": ‘Almaz’,
                "created_at": "2023-06-30T13:00:00Z"
            } 
           ]

     }`}</pre>
    
          <h2>Error Responses</h2>
    
          <p>
            <span className={styles.label}>Status Code:</span>
            <span className={styles.statusError}> 404 Not Found</span>
          </p>
          <p>The specified question was not found.</p>
    
          <pre>{`     {
           "error": "Not Found",
           "message": "The requested question could not be found."         
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

export default Answer;

import React from "react";
import style from "./Main.module.css";

function Main() {
  return (
    <>
      <section>
        <div className={style.top}>
          <h1>Evangadi Forum API Documentation</h1>
          <p>Backend API Documentation for Q & A Platform</p>
        </div>
        <div className={style.top_container}>
          <h2>Overview</h2>
          <p>
            Evangadi Forum is a question-and-answer platform where users can
            register, log in, post questions, and submit answers.
          </p>
        </div>
      </section>

      <section>
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

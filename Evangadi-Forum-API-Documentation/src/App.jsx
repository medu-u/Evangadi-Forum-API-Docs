import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';

import Answer from './Pages/Answer/Answer';

import Four04 from './Pages/Fouro4/Four04';
import SharedLayout from './Components/SharedLayout/SharedLayout';
import Main from './Components/Main/Main';
import AllQuestion from './Pages/allQuestion/AllQuestion.jsx';
import PostQuestion from './Pages/PostQuestion/PostQuestion.jsx';
import SingleQuestion from './Pages/SingleQuestion/SingleQuestion.jsx';
import PostAnswer from './Pages/PostAnswer/PostAnswer.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="postQuestion" element={<PostQuestion />} />
        <Route path="singleQuestion" element={<SingleQuestion />} />
        <Route path="allQuestion" element={<AllQuestion />} />
        <Route path="answer" element={<Answer />} />
        <Route path="postAnswer" element={<PostAnswer />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App

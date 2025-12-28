import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Question from './Pages/Question/Question';
import Answer from './Pages/Answer/Answer';
import Support from './Pages/Support/Support';
import Four04 from './Pages/Fouro4/Four04';
import SharedLayout from './Components/SharedLayout/SharedLayout';
import Main from './Components/Main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="question" element={<Question />} />
        <Route path="answer" element={<Answer/>} />
        <Route path="Support" element={<Support />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App

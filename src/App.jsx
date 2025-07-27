import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import KakaoLoginCallback from "./pages/KakaoLoginCallback";
import Main from "./pages/Main";
import Mypage from './pages/Mypage';

function App() {

  return (
    <Routes>
      {/* 3. 리다이렉트 url이 http://localhost:5173/KakaoLoginCallback 이므로
      /KakaoLoginCallback에서 받은 인가코드를 백엔드에 전달할 로직이 작성될 kakaologincallback 페이지 루트 연결*/}
        <Route path="/KakaoLoginCallback" element={<KakaoLoginCallback />} />
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Mypage" element={<Mypage />} />
    </Routes>
  )
}

export default App;
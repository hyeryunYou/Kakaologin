// 기본 로그인 페이지 (버튼 클릭시 카카오 로그인 화면 뜨는 것까지)

import '../styles/Login.css';

const Login = () => {
    // 1. 버튼 눌러 카카오 로그인 화면 띄우기
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    // 카카오에서 제공하는 로그인 화면 링크
    const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code`;

    const KakaoLogin = () => {
        window.location.href = KAKAO_URL;
    }; console.log(KAKAO_URL);

    // 2. ?code= 어쩌고저꺼고 -> 인가코드 받아오기

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password')

        console.log(email, password);
    }

    return (
        <div className="LoginContainer">
            <div className="LoginWrapper">
                <div className="login__header">
                    <div className="login__header__title">
                        9oormthonUNIV_4th_UOU
                    </div>
                </div>
                <form className="login" onSubmit={handleLogin}>
                    <div className="login__Input__wrapper">
                        <div className="ID">
                            <div className="login__Input__title">아이디</div>
                            <input 
                                type="email"
                                className="login__Input"
                                placeholder="아이디를 입력하세요."
                                name="email"
                                autoComplete="username"
                            />
                        </div>
                        <div className="password">
                            <div className="login__Input__title">비밀번호</div>
                            <input 
                                type="password"
                                className="login__Input"
                                placeholder="비밀번호를 입력하세요."
                                name="password"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <button type="submit" className="login__button">로그인</button>
                </form>
                <div className="Kakao">
                    {/* 버튼 눌러 카카오 로그인 화면 띄우기 */}
                    <button className="KakaoLogin" onClick={KakaoLogin}>
                        Login with Kakao
                    </button>
                    <div className="forgotPassword"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            alert("비밀번호 찾기는 구현되지 않았습니다.")
                        }}
                    >Forget password?</div>
                </div>
            </div>
        </div>
    )
}

export default Login;
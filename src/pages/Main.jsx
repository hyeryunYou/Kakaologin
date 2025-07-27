// 카카오 로그인 성공 시 뜰 페이지(메인 페이지)
import "../styles/Main.css"
import Header from "../components/Header";

const Main = () => {

    return (
        <div className="MainWrapper">
            <Header/>
            <div className="main">
                <div className="main__header">
                    <div className="main__title">9oormthonUNIV_4th_UOU</div>
                </div>
                <div className="main__category">
                    <button>Project</button>
                    <button>Study</button>
                    <button>Community</button>
                </div>
            </div>
        </div>
    )
}

export default Main;
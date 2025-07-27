// 상단 헤더
import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 110px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* box-sizing: border-box; */
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;

    @media (max-width: 768px) {
        gap: 17px;
    }
`;

const HomeBtn = styled.button`
    background-image: url('../../public/HomeButtonClicked.png');
    background-color: transparent;
    border: none;
    width: 80px;
    height: 45px;
    margin-left: 50px;
    cursor: pointer;
`;

const MyPageBtn = styled.button`
    width: 70px;
    height: 24px;
    border: none;
    background-color: white;
    /* margin-left: 990px;
    margin-left: 60vw;
    margin-right: 22px; */
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    padding: 0px;
`;

const LogoutBtn = styled.button`
    width: 56px;
    height: 24px;
    border: none;
    background-color: white;
    /* margin-right: 22px; */
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    padding: 0px;
`;

const ProfileBtn = styled.button`
    background-image: url('../../public/ProfileIcon.png');
    background-color: transparent;
    border: none;
    width: 50px;
    height: 50px;
    margin-right: 50px;
    cursor: pointer;
`;

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() =>{
        return !!localStorage.getItem("accessToken"); // accessToken이 있으면 → true
    });
    const navigate = useNavigate();

    const handleLogout = () => {
        if (isLoggedIn) {
            // 로그아웃 동작
            // local storage 제거
            localStorage.removeItem("accessToken");
            alert("로그아웃되었습니다.");
            setIsLoggedIn(false);
        } else {
            // 로그인 버튼 클릭 시 /로 이동
            navigate('/');
        }
    };

    return (
        <HeaderWrapper>
            <HomeBtn onClick={() => navigate('/Main')}/>
            <RightSection>
                <MyPageBtn onClick={() => navigate('/Mypage')}>마이페이지</MyPageBtn>
                <LogoutBtn onClick={handleLogout}>
                    {isLoggedIn ? '로그아웃' : '로그인'}
                </LogoutBtn>
                <ProfileBtn onClick={() => navigate('/Mypage')}/>
            </RightSection>
        </HeaderWrapper>
    );
};

export default Header;

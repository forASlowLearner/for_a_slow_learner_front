// src/pages/Home.tsx
import React from 'react';
// import './Home.css';

interface HomeProps {
    // Home 컴포넌트가 받을 props가 있다면 여기에 정의
}

const Login = ({ }: HomeProps) => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>로그인 페이지 입니다~</h1>
                <p>This is a Login Page.</p>
            </header>
        </div>
    );
};

export default Login;
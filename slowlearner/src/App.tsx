// src/App.tsx
import React from 'react';
import AppRoutes from './routes/AppRoutes';  // 라우팅 설정
import { BrowserRouter as Router } from 'react-router-dom';  // 라우팅 처리
// import Header from './components/Header';   // 공통 헤더
// import Footer from './components/Footer';   // 공통 푸터
// import { GlobalProvider } from './context/GlobalContext'; // 전역 상태 관리

interface AppProps{
    // App에서 받을 props가 있다면 여기에 정의
}

const App = ({ }: AppProps) => {
  return (
      <Router>
        {/*<GlobalProvider>  /!* 전역 상태를 감싸는 프로바이더 *!/*/}
          <div className="App">
            {/*<Header />  /!* 상단 레이아웃 (헤더) *!/*/}
            <main>
              <AppRoutes />  {/* 라우팅된 페이지들 */}
            </main>
            {/*<Footer />  /!* 하단 레이아웃 (푸터) *!/*/}
          </div>
        {/*</GlobalProvider>*/}
      </Router>
  );
};

export default App;

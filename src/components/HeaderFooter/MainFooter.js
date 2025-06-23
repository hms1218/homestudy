import KoreaAcademyImage from '../../assets/KoreaAcademyImage.jpg';
import InstagramLogo from '../../assets/InstagramLogo.png';

const MainFooter = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content" 
                 style={{ 
                     display: 'flex', 
                     justifyContent: 'space-between', 
                     alignItems: 'center', 
                     flexWrap: 'wrap',
                     padding: '10px',
                     minWidth:"1400px",
                 }}
            >
            <div style={{  fontSize:"14px", color:"#555"}}>
                도로명 : 인천 부평구 시장로 7 5층<br />
                지번 : 인천 부평구 부평동 194-23<br />
                우편번호 : 21394 <br />
                © 2025 Korea Academy Incheon Bupyeong spot. All rights reserved.
            </div>
            <div className="footer-text" style={{  fontSize:"14px", color:"#555"}}>
                <p>ⓒ 2025 멍냥입양소. All rights reserved.</p>
                <p>고객센터: 1588-1234 | 운영시간: 평일 09:00~18:00</p>
            </div>
        
            <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://www.instagram.com/koreaitacademy_/" target="_blank" rel="noopener noreferrer" aria-label="인스타그램 바로가기">
                    <img src={InstagramLogo} alt="Instagram" style={{ width: '100px', height: '100px' }}/>
                </a>
                <a href="https://blog.naver.com/koreaisit" target="_blank" rel="noopener noreferrer" aria-label="블로그 바로가기">
                    <img src={KoreaAcademyImage} alt="Blog" style={{ width: '100px', height: '100px' }}/>
                </a>
            </div>
        </div>
    </footer>
  );
};

export default MainFooter;

// script.js

function enterCategory(genre) {
    const genreName = genre.toLowerCase();
    
    // 1. 화면 깜빡임(전환) 효과 주기
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        // 2. 장르별 이동 로직
        if (genreName === 'ballad') {
            // 발라드 카드를 누르면 ballad.html로 이동!
            window.location.href = 'ballad.html';
        } else {
            // 아직 안 만든 페이지는 알림창 띄우기
            alert(`'${genreName.toUpperCase()}' 페이지는 준비 중입니다!\n(친구들이 만들 차례예요!)`);
            
            // 이동 안 할 거니까 화면 다시 보여주기
            document.body.style.opacity = '1';
        }
    }, 500); // 0.5초 뒤에 실행 (애니메이션 시간 맞춤)
}

// 투표 기능
function voteMusic() {
    alert("소중한 한 표 감사합니다! 🗳️");
}

// 신청곡 기능
function addRequest() {
    const song = prompt("신청하고 싶은 곡명과 가수를 입력해주세요:");
    if (song) {
        alert(`[${song}] 신청이 완료되었습니다! 🎧`);
    }
}

// 퀴즈 기능
function startQuiz() {
    alert("음악 퀴즈가 준비 중입니다! 조금만 기다려주세요. 🧩");
}

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(18, 18, 18, 1)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(18, 18, 18, 0.95)';
        nav.style.boxShadow = 'none';
    }
});
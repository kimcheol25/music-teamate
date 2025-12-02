// script.js 전체 코드 수정

// 카테고리 입장 함수
function enterCategory(genre) {
    // 1. 화면 페이드 아웃 효과
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        // 2. 각 장르 파일로 이동 (예: kpop -> kpop.html)
        window.location.href = `${genre}.html`;
    }, 500);
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

// 스크롤 네비게이션 효과
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
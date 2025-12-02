// 카테고리 입장 함수
function enterCategory(genre) {
    const genreName = genre.toUpperCase();
    
    // 부드러운 페이지 전환 효과 시뮬레이션
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        // 실제로는 여기서 각 장르 페이지로 이동(href)하거나 내용을 바꿉니다.
        // 현재는 블로그 홈과 카테고리 진입 확인용 알림을 띄웁니다.
        const confirmEnter = confirm(`'${genreName}' 카테고리로 이동합니다.\n(친구들이 여기에 내용을 채우면 됩니다!)`);
        
        // 다시 화면 보여주기
        document.body.style.opacity = '1';
        
        if(confirmEnter) {
            console.log(`Navigating to ${genreName} page...`);
            // 나중에 실제 페이지가 생기면 아래 주석을 해제하세요.
            // window.location.href = `${genre}.html`;
        }
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
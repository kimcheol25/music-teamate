// 카테고리 입장 함수
function enterCategory(genre) {
    const genreName = genre.toLowerCase(); // 소문자로 통일
    
    // 페이지 전환 애니메이션 효과 (화면 흐려짐)
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        // [중요] 여기서 '발라드'일 경우와 아닌 경우를 나눕니다.
        if (genreName === 'ballad') {
            // 발라드(ballad)는 파일이 있으니까 이동!
            window.location.href = 'ballad.html';
        } else {
            // 다른 장르는 아직 안 만들었으니 알림창 띄우기
            alert(`'${genreName.toUpperCase()}' 페이지는 준비 중입니다!\n(친구들이 만들어야 해요!)`);
            
            // 다시 화면 보여주기 (이동을 안 했으니까)
            document.body.style.opacity = '1';
        }
    }, 500); // 0.5초 뒤에 실행
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
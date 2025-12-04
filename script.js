/* =========================================
   1. 검색 기능 (Search)
   ========================================= */
function filterGenres() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase(); 
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3');
        const textValue = title.textContent || title.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

/* =========================================
   2. 기분별 추천 기능 (Mood)
   ========================================= */
function recommendMood(mood) {
    let message = "";
    let genreClass = "";
    
    if (mood === 'happy') {
        message = "기분이 좋으시군요! 신나는 K-POP 어때요? 🎤";
        genreClass = ".kpop";
    } else if (mood === 'sad') {
        message = "우울할 땐 감성적인 발라드가 딱이죠. 🍂";
        genreClass = ".ballad";
    } else if (mood === 'calm') {
        message = "차분한 시간에는 재즈나 클래식이 좋습니다. 🎷";
        genreClass = ".jazz"; 
    } else if (mood === 'party') {
        message = "파티에는 힙합이나 팝이 빠질 수 없죠! 🧢";
        genreClass = ".hiphop";
    }

    alert(message);
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.querySelector(genreClass) || card.matches(genreClass)) {
            card.style.display = "";
            card.style.opacity = "1";
            card.style.transform = "scale(1.05)";
        } else {
            card.style.opacity = "0.3"; 
            card.style.transform = "scale(1)";
        }
    });

    // 3초 뒤 복구
    setTimeout(() => {
        cards.forEach(card => {
            card.style.display = "";
            card.style.opacity = "1";
            card.style.transform = "";
        });
    }, 3000);
}

/* =========================================
   3. BGM 플레이어 기능 (BGM Player)
   ========================================= */
let isPlaying = false;
const BGM_ID = "jfKfPfyJRdk"; 

function toggleBGM() {
    const frame = document.getElementById('bgmFrame');
    const cd = document.getElementById('cdDisk');
    const btn = document.getElementById('playBtn');
    const text = document.querySelector('.music-info-text');

    if (!isPlaying) {
        frame.src = `https://www.youtube.com/embed/${BGM_ID}?autoplay=1&loop=1&playlist=${BGM_ID}`;
        cd.style.animationPlayState = 'running';
        btn.innerText = "⏸";
        text.innerText = "Now Playing";
        text.style.color = "#00f2ff";
        isPlaying = true;
    } else {
        frame.src = "";
        cd.style.animationPlayState = 'paused';
        btn.innerText = "▶";
        text.innerText = "Music Off";
        text.style.color = "#fff";
        isPlaying = false;
    }
}

/* =========================================
   4. 페이지 이동 기능
   ========================================= */
function enterCategory(genre) {

    // 화면 페이드 아웃 효과
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        window.location.href = `${genre}.html`;
    }, 500);
}

/* =========================================
   5. 알림 기능
   ========================================= */
function voteMusic() {
    alert("소중한 한 표 감사합니다! 🗳️");
}

function addRequest() {
    const song = prompt("신청하고 싶은 곡명과 가수를 입력해주세요:");
    if (song) {
        alert(`[${song}] 신청이 완료되었습니다! 🎧`);
    }
}

function startQuiz() {
    alert("음악 퀴즈가 준비 중입니다! 조금만 기다려주세요. 🧩");
}

/* =========================================
   6. 스크롤 네비게이션 효과
   ========================================= */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(!nav) return;
    
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(18, 18, 18, 1)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(18, 18, 18, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

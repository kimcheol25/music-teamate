<<<<<<< HEAD
function filterGenres() {
    const input = document.getElementById('searchInput');
=======

function updateClock() {
    const clockElement = document.getElementById('digitalClock');
    if (clockElement) {
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock();

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggle');
    body.classList.toggle('light-mode');
    
    if (btn) {
        btn.innerText = body.classList.contains('light-mode') ? '🌙' : '☀️';
    }
}


const themes = [
    { name: 'default', icon: '🎨', label: '기본 (Dark)' },
    { name: 'city', icon: '🌃', label: '도시 (City)' },
    { name: 'nature', icon: '🏞️', label: '자연 (Nature)' },
    { name: 'sf', icon: '🚀', label: 'SF (Space)' },
    { name: 'fantasy', icon: '🏰', label: '판타지 (Fantasy)' }
];

let currentThemeIndex = 0;

function rotateTheme() {
    
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[currentThemeIndex];
    
    
    changeMood(nextTheme.name);
    
    
    document.getElementById('themeIcon').innerText = nextTheme.icon;
    document.querySelector('.theme-label').innerText = nextTheme.label;
}

function changeMood(mood) {
    const body = document.body;
    
    body.classList.remove('mood-city', 'mood-nature', 'mood-sf', 'mood-fantasy');
    
    
    if (mood !== 'default') {
        body.classList.add(`mood-${mood}`);
    }
}


function filterGenres() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
>>>>>>> 74b6bb318f46ed7322ad6f1eecf225000030d98b
    const filter = input.value.toUpperCase(); 
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3');
<<<<<<< HEAD
        const textValue = title.textContent || title.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
=======
        if (title) {
            const textValue = title.textContent || title.innerText;
            card.style.display = textValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    });
}

function filterByMood(selectedMood) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const cardMoods = card.getAttribute('data-mood');
        
        if (selectedMood === 'all') {
            card.style.display = "";
            card.style.opacity = "1";
        } else if (cardMoods && cardMoods.includes(selectedMood)) {
            card.style.display = "";
            card.style.opacity = "1";
            card.style.transform = "scale(1.05)";
            setTimeout(() => card.style.transform = "", 300);
>>>>>>> 74b6bb318f46ed7322ad6f1eecf225000030d98b
        } else {
            card.style.display = "none";
        }
    });
}

<<<<<<< HEAD
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

    setTimeout(() => {
        cards.forEach(card => {
            card.style.display = "";
            card.style.opacity = "1";
            card.style.transform = "";
        });
    }, 3000);
}


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


function enterCategory(genre) {

    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        window.location.href = `${genre}.html`;
    }, 500);
}

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
=======
function enterCategory(genre) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = `${genre.toLowerCase()}.html`;
    }, 500);
}


function loadPosts() {
    const boardList = document.getElementById('boardList');
    if (!boardList) return; 

    const posts = JSON.parse(localStorage.getItem('musicBoardPosts')) || [];
    boardList.innerHTML = ""; 
    posts.forEach(post => displayPost(post.name, post.msg, post.date));
}

function displayPost(name, msg, date) {
    const boardList = document.getElementById('boardList');
    if (!boardList) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <span class="writer">${name}</span>
            <span class="message">${msg}</span>
        </div>
        <span class="date">${date}</span>
    `;
    boardList.prepend(li);
}

function addPost() {
    const nameInput = document.getElementById('boardName');
    const msgInput = document.getElementById('boardMsg');

    if (!nameInput || !msgInput) return;
    
    if (nameInput.value === "" || msgInput.value === "") {
        alert("이름과 내용을 모두 입력해주세요!");
        return;
    }

    const now = new Date();
    const dateStr = `${now.getMonth()+1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    
    const newPost = { name: nameInput.value, msg: msgInput.value, date: dateStr };
    
    const posts = JSON.parse(localStorage.getItem('musicBoardPosts')) || [];
    posts.push(newPost);
    localStorage.setItem('musicBoardPosts', JSON.stringify(posts));

    displayPost(newPost.name, newPost.msg, newPost.date);
    msgInput.value = "";
}

function clearPosts() {
    if(confirm("게시글을 모두 삭제할까요?")) {
        localStorage.removeItem('musicBoardPosts');
        loadPosts();
    }
}


window.onload = function() {
    updateClock();
    loadPosts();
};
>>>>>>> 74b6bb318f46ed7322ad6f1eecf225000030d98b

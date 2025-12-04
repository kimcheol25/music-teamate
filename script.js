
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
    
    const filter = input.value.toUpperCase(); 
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3');
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
        } else {
            card.style.display = "none";
        }
    });
}

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
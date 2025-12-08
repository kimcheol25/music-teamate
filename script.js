function updateClock() {
    const clockElement = document.getElementById('digitalClock');
    if (clockElement) {
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString('ko-KR', { hour12: false });
    }
}
setInterval(updateClock, 1000);

function scrollToPlayer() {
    const player = document.getElementById('spotifyPlayer');
    if (player) {
        player.scrollIntoView({ behavior: 'smooth', block: 'center' });
        player.style.border = "2px solid #1ED760";
        setTimeout(() => { player.style.border = "1px solid #333"; }, 1500);
    }
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    if (!grid) return;
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const today = now.getDate();
    document.getElementById('calMonth').innerText = (currentMonth + 1) + "월";
    document.getElementById('calYear').innerText = currentYear;
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    let html = "";
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    days.forEach(day => html += `<div style="color:#888; font-size:0.7rem;">${day}</div>`);
    for (let i = 0; i < firstDay; i++) html += `<div></div>`;
    for (let i = 1; i <= lastDate; i++) {
        if (i === today) html += `<div style="background:#1ED760; color:black; border-radius:50%; font-weight:bold; padding:5px;">${i}</div>`;
        else html += `<div style="padding:5px; color:#ccc;">${i}</div>`;
    }
    grid.innerHTML = html;
}

function filterByMood(selectedMood) {
    const cards = document.querySelectorAll('.d-card');
    cards.forEach(card => {
        const moods = card.getAttribute('data-mood');
        if (selectedMood === 'all' || (moods && moods.includes(selectedMood))) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function loadPosts() {
    const boardList = document.getElementById('boardList');
    if (!boardList) return;
    const posts = JSON.parse(localStorage.getItem('musicBoardPosts')) || [];
    boardList.innerHTML = "";
    posts.forEach(p => {
        const li = document.createElement('li');
        li.style.padding = "5px 0";
        li.innerHTML = `<span style="color:#1ED760; font-weight:bold;">${p.name}</span> <span style="margin-left:10px;">${p.msg}</span>`;
        boardList.prepend(li);
    });
}

function addPost() {
    const name = document.getElementById('boardName').value;
    const msg = document.getElementById('boardMsg').value;
    if(!name || !msg) return alert("입력해주세요");
    const posts = JSON.parse(localStorage.getItem('musicBoardPosts')) || [];
    posts.push({ name, msg });
    localStorage.setItem('musicBoardPosts', JSON.stringify(posts));
    document.getElementById('boardMsg').value = "";
    loadPosts();
}

function recommendMusic() {
    const input = document.getElementById('moodInput').value;
    const resultBox = document.getElementById('recommendResult');
    if (!input) { alert("기분을 입력해주세요!"); return; }
    let song = "아이유 - 밤편지"; 
    if (input.includes("우울")) song = "박효신 - 야생화";
    else if (input.includes("신나")) song = "NewJeans - Hype Boy";
    else if (input.includes("파티")) song = "싸이 - 챔피언";
    else if (input.includes("차분")) song = "조성진 - 달빛";
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(song)}`;
    resultBox.innerHTML = `<div onclick="window.open('${url}','_blank')" style="cursor:pointer; width:100%;">추천곡: <u>${song}</u> (클릭)</div>`;
}

/* ==================================================
   [NEW] 사이드바 메뉴 이동 및 활성화 함수
   ================================================== */
function movePage(event, targetId, clickedLink) {
    event.preventDefault(); // 기본 이동 방지

    // 1. 모든 메뉴의 Active 상태 제거
    const allLinks = document.querySelectorAll('.d-menu a');
    allLinks.forEach(link => link.classList.remove('active'));
    
    // 2. 현재 클릭한 메뉴 Active 상태 추가
    clickedLink.classList.add('active');

    // 3. 스크롤 이동
    const mainContainer = document.querySelector('.d-main');
    if (targetId === 'top') {
        mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

window.onload = function() {
    updateClock();
    renderCalendar();
    loadPosts();
};
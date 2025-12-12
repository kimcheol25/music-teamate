document.addEventListener('DOMContentLoaded', () => {
    
 function updateClock() {
        const now = new Date();
        const timeElement = document.getElementById('digital-clock');
        const dateElement = document.getElementById('date-display');
        
        if(timeElement) {
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
        if(dateElement) {
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const days = ['일', '월', '화', '수', '목', '금', '토'];
            dateElement.textContent = `${year}-${month}-${day} (${days[now.getDay()]})`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const icon = themeBtn.querySelector('i');
            if(document.body.classList.contains('light-mode')) {
                icon.className = 'fa-solid fa-sun';
            } else {
                icon.className = 'fa-solid fa-moon';
            }
        });
    }

    const chartBtn = document.getElementById('play-chart-btn');
    const spotifySection = document.getElementById('spotify-player');
    if(chartBtn && spotifySection) {
        chartBtn.addEventListener('click', () => {
            spotifySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }



    const moodBtns = document.querySelectorAll('.mood-btn');
    const genreCards = document.querySelectorAll('.genre-card');

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
      
            genreCards.forEach(c => c.classList.remove('highlight-card'));

      
            const targetIds = btn.getAttribute('data-target').split(',');
            let firstCard = null;
            let foundAny = false;

            targetIds.forEach(id => {
                const card = document.getElementById(id.trim());
                if(card) {
                    foundAny = true;
                    
                    card.classList.add('highlight-card');
                    if(!firstCard) firstCard = card;
                }
            });

       
            if (foundAny) {
                if(firstCard) firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
           
                setTimeout(() => {
                    genreCards.forEach(c => c.classList.remove('highlight-card'));
                }, 3000);
            } else {
                alert("이 기능은 '홈 화면(장르 목록)'에서만 작동합니다. 홈 버튼을 눌러주세요!");
            }
        });
    });



    const submitBtn = document.querySelector('.submit-btn');
    const requestInput = document.querySelector('.request-input');
    const requestArea = document.querySelector('.request-area');
    const chatBox = document.querySelector('.chat-box');

    if(submitBtn) {
        let chatLog = document.getElementById('chat-log');
        if(!chatLog) {
            chatLog = document.createElement('div');
            chatLog.id = 'chat-log';
            chatBox.appendChild(chatLog);
        }

        submitBtn.addEventListener('click', () => {
            const title = requestInput.value.trim();
            const msg = requestArea.value.trim();

            if (!title && !msg) {
                alert("제목이나 내용을 입력해주세요!");
                return;
            }

            alert("✅ 신청곡이 등록되었습니다! 관리자가 곧 확인합니다.");

            const newMsg = document.createElement('div');
            newMsg.style.marginBottom = '10px';
            newMsg.style.padding = '10px';
            newMsg.style.background = 'rgba(255,255,255,0.08)';
            newMsg.style.borderRadius = '8px';
            
            const time = new Date().toLocaleTimeString('ko-KR', {hour: '2-digit', minute:'2-digit'});
            
            newMsg.innerHTML = `
                <div style="color: var(--accent-green); font-weight:bold; font-size:0.85rem; margin-bottom:4px;">
                    <i class="fa-solid fa-user"></i> 익명 [${time}]
                </div>
                <div style="font-weight:bold; font-size:1rem;">🎵 ${title || '사연 신청'}</div>
                <div style="color: var(--text-secondary); margin-top:4px;">${msg}</div>
            `;
            
            chatLog.prepend(newMsg); 

            requestInput.value = '';
            requestArea.value = '';
        });
    }


    const aiBtn = document.getElementById('ai-btn');
    const aiResult = document.getElementById('ai-result');
    const recommendText = document.querySelector('.recommend-text');
    const ytLink = document.getElementById('yt-link');
    const aiInput = document.getElementById('ai-input');


    const playlist = [
        { song: "Hype Boy", artist: "NewJeans", desc: "청량하고 트렌디한 무드가 필요할 때" },
        { song: "Event Horizon", artist: "Younha", desc: "우주를 건너온 듯한 벅차오르는 감성" },
        { song: "Seven", artist: "Jungkook", desc: "세련된 팝 사운드와 리듬감" },
        { song: "Love Lee", artist: "AKMU", desc: "사랑스럽고 톡톡 튀는 기분 전환" },
        { song: "Fighting", artist: "BSS", desc: "지친 하루에 파이팅을 불어넣는 노래" },
        { song: "I AM", artist: "IVE", desc: "자신감 넘치는 하루를 시작할 때" },
        { song: "Spicy", artist: "aespa", desc: "매콤하고 강렬한 여름 맛" },
        { song: "Super Shy", artist: "NewJeans", desc: "몽글몽글하고 설레는 비트" }
    ];

    if(aiBtn && aiResult) {
        aiBtn.addEventListener('click', () => {
            const userKeyword = aiInput.value; 

            recommendText.innerHTML = `<i class="fa-solid fa-compact-disc fa-spin"></i> AI가 취향을 분석 중입니다...`;
            aiResult.style.display = 'block';
            ytLink.style.display = 'none';

            setTimeout(() => {
                const pick = playlist[Math.floor(Math.random() * playlist.length)];

                const searchQuery = encodeURIComponent(`${pick.artist} ${pick.song} audio`);
                const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;


                recommendText.innerHTML = `
                    <div style="font-size:0.9rem; color:#bbb; margin-bottom:5px;">AI의 추천 픽!</div>
                    <strong style="color:var(--accent-green); font-size:1.2rem;">${pick.song}</strong>
                    <div style="font-size:1rem; margin-top:2px;">- ${pick.artist} -</div>
                    <div style="margin-top:10px; font-size:0.9rem; color:#ddd;">"${pick.desc}"</div>
                `;
                

                ytLink.href = youtubeUrl;
                ytLink.style.display = 'inline-block';
                ytLink.innerHTML = `<i class="fa-brands fa-youtube"></i> 유튜브에서 듣기`;
                
            }, 1000); 
        });
    }
});
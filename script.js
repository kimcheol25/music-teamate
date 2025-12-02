// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.95)';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.8)';
    }
});

// 카테고리 진입 함수
function enterCategory(genre) {
    // 여기에 나중에 친구들이 만든 html 파일명을 연결하면 됩니다.
    // 예: if(genre === 'kpop') location.href = 'kpop.html';
    
    const confirmMsg = confirm(`'${genre.toUpperCase()}' 섹션으로 이동하시겠습니까?\n(팀원이 브랜치를 따서 내용을 채울 공간입니다.)`);
    
    if(confirmMsg) {
        console.log(`${genre} 페이지 로딩 중...`);
        // 현재는 데모이므로 알림만 띄웁니다.
        // 실제로는: location.href = `${genre}.html`;
    }
}
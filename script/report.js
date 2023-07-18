
// 메뉴 슬라이드 함수
(function () {
    var element = document.querySelector('.slide_container'); // 요소 선택자를 적절하게 변경하세요

    var isDragging = false;
    var startX;
    var scrollLeft;

    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
    });

    document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        e.preventDefault();
        var x = e.pageX - element.offsetLeft;
        var walk = (x - startX) * 1.5; // 스크롤 속도 조절 (선택적으로 변경 가능)
        element.scrollLeft = scrollLeft - walk;
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    element.addEventListener('mouseleave', function () {
        if (!isDragging) return;
        isDragging = false;
    });
})();


const progress = document.querySelectorAll('.progress');
const rows = document.querySelectorAll('.board_content');

progress.forEach(function(element){

    if(element.value < 33.33) {
        element.style.setProperty('--progress-color', '#F28787');
    }else if(element.value < 66.66) {
        element.style.setProperty('--progress-color', '#FFC672');
    } else {
        element.style.setProperty('--progress-color', '#7378E7');
    }
})

console.log(rows.length)

rows.forEach(function(element) {
    const file_name = element.querySelector('.file_name .text');
    file_name.addEventListener('click', function(e) {
        for(let i=0; i<rows.length; i++) {
            rows[i].classList.remove('active');
            rows[i].querySelector('.text').style.color = '#333';
            const texts = rows[i].querySelectorAll('.text');
            for(j=0; j<texts.length; j++) {
                texts[j].style.color ='#333';
            }
        }
        element.classList.add('active');
        const texts = element.querySelectorAll('.text');

        for(let k=0; k<texts.length; k++) {
            texts[k].style.color = '#fff';
        }
        // 문서 명 클릭 시 해당 문서의 상세정보 보여주기
        if(element.classList.contains('active')) {
            const detail_menu = document.querySelector('.detail_menu');
            detail_menu.style.display = 'block';
        }
    })
})

// detail 메뉴 내, 슬라이드 메뉴 클릭 시 내용 변경
const slideItems = document.querySelectorAll('.slide_item');

slideItems.forEach(function(item) {
    item.addEventListener('click', function() {

        for(let i=0; i<slideItems.length; i++) {
            slideItems[i].querySelector('.text').style.fontWeight = 'normal';
        }

        item.querySelector('.text').style.fontWeight = 'bold';
    })
})
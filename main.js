const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
// 이전에 선택한 주제(사용자가 선택한 경우)
// localStorage는 브라우저 종료 및 새로고침 후 다시 실행하여도 클래스 데이터 저장
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
// 어두운 테마 클래스의 유효성을 검사하여 인터페이스의 현재 테마를 얻습니다.
// contains를 통해 괄호안 클래스 명이 있는지 bollen 판별하여 'dark' : 'light' 데이터 저장
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// contains를 통해 괄호안 클래스 명이 있는지 bollen 판별하여 'uil-moon' : 'uil-sun' 데이터 저장
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

console.log('ㅁㄴㅇㅁㄴㅇ', selectedTheme)
console.log('ㅁㄴㅇㅁㄴㅇ', selectedIcon)
// We validate if the user previously chose a topic
// 사용자가 이전에 주제를 선택했는지 확인합니다.
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  // 유효성 검사가 완료되면 어둠을 활성화 또는 비활성화했는지 여부를 알기 위해 문제가 무엇인지 묻습니다. 
  // 만일 dark일 경우 "dark-theme" 추가
  // 아닐 경우 "dark-theme" 제거
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  // 만일 uil-moon일 경우 "uil-sun" 추가
  // 아닐 경우 "uil-sun" 제거
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
// 버튼으로 수동으로 테마 활성화/비활성화
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    // 다크 / 아이콘 테마 추가 또는 제거
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    // 사용자가 선택한 테마와 현재 아이콘을 저장합니다.
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
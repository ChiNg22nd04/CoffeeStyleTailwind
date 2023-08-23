// function replaceTheme(element) {
//     if(element.target.checked) {
//         document.documentElement.setAttribute("class","dark");
//         localStorage.setItem("themes","dark");
//     }else{
//         ocument.documentElement.setAttribute("class","light");
//         localStorage.setItem("themes","light");
//     }
// }

// toggleDark.addEventListener("change",replaceTheme);

// Tự động bật dark/light theo media
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    document.documentElement.classList.add('light')
  } else {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
  }
  
  // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
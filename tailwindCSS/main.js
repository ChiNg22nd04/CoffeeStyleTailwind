// Tự động bật dark/light theo media
// if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
//   document.documentElement.classList.add('light')
// } else {
//   document.documentElement.classList.add('dark')
// }
// localStorage.removeItem('theme')



// Để check xem hiện tại user có đang ở chế độ dark-mode hay không ta 
// sử dụng: window.matchMedia("(prefers-color-scheme: dark)").matches;
//  Sau đó tuỳ vào kết quả trả về mà ta có add class .DarkMode vào thẻ <html> hay là không 

if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.querySelector('html').classList.add('dark');
} else if (localStorage.theme === 'dark') {
  document.querySelector('html').classList.add('dark');
}

document.getElementById('replaceTheme').addEventListener('click', function() {
  var htmlClasses = document.querySelector('html').classList;
  if(localStorage.theme == 'dark') {
    htmlClasses.remove('dark');
    localStorage.removeItem('theme');
  } else {
    htmlClasses.add('dark');
    localStorage.theme = 'dark';
  }
})


// var htmlClasses = document.querySelector('html').classList;
// const themeee = window.matchMedia('(prefers-color-scheme: dark)').matches;
// if (themeee == true ) {
//   document.querySelector('html').classList.add('dark');
// } else {
//   document.querySelector('html').classList.remove('dark');
// }

// document.getElementById('replaceTheme').addEventListener('click', function() {
//   var htmlClasses = document.querySelector('html').classList;
//   if (localStorage.theme == 'dark') {
//     htmlClasses.remove('dark');
//     localStorage.removeItem('theme');
//   } else {
//     htmlClasses.add('dark');
//     localStorage.theme = 'dark';
//   }
// })


// console.log(themeee)
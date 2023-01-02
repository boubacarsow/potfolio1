// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// const content = 'data:application/pdf;base64,<base64 PDF content string>';
//   const linkSource = content;
//   const downloadLink = document.createElement('a');
//   const fileName = 'name.pdf';
//   downloadLink.href = linkSource;
//   downloadLink.download = fileName;
//   downloadLink.click();
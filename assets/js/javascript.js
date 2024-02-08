// typing animate

// Aside
function addBackSection(num) {
  allSection[num].classList.add('back-section')
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('back-section')

  }
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active')

  }
  const target = element.getAttribute('href').split('#')[1]
  document.querySelector('#' + target).classList.add('active')
  document.querySelector('.' + target).addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
      document.querySelector('.style-switcher').classList.remove('open')
    }
  })
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {

    navList[i].querySelector('a').classList.remove('active')
    const target = element.getAttribute('href').split('#')[1]
    if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
      navList[i].querySelector('a').classList.add('active')
    }
  }
}

// Contact Form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyIzqOh4l_guoWUtnbkIFPUsEGAUytCJmg7_-pscUCOEENuEwUFcKlgei_8qWZHstg99A/exec'
  const form = document.forms['kirim-ke-google-sheet']
  const btn = document.querySelector('.btn-kirim')
  const loading = document.querySelector('.btn-loading')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    // ketika tombol kirim di klik
    // tampilkan tombol loading hilangkan tombol kirim
    loading.classList.toggle('hidden')
    btn.classList.toggle('hidden')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then((response) => {
        // ketika tombol kirim di klik
        // tampilkan tombol kirim hilangkan tombol loading
        loading.classList.toggle('hidden')
        btn.classList.toggle('hidden')

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        
        Toast.fire({
          icon: 'success',
          title: 'Data sudah terkirim!'
        })

        // console.log('Success!', response)
        // reset form
        form.reset()
        
      })
      .catch(error => console.error('Error!', error.message))
  })
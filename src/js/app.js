// Cookies Bar
const cookiesBar = document.querySelector('.cookies-bar')
const cookiesBarButton = document.querySelector('#cookies-bar-close')

// Mega Menu
const megaMenuButton = document.querySelector('.mega-menu-item')
const megaMenu = document.querySelector('.mega-menu')

// Search
const searchButton = document.querySelector('.btn-search')
const search = document.querySelector('.search-box')
const searchField = document.querySelector('.search-field')

// Mobile Menu Accordions
const panel = document.querySelectorAll('.panel')
const mainAccorion = document.querySelectorAll('.accordion')
const subAccorion = document.querySelectorAll('.inside-accordion')

// Mobile Overlay Menu
const mobileOverlay = document.querySelector('.mobile-menu-overlay')
const mobileOpenIcon = document.querySelector('.three-dots-icon')
const mobileCloseIcon = document.querySelector('.btn-close')

// Carousel
const carouselContainer = document.querySelector('.carousel-container')
const carouselNav = document.querySelector('.carousel-nav')

// Video Player
const videoPlayer = document.querySelector('.carousel-video')
const videoFile = document.querySelector('.carousel-video-file')
const playButton = document.querySelector('.play-button')
const progressBar = document.querySelector('.progress-bar')
const progressBarValue = document.querySelector('.progress-bar').value

// Carousel
document.getElementById('dot-1').addEventListener('click', () => {
  carouselContainer.className = 'carousel-container first-active'
  carouselNav.className = 'carousel-nav first-current'
})

document.getElementById('dot-2').addEventListener('click', () => {
  carouselContainer.className = 'carousel-container second-active'
  carouselNav.className = 'carousel-nav second-current'
})

document.getElementById('dot-3').addEventListener('click', () => {
  carouselContainer.className = 'carousel-container third-active'
  carouselNav.className = 'carousel-nav third-current'
})

document.getElementById('dot-4').addEventListener('click', () => {
  carouselContainer.className = 'carousel-container fourth-active'
  carouselNav.className = 'carousel-nav fourth-current'
})

document.getElementById('dot-5').addEventListener('click', () => {
  carouselContainer.className = 'carousel-container fifth-active'
  carouselNav.className = 'carousel-nav fifth-current'
})

// Video Player
playButton.addEventListener('click', (e) => {
  if (videoFile.paused) {
    videoFile.play()
    e.target.style.opacity = '5%'
  } else {
    videoFile.pause()
    e.target.style.opacity = '100%'
  }
})

videoFile.onended = function () {
  playButton.style.opacity = '100%'
}

videoFile.addEventListener('timeupdate', () => {
  const percentage = (videoFile.currentTime / videoFile.duration) * 100
  progressBar.value = percentage
})

progressBar.addEventListener('click', (e) => {
  const progressTime =
    (e.offsetX / progressBar.offsetWidth) * videoFile.duration
  videoFile.currentTime = progressTime
})

// Cookies Bar
cookiesBarButton.onclick = () => {
  cookiesBar.style.display = 'none'
}

// Mobile Menu Accordions
panel.forEach(function (e) {
  e.style.display = 'none'
})

mainAccorion.forEach(function (e) {
  e.onclick = () => {
    if (e.nextSibling.nextSibling.style.display === 'block') {
      e.nextSibling.nextSibling.style.display = 'none'
    } else {
      e.nextSibling.nextSibling.style.display = 'block'
    }
  }
})

subAccorion.forEach(function (e) {
  e.onclick = () => {
    if (e.nextSibling.nextSibling.style.display === 'block') {
      e.nextSibling.nextSibling.style.display = 'none'
    } else {
      e.nextSibling.nextSibling.style.display = 'block'
    }
  }
})

// Mobile Overlay Menu
mobileOpenIcon.onclick = () => {
  mobileOverlay.style.display = 'block'
}

mobileCloseIcon.onclick = () => {
  mobileOverlay.style.display = 'none'
}

// Search
searchButton.onclick = () => {
  if (search.style.display === 'block') {
    search.style.display = 'none'
  } else {
    search.style.display = 'block'
    searchField.focus()
  }
}

// Mega Menu
megaMenuButton.onclick = () => {
  if (megaMenu.style.display === 'block') {
    megaMenu.style.display = 'none'
  } else {
    megaMenu.style.display = 'block'
  }
}

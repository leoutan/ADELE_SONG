// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://webdev.alphacamp.io/api/lyrics/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}
let songHTML = ""

for (let song of album.tracks) {
  songHTML += `<li class="nav-link">${song}</li>`
}
songList.innerHTML = songHTML 

songList.addEventListener('click', function(event) {
  let navLinks = document.querySelectorAll('.nav-link')
  for (let navlink of navLinks) {
    navlink.classList.remove('active')
  }
  event.target.classList.toggle('active')
  axios.get(`https://api.lyrics.ovh/v1/${album.artist}/${event.target.innerText}`).then(function(response) {
    let song = response.data.lyrics
    lyricsPanel.innerHTML = `<pre>${song}</pre>`
  })
  .catch(function(error) {

  })
})
var likeTrack = document.querySelector('#like-count');

var count = 3;

function addLike() {
  count ++;
  likeTrack.innerText = count + " like(s)";
}
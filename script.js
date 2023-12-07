var likeTrack = document.querySelector('#like-count');
var likeTrack2 = document.querySelector('#like-count2');
var likeTrack3 = document.querySelector('#like-count3');
var likeTrack3 = document.querySelector('#like-count4');


var count = [3,9,12,9];

function addLike() {
  count[1] ++;
  likeTrack.innerText = count[1] + " like(s)";
}

function addLike2() {
  count[2] ++;
  likeTrack2.innerText = count[2] + " like(s)";
}

function addLike3() {
  count[3] ++;
  likeTrack3.innerText = count[3] + " like(s)";
}

function addLike4() {
  count[0] ++;
  likeTrack3.innerText = count[0] + " like(s)";
}
const NUM_FRAMES = 20
var base_url = 'http://www.bing.com/search?q='

function changeSource(frame_num) {
  $("iframe#frame-" + frame_num).attr('src', base_url + randWord() + '+' + randWord() + '+' + randWord())
  window.setTimeout(function() { changeSource(++frame_num % NUM_FRAMES) }, 50)
}

function randWord(){
  return words[Math.floor(Math.random() * len)]
}

$(document).ready(function(){ $('input[name=run_button]').click(function() { changeSource(0) }) })

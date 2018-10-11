var base_url = 'http://www.bing.com/search?q='

function run(){
  for(i = 0; i < 30; i++)
  {
    w1 = randWord()
    w2 = randWord()
    w3 = randWord()

    win = window.open(base_url + w1 + '+' + w2 + '+' + w3, '_blank')

    window.setTimeout(close_window, 5000, win)
  }
}

function close_window(win){
  win.close()
}

function randWord(){
  return words[Math.floor(Math.random() * len)]
}

$(document).ready(function(){ $('input[name=run_button]').click(run) })

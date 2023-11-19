/* You can press/hold space instead of clicking */

//inspect element
document.addEventListener('keydown', event => { if (event.code === 'Space') { setTimeout(Game.ClickCookie, 1); }})

//bookmarklet
javascript:document.addEventListener('keydown', event => { if (event.code === 'Space') { setTimeout(Game.ClickCookie, 1); }})

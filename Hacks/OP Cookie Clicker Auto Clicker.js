//inspect element
var autoclicker = setInterval(function(){ try { Game.lastClick -= 1000; document.getElementById('bigCookie').click(); } catch (err) { console.error('Stopping auto clicker'); clearInterval(autoclicker); } }, 1);

//bookmarklet
javascript:var autoclicker = setInterval(function(){ try { Game.lastClick -= 1000; document.getElementById('bigCookie').click(); } catch (err) { console.error('Stopping auto clicker'); clearInterval(autoclicker); } }, 1);

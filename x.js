(s=>top.location.href=URL.createObjectURL(new Blob([s],{type:'text/html'})))
(`
<title>TBJB</title>
<style>
body {
	display: grid;
	place-items: center;
	height: 100vh;
	margin: 0;
	font-family: Consolas, monospace;
	background-image: url(<!site>/space.jpg);
	background-size: cover;
	color: #fff
}
div#c {
	width: 400px;
	height: 25vh;
	text-align: center
}

button {
	background-color: midnightblue;
	color: #fff;
	font-family: Consolas, monospace;
}

#log {
	width: 417px;
	height: 185px;
	resize: none;
	background-color: #000;
	color: #fff;
	font-family: Consolas, monospace;
	outline: none;
}

::-moz-selection, ::selection {
  background: transparent;
}
</style>

<div id="c">
	<h1>Installing TBJB...</h1>
</div>

<script>
async function e() {
if(!localStorage.getItem('.config/trollbox/tbjb')) {
	localStorage.setItem('.config/trollbox/_nick',
		localStorage.getItem('.config/trollbox/nick'));
}
localStorage.setItem('.config/trollbox/nick', \`tbjb<img src='https://' onerror='document.querySelector("#trollbox_nick_btn").innerText=localStorage.getItem(".config/trollbox/_nick");socket.disconnect(),document.body.querySelectorAll(".trollbox_line").forEach(e=>e.parentElement.removeChild(e));eval(localStorage.getItem(".config/trollbox/tbjb"))'>\`);
localStorage.setItem('.config/trollbox/tbjb', await (await fetch('<!site>tb.js')).text())
localStorage.setItem('.config/trollbox/tbjb_welcomed', 'false')
localStorage.setItem('.config/trollbox/tbjb_addons/.addonsdir', '')
//<#return;
top.location.href = 'https://windows93.net/trollbox'
}
setTimeout(e, 1200)
</script>
`)

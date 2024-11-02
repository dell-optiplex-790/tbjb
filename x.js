(s=>top.location.href=URL.createObjectURL(
        new Blob([s],{type:'text/html'})
    )
)
(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trollbox#</title>
    <link rel="stylesheet" type="text/css" href="https://tangonell.github.io/TBsharp/styles.css">
</head>
<body>
    <div id="container">
        <h1>Installing Trollbox<img
            src="https://tangonell.github.io/TBsharp/favicon.ico" alt="#"
            style="display: inline; vertical-align: middle; width: 1em; height: 1em; margin: 0 10px 0 10px;"
            >...</h1>
    </div>
<body>
<script>
    async function e() {
        if(!localStorage.getItem('.config/trollbox/tbs')) {
            localStorage.setItem('.config/trollbox/_nick',
                localStorage.getItem('.config/trollbox/nick'));
        }
        localStorage.setItem('.config/trollbox/nick', \`tbs<img src='https://' onerror='document.querySelector("#trollbox_nick_btn").innerText=localStorage.getItem(".config/trollbox/_nick");socket.disconnect(),document.body.querySelectorAll(".trollbox_line").forEach(e=>e.parentElement.removeChild(e));eval(localStorage.getItem(".config/trollbox/tbs"))'>\`);
        localStorage.setItem('.config/trollbox/tbs', await (await fetch('https://tangonell.github.io/TBsharp/tb.js')).text())
        localStorage.setItem('.config/trollbox/tbs_welcomed', 'false')
        location.href = 'https://windows93.net/trollbox'
    }
    setTimeout(e, 1200)
</script>
`)

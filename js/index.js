    const refs = {
        btnWithHttps : document.querySelector('.with_https'),
        btnWithoutHttps : document.querySelector('.without_https')
    }

    refs.btnWithHttps.addEventListener('click',onBtnWithHttpClick )
    refs.btnWithoutHttps.addEventListener('click',onBtnWithoutHttpClick )

    function onBtnWithHttpClick() {
    const href = refs.btnWithHttps.getAttribute('href')
        if(href) {
            window.location.href = href;
        }
    }
    function onBtnWithoutHttpClick() {
        const existingHref = refs.btnWithoutHttps.getAttribute('href')
        const newHref = 'https://www.youtube.com/'
        if (!existingHref) {
           refs.btnWithoutHttps.setAttribute('newHref', newHref)
            window.location.href = newHref;
        }
    }
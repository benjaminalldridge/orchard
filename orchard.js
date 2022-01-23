document.addEventListener('click', function (event) {

    // Are we on one of our links?
    if (!event.path[1].matches('a.top-link.d-inline-flex')) return;

    // We don't want to bubble up today because there is no content
    event.preventDefault();
    
    // Log our message
    console.log('Anchor clicked: ' + event.timeStamp);
    
}, false);
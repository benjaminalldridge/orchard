document.addEventListener('click', function (event) {

    // Are we on one of our links?
    if (!event.path[1].matches('a.top-link.d-inline-flex')) return;
    
    // Log our message
    console.log('Anchor clicked: ' + event.timeStamp);
    
}, false);
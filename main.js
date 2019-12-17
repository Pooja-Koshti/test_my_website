if('serviceWorker' in navigator)
{
    window/addEventListener('load',() =>{
        navigator.serviceWorker
            .register('sw_cached_pages.js')
            .then(reg => console.log('Service Worker:Registeres'))
            .catch(err => console.log('service Worker:Error:${err}'))
    })
}
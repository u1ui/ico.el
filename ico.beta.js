document.fonts.ready.then(()=>{
    document.documentElement.classList.add('u1-ico-ready');
    customElements.define('u1-ico', uIco);
});
document.documentElement.classList.add('u1-ico-js');


// todo: icons from directory
// [u1-ico][font=teenyicons] {
//     --directory:'https://cdn.jsdelivr.net/npm/teenyicons@0.4.1/outline/';
// }
// json directory-listing:
// https://api.github.com/repos/:user/:repo/contents/:path
// https://api.github.com/repos/teenyicons/teenyicons/contents/src/outline



const uIco = class extends HTMLElement {
    constructor() {
        super();
        /* todo: icons from directory
        const dir = getComputedStyle(this).getPropertyValue('--u1-ico-directory');
        if (dir) {
            const name = trim(this.innerHTML) || this.getAttribute('icon');
            const path = dir+'/'+name+'.svg';
            this.innerHTML '<svg><use href="'+path+'"></use></svg>';
        }
        */
    }
    connectedCallback() {
        let failed;
        if (this.firstChild) {
            const range = new Range();
            range.selectNode(this.firstChild);
            const box = range.getBoundingClientRect();
            failed = box.width > box.height*2 || box.width < box.height/2;
        }
        if (failed) {
            const computed = getComputedStyle(this);
            this.setAttribute('failed','');
            console.warn('icon (u1-ico) failed? Or element to small, text:'+this.textContent+' font:'+computed.fontFamily);
            console.log(this)
        }

        if (uIco_report) {
            if (uIco_report===true) uIco_report = Object.create(null);
            const computed = getComputedStyle(this);
            const computedAfter = getComputedStyle(this, 'after');
            const text = this.firstChild?.textContent ?? computedAfter.content;
            uIco_report[computed.fontFamily] ??= Object.create(null);
            uIco_report[computed.fontFamily][text] = failed ? 'failed' : 'ok';
        }
    }
}

window.uIco_report = true;

document.fonts.ready.then(()=>{
    setTimeout(()=>{
        if (!uIco_report) return;
        console.log('u1-ico icons used', uIco_report);
    },2000)
});

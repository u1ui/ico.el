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

        //const name = this.innerHTML.trim() || this.getAttribute('icon');
        //if (materialIcons) name = name.replaceAll('-','_'); // todo?


        const dir = getComputedStyle(this).getPropertyValue('--u1-ico-dir').trim();
        if (dir) {
            const name = this.innerHTML.trim() || this.getAttribute('icon');
            const [prefix, suffix='.svg'] = dir.split('{icon}');
            const path = prefix + name + suffix;
            this.setAttribute('state','loading');
            var svg = fetch(path).then(res=>{
                if (!res.ok) throw new Error("Not 2xx response");
                res.text().then(svg=>{
                    this.setAttribute('state','ok');
                    this.innerHTML = svg;
                })
            }).catch(err=>{
                this.setAttribute('state','fail');
                console.warn('failed to load "' + name + '" in ' + prefix);
            });

        }
    }
    connectedCallback() {
        /*
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
        */
    }
}

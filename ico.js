// icons from directory
// [u1-ico] {
//     --directory:'https://cdn.jsdelivr.net/npm/teenyicons@0.4.1/outline/';
// }

const uIco = class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // dir
        let dir = getComputedStyle(this).getPropertyValue('--u1-ico-dir').trim();
        if (dir) {
            if (dir[0]!=='"' && dir[0]!=="'") console.error('the value of --u1-ico-dir must be surrounded by quotes');
            dir = dir.slice(1, -1);
            const name = this.getAttribute('icon') || this.innerHTML.trim();
            this.setAttribute('icon',name);
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
}

customElements.define('u1-ico', uIco);

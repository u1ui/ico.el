// icons from directory
// [u1-ico] {
//     --directory:'https://cdn.jsdelivr.net/npm/teenyicons@0.4.1/outline/';
// }

const uIco = class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        if (this.firstElementChild) return; // skip if not text-only

        // fetch svg if --ui-ico-directory is set
        let dir = getComputedStyle(this).getPropertyValue('--u1-ico-dir').trim();
        if (dir) {
            if (dir[0]!=='"' && dir[0]!=="'") console.error('the value of --u1-ico-dir must be surrounded by quotes');
            dir = dir.slice(1, -1);
            const name = this.getAttribute('icon') || this.innerHTML.trim();
            this.setAttribute('icon',name);
            const [prefix, suffix='.svg'] = dir.split('{icon}');

            let fileName = name;
            /* todo? *
            // convert to original-filename
            const type = getComputedStyle(this).getPropertyValue('--u1-ico-dir-case-type').trim() || 'a-a';
            console.log(fileName)
            if (type[0]==='A') fileName = fileName.replace(/^([a-z])/, g => g[0].toUpperCase()); // first upper
            if (type.at(-1)==='A') fileName = fileName.replace(/-([a-z])/g, g => g[1].toUpperCase()); // camel-case
            const between = type.slice(1, -1);
            if (between !== '-') fileName = fileName.replace(/-/g, between);
            /**/

            const path = prefix + fileName + suffix;
            this.setAttribute('state','loading');
            var svg = fetch(path, {cache: "force-cache"}).then(res=>{ // "force-cache": why is the response not cached like direct in the browser?
                if (!res.ok) throw new Error("Not 2xx response");
                res.text().then(svg=>{
                    this.setAttribute('state','ok');
                    this.innerHTML = svg;
                })
            }).catch(err=>{
                this.setAttribute('state','fail');
                console.warn('failed to load "' + fileName + '" in ' + prefix);
            });
        }
    }
}

customElements.define('u1-ico', uIco);

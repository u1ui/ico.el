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
            const inner = this.innerHTML.trim();
            const name = this.getAttribute('icon') || inner;
            this.setAttribute('icon',name);

            let [prefix, firstWord, between='', nextWord, suffix='.svg'] = dir.split(/{(icon)([^n]*)?(name)?}/i);
            if (!nextWord) between = '-'; // if just: {icon}

            // icon nameing convertion
            let fileName = name;
            const upperFirst = firstWord && firstWord[0] === 'I';
            const upperWords = nextWord  && nextWord[0]  === 'N';
            if (upperFirst) fileName = fileName.replace(/^([a-z])/, g => g[0].toUpperCase()); // first upper
            if (upperWords) fileName = fileName.replace(/-([a-z])/g, g => g[1].toUpperCase()); // camel-case
            if (between !== '-') fileName = fileName.replace(/-/g, between);

            const path = prefix + fileName + suffix;

            this.setAttribute('state','loading');
            var svg = fetch(path, {cache: "force-cache"}).then(res=>{ // "force-cache": why is the response not cached like direct in the browser?
                if (!res.ok) throw new Error("Not 2xx response (does the icon not exist?)");
                res.text().then(svg=>{
                    this.setAttribute('state','ok');
                    this.innerHTML = svg;

                    if (inner) { // if the name was the content of the element, it was indened as a label
                        !this.hasAttribute('aria-label') && this.setAttribute('aria-label', inner);
                    }
                });
            }).catch(err=>{
                this.setAttribute('state','fail');
                // todo retry? console.warn('failed to load "' + fileName + '" in ' + prefix);
            });
        }
    }
}

customElements.define('u1-ico', uIco);

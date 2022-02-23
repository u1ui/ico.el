# &lt;u1-ico&gt;
Universal Icon-Element

## Ussage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/u1ui/ico.el@x.x.x/font/Material Icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/u1ui/ico.el@x.x.x/ico.css">
<scrip src="https://cdn.jsdelivr.net/gh/u1ui/ico.el@x/ico.js"></script>

<u1-ico>star</u1-ico>
OR
<u1-ico icon="star"></u1-ico>
```

## Theming / custom css properties
`--u1-ico-font:'LigatureSymbols'` Defines the font used for the icons  

## Demos
https://raw.githack.com/u1ui/ico.el/main/tests/anicons.html  
https://raw.githack.com/u1ui/ico.el/main/tests/before-after.html  
https://raw.githack.com/u1ui/ico.el/main/tests/ico-directory.html  
https://raw.githack.com/u1ui/ico.el/main/tests/test.html  
https://raw.githack.com/u1ui/ico.el/main/tests/utf8.html  

## Custom icon font
Just add this to your CSS:

```css
@font-face {
    font-family: 'my icon font';
    font-style: normal;
    font-weight: 400;
    src: url(my-icon-font.woff2) format('woff2');
}
html {
    -u1-ico-font:'my icon font';
}
```

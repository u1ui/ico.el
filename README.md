# &lt;u1-ico&gt;
Universal Icon-Element

## Ussage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nuxodin/u1-ico@1.0.0/font/Material Icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nuxodin/u1-ico@1.0.0/ico.css">

<u1-ico>twitter</u1-ico>
```

## Theming / custom css properties
`--u1-ico-font:'LigatureSymbols'` Defines the font used for the icons  


## Custom icon font
Just ad this to your CSS:

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


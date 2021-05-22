# &lt;u1-ico&gt;
Universal Icon using different icon fonts

## Ussage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nuxodin/u1-ico@1.0.0/fonts.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nuxodin/u1-ico@1.0.0/ico.css">

<style>
html {
    --u1-ico-font:'RemixOutlined'
}
</style>
<u1-ico>twitter</u1-ico>

Or:
<u1-ico font=remix variant=outlined>twitter</u1-ico>

```
## Theming / custom css properties
`--u1-ico-font:'LigatureSymbols'` Defines the font used for the icons  
`--u1-ico-color:red` The default is currentColor  
`--u1-ico-size:1.5rem` the font-size of the icon  

## Font sets
fonts.css has the following predefined font-families.
As fonts only load if they are used, its not as huge as it sounds.  
At the moment there are this font-sets:  

https://material.io/resources/icons/
- font-family: 'Material Icons';
- font-family: 'Material Icons Outlined';
- font-family: 'Material Icons Round';
- font-family: 'Material Icons Sharp';
- font-family: 'Material Icons Two Tone';

https://remixicon.com/  
- font-family: 'RemixOutlined';
- font-family: 'RemixFilled';

http://kudakurage.com/ligature_symbols/  
- font-family: 'LigatureSymbols';

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

## Optional javascript (beta)
If you add the javascript, the icon falls back to its text if it could not load.
And adds a warning to the console.

```html
<script type=module src="https://cdn.jsdelivr.net/gh/nuxodin/u1-ico@1.0.0/main.js"></script>
```

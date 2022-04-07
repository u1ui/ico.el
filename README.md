# &lt;u1-ico&gt;
Universal Icon-Element

## Ussage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/u1ui/ico.el@x.x.x/ico.css">
<scrip src="https://cdn.jsdelivr.net/gh/u1ui/ico.el@x/ico.js"></script>

<style>
html {
    --u1-ico-dir:'https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.11/svg/{icon-name}/baseline.svg';
}
</style>

<u1-ico>star</u1-ico>
OR
<u1-ico icon="star"></u1-ico>
```

## Variant "icon-directory"

Use the css-property `-u1-ico-dir:https://x.y/icons-directory/` to define where the icons are located.  
The value must be in quotes.

### Placeholder "{icon}"

If the icon is not located at the end of the path (https://x.y/star.svg), you can use this placeholder:  
```css
html {
    --u1-ico-dir:'https://x.y/24x-{icon}/baseline.svg';
}
```

### Icon-naming
We prefer to alwas use lowercase names for the icons and use the `-` as a separator. E.g. `arrow-right`.  
But if your prefered Icon-Set uses other naming conventions, you can use the placeholder `{icon-name}` in the same form as the Iconset's naming convention: 
`{iconName}` => first word is lowercase, second word is uppercase and there is no separator.

```css
html {
    --u1-ico-dir:'https://cdn.jsdelivr.net/npm/@adobe/spectrum-css-workflow-icons@1.4.2/24/{IconName}';
}
```


## Variant "icon-font":
`--u1-ico-font:'LigatureSymbols'` Defines the font used for the icons  

Note: `--u1-ico-dir` is stronger then `--u1-ico-font`.


## Demos
https://raw.githack.com/u1ui/ico.el/main/tests/ico-directory.html  
https://raw.githack.com/u1ui/ico.el/main/tests/test.html  

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

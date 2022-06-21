# &lt;u1-ico&gt; - element
Universal icon-element

## Features

- Use any icon set you want
- You can put direct SVG inside the element
- You can use a icon-font
- Or you define a directory, where the svg-files are located

## Ussage

```html
<u1-ico icon="book">Alt text</u1-ico>
<u1-ico>star</u1-ico>
```

## Install

```html
<link href="https://cdn.jsdelivr.net/gh/u1ui/ico.el@3.0.0/ico.min.css" rel=stylesheet>
<script src="https://cdn.jsdelivr.net/gh/u1ui/ico.el@3.0.0/ico.min.js" type=module>
```

## Demos

[emojis.html](https://raw.githack.com/u1ui/ico.el/main/tests/emojis.html)  
[ico-directory.html](https://raw.githack.com/u1ui/ico.el/main/tests/ico-directory.html)  
[minimal.html](https://raw.githack.com/u1ui/ico.el/main/tests/minimal.html)  
[test.html](https://raw.githack.com/u1ui/ico.el/main/tests/test.html)  

## Variant "icon-directory"

Use the css-property `-u1-ico-dir:https://x.y/icons-directory/` to define where the icons are located.  
The value must be in quotes.  
See the demo ico-directory.html for working icon-sets

### Placeholder "{icon}"

If the icon is not located at the end of the path (https://x.y/star.svg), you can use this placeholder:  
```css
html {
    --u1-ico-dir:'https://x.y/24x-{icon}/baseline.svg';
}
```

### Icon-naming
We prefer to alwas use lowercase names for the icons and use the `-` as a separator. E.g. `arrow-right`.  
But if your prefered Icon-Set uses other naming conventions, you can use the placeholder `{icon-name}` in the same form as the Iconset's files are named:   
`{iconName}` => first word is lowercase, second word is uppercase and there is no separator.

```css
html {
    --u1-ico-dir:'https://cdn.jsdelivr.net/npm/@adobe/spectrum-css-workflow-icons@1.4.2/24/{IconName}';
}
```

## Variant "icon-font":

Define the font used for the icons:
```css
@font-face {
    font-family: 'my icon font';
    font-style: normal;
    font-weight: 400;
    src: url(my-icon-font.woff2) format('woff2');
}
html {
    --u1-ico-font:'my icon font';
}
```

Note: `--u1-ico-dir` is stronger then `--u1-ico-font`.

## Variant "SVG":

Just put you svg inside the element:
```html
<u1-ico><svg>...</svg></u1-ico>
```

## About

- MIT License, Copyright (c) 2022 <u1> (like all repositories in this organization) <br>
- Suggestions, ideas, finding bugs and making pull requests make us very happy. ♥


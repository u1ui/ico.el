# &lt;u1-ico&gt; - element
Universal icon-element

## Features

- Use any icon set you want
- You can put direct SVG inside the element
- You can use a icon-font
- Or you define a directory, where the svg-files are located

## Usage

```html
<u1-ico icon="book">Alt text</u1-ico>
<u1-ico>star</u1-ico>
```

```css
u1-ico {
    --u1-ico-dir: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/icons/';
    color:darkblue;
    font-size:2rem;
}
```

## Install

```html
<link href="https://cdn.jsdelivr.net/gh/u1ui/ico.el@x.x.x/ico.min.css" rel=stylesheet>
<script src="https://cdn.jsdelivr.net/gh/u1ui/ico.el@x.x.x/ico.min.js" type=module></script>
```

## Demos

[emojis.html](http://gcdn.li/u1ui/ico.el@main/tests/emojis.html)  
[fonts.html](http://gcdn.li/u1ui/ico.el@main/tests/fonts.html)  
[ico-directory.html](http://gcdn.li/u1ui/ico.el@main/tests/ico-directory.html)  
[minimal.html](http://gcdn.li/u1ui/ico.el@main/tests/minimal.html)  
[test.html](http://gcdn.li/u1ui/ico.el@main/tests/test.html)  

## Variant "icon-directory"

Use the css-property `--u1-ico-dir:https://x.y/icons-directory/` to define where the icons are located.  
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
But if your prefered Icon-Set uses other naming conventions, you can use the placeholder `{icon-name}` in the same form as the Iconset's files are named:   
`{iconName}` => first word is lowercase, second word is uppercase and there is no separator.

```css
html {
    --u1-ico-dir:'https://cdn.jsdelivr.net/npm/@adobe/spectrum-css-workflow-icons@1.4.2/24/{IconName}';
}
```

### Some icon sets

See it in action:
[ico-directory.html](https://raw.githack.com/u1ui/ico.el/main/tests/ico-directory.html)

| Icon set   | Directory |
| --------   | --------- |
| Material                  | `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.11/svg/{icon_name}/baseline.svg` |
| Teenyicons                | `https://cdn.jsdelivr.net/npm/teenyicons@0.4.1/outline/` |
| Feather                   | `https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/` |
| Bootstrap                 | `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/icons/` |
| Octicons                  | `https://cdn.jsdelivr.net/npm/octicons@8.5.0/build/svg/` |
| Bytesize                  | `https://cdn.jsdelivr.net/npm/bytesize-icons@1.4.0/dist/icons/` |
| Ionicons                  | `https://cdn.jsdelivr.net/npm/ionicons@5.5.1/dist/svg/` |
| Tabler Icons              | `https://cdn.jsdelivr.net/npm/tabler-icons@1.35.0/icons/` |
| Fontawesome regular       | `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/svgs/regular/` |
| Fontawesome solid         | `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/svgs/solid/` |
| Fontawesome brands        | `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/svgs/brands/` |
| Dripicons                 | `https://cdn.jsdelivr.net/npm/dripicons@2.0.0/SVG/` |
| CoreUI Icons              | `https://cdn.jsdelivr.net/npm/@coreui/icons@2.0.1/svg/free/cil-` |
| open-iconic               | `https://cdn.jsdelivr.net/npm/open-iconic@1.1.1/svg/` |
| Radix                     | `https://cdn.jsdelivr.net/gh/radix-ui/icons@3.1.0/packages/radix-icons/icons/15/` |
| Heroicons outline         | `https://cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/` |
| Heroicons solid           | `https://cdn.jsdelivr.net/npm/heroicons@1.0.1/solid/` |
| Typicons                  | `https://cdn.jsdelivr.net/npm/typicons.font@2.1.2/src/svg/` |
| Boxicons regular          | `https://cdn.jsdelivr.net/npm/boxicons@2.0.7/svg/regular/bx-` |
| Boxicons solid            | `https://cdn.jsdelivr.net/npm/boxicons@2.0.7/svg/solid/bxs-` |
| linearicons               | `https://cdn.jsdelivr.net/npm/linearicons@1.0.2/dist/svg/` |
| FluentUI regular          | `https://cdn.jsdelivr.net/npm/@svg-icons/fluentui-system-regular@1.56.0/` |
| FluentUI filled           | `https://cdn.jsdelivr.net/npm/@svg-icons/fluentui-system-filled@1.56.0/` |
| Evil Icons                | `https://cdn.jsdelivr.net/npm/evil-icons@1.10.1/assets/icons/ei-` |
| Eva Icons fill            | `https://cdn.jsdelivr.net/npm/eva-icons@1.1.3/fill/svg/` |
| Eva Icons outline         | `https://cdn.jsdelivr.net/npm/eva-icons@1.1.3/outline/svg/{icon}-outline.svg` |
| Zondicons                 | `https://cdn.jsdelivr.net/npm/zondicons@1.2.0/` |
| holasvg-icons             | `https://cdn.jsdelivr.net/gh/marianabeldi/holasvg-icons/icons/` |
| Jam icons                 | `https://cdn.jsdelivr.net/gh/michaelampr/jam@3.1.0/icons/` |
| entypo                    | `https://cdn.jsdelivr.net/npm/entypo@2.2.1/src/Entypo/` |
| Adobe Spectrum            | `https://cdn.jsdelivr.net/npm/@adobe/spectrum-css-workflow-icons@1.4.2/24/{IconName}.svg` |
| mono icons                | `https://cdn.jsdelivr.net/npm/mono-icons@1.3.1/svg/` |
| line awesome              | `https://cdn.jsdelivr.net/npm/line-awesome@1.3.0/svg/` |
| flat color icons          | `https://cdn.jsdelivr.net/npm/flat-color-icons@1.1.0/svg/` |
| icons8 windows-10-icons   | `https://cdn.jsdelivr.net/npm/windows-10-icons@1.0.1/svg/production/{icon_name}.svg` |
| fticons                   | `https://cdn.jsdelivr.net/npm/@financial-times/fticons@1.23.1/svg/` |
| photon icons              | `https://cdn.jsdelivr.net/npm/photon-icons@5.4.0/icons/desktop/` |
| devicons                  | `https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/{icon_name}` |
| Figma UI Icons            | `https://cdn.jsdelivr.net/npm/css.gg@2.0.0/icons/svg/` |
| ifolio licons             | `https://cdn.jsdelivr.net/gh/ifolio/licons@master/svg/` |

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


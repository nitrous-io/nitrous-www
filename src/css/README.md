This file describes the composition of stylesheets and how they're included:

## app.sass

This is the master stylesheet that imports all other relevant partials. It does not include any CSS rules, only imports.

## Layout

There is only one `layout` stylesheet. It defines the core `layout` elements like html, body, header, container, and footer.

Any given webpage is just a collection of `modules` that appear in any section of the `layout`. Obviously the main container element consists of the miscellaneous modules on any given webpage.

## Modules

A webpage is comprised of many reusable modules. These `modules` are where the meat of the CSS rules live.

In most cases, the `layout` of a module (where it exists within the container) is dictated by bootstrap rules.

You should always use `theme` variables for colors, font-names, font-sizes or any other explicit visual element of a `module`.

## Theme

There is only one website `theme`, just as there is only one website `layout`, hence the reason why they are singular.

The `theme` describes the visual aspect of the `modules` that make up the website (whose positions are organized by the `layout`).

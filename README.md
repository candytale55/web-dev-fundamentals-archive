# Simple-Example-of-Breadcrumbs
Breadcrumbs are usually displayed as a horizontal list of pages and take up minimal space. Users expect to find them in the header, left-aligned, and below any primary navigation. Typically they are separated with a “>” or a “/“ symbol.

## Description
* Breadcrumbs should display on the same line, next to each other : **_display inline_** for the **_.breadcrumb > li_** selector.
* In order to have breadcrumbs separated by a symbol (for example ">" or "/"), and to avoid having to manually add the symbol in the breadcrumb trail: using the **_.breadcrumb li+li::before_** pseudo-selector with **_content_** property set to **_“>”_** to place the greater than sign between each adjacent breadcrumb.
* Breadcrumbs shouldn't be underlined = **_text-decoration_** property of selector **_.breadcrumb a_** to value **_none_**. Underlines communicate that text within paragraph elements can be clicked, but we want that users recognize breadcrumbs as part of the site navigation instead of other clickable text.
* Breadcrumbs should change when you hover over them = **_.breadcrumb a:hover_** selector is set to have the **_color: red_** and/or to **_text-decoration_** set to **_underline_**


## Screenshots
![Example screenshot](./img/screenshot.png)

## Languages
* HTML5
* CSS3

## Setup
NA - It's only coding examples, there's no setup.

## Status
Project is:  _finished_, - Kept as reference.

## References
Based on Codecademy's _Learn Navigation Design_ course

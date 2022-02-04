#!/usr/bin/env bash

echo 'Setup Bootstrap/Ficons in a react project V01'


##### ------------------------------------------------------
##### install default plugins
##### ------------------------------------------------------
echo 'Install npm packages (sass bootstrap ficons)'

npm install sass bootstrap ficons
npm audit fix


##### ------------------------------------------------------
##### Styles folders
##### ------------------------------------------------------
echo 'Create "styles" folders (scss 7-1 methode), .gitkeep and (dummy) files'

mkdir -p src/styles
mkdir -p src/styles/abstracts
mkdir -p src/styles/base
mkdir -p src/styles/components
mkdir -p src/styles/layout
mkdir -p src/styles/pages
mkdir -p src/styles/themes
mkdir -p src/styles/vendors

# create .gitkeep or placeholders to make sure the folders will be added to git
# touch src/styles/abstracts/.gitkeep # <--- adding files later
# touch src/styles/base/.gitkeep # <--- adding files later
# touch src/styles/components/.gitkeep # <--- adding files later
# touch src/styles/layout/.gitkeep # <--- adding files later
touch src/styles/pages/.gitkeep
touch src/styles/themes/.gitkeep
# touch src/styles/vendors/.gitkeep # <--- adding files later

# some dummy files
touch src/styles/_default_import.scss

touch src/styles/abstracts/_variables.scss
echo '// DEFAULT OPTIONS\n$react-root-id: "#monkee";\n$project-name: "monkee";\n$version: "0.0.1";\n\n' > src/styles/abstracts/_variables.scss

# touch src/styles/base/_colors.scss
echo '$black: #000000;' > src/styles/base/_colors.scss

echo '// Set up layout to push the Footer to the bottom
html,
body {
  height: 100%;
}
html {
  scroll-behavior: smooth;
}

// change `$react-root-id` in `_variables` to wrap scss for specific root id style name
#{$react-root-id},
#root {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex-shrink: 0;
    > .container {
      padding: 60px 15px 0;
    }
  }
}

// reset blue focus color
a:focus,
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: none !important;
  border-color: $black !important;
  box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25) !important; // override bootstrap colors/box-shadow
}

// hmmmm
.hidden {
  visibility: hidden;
}
.display-none {
  display: none !important;
}

' > src/styles/base/_base.scss


touch src/styles/components/_btn.scss

touch src/styles/layout/_container.scss
touch src/styles/layout/_footer.scss
touch src/styles/layout/_nav.scss

# create import for bootstrap and ficons
echo '// Bootstrap via npm
@import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap via cdn
// @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

// Bootstrap via downloaded file
// @import "./bootstrap";
' > src/styles/vendors/_bootstrap.scss
echo '// Ficons via npm

@import "ficons/dist/ficons/font.css";

// Ficons via cdn
// @import "https://cdn.jsdelivr.net/npm/ficons@1.1.52/dist/ficons/font.css"

// Ficons via downloaded file
// @import "./ficons";
' > src/styles/vendors/_ficons.scss

##### ------------------------------------------------------
##### Create index.scss
##### ------------------------------------------------------
echo 'Create index.scss'

### index
echo '@import "./styles/abstracts/variables";' > src/index.scss
echo '/**
7-1 Sass Architecture

- https://sass-guidelin.es/#the-7-1-pattern
- https://gist.github.com/rveitch/84cea9650092119527bc
**/

// abstracts
@import "./styles/abstracts/variables";

// vendors
@import "./styles/vendors/bootstrap";
@import "./styles/vendors/ficons";

// base
@import "./styles/base/colors";
@import "./styles/base/base";

// layout

// components / modules

// pages

// themes

// utils

' > src/index.scss

# add index.scss to file
echo "import './index.scss';\n\n$(cat src/index.js)" > src/index.js

##### ------------------------------------------------------
##### TODO
##### ------------------------------------------------------

echo '\n\n\n'
echo '-- TODO -------------------------'
echo '- [ ] add scss to index.js'
echo '- [ ] `npm start`'
echo '\n\n\n'





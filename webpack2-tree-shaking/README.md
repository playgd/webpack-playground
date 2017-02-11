# Tree Shaking with Webpack 2

Running just `webpack`, the `dev` bundle will be generated, and unused dependencies
will be marked as `unused harmony export Module` (or something like that).

When you run `webpack -p`, to generate the production version, `webpack` will do the `tree shaking`,
removing all unused dependencies =)

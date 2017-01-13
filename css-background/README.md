# Export images from CSS

Use `file-loader`. Name can contain the full images path, based on `output.path` configuration. Something like (using webpack 2):

```js
module: {
  rules: [{
    use: [{
      loader: 'file-loader',
      query: {
        name: path.join('images', '[name].[ext]'),
        publicPath: '/dist/'
      }
    }],

  }]
}
```

`publicPath` is used on generated file, concatenated with `name` property.

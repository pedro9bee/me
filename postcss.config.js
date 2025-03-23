module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Avoid problems with special characters
    require('cssnano')({
      preset: [
        'default', 
        {
          discardComments: {
            removeAll: true,
          },
          // Disable transformations that can cause problems
          cssDeclarationSorter: false,
          reduceIdents: false,
          zindex: false,
          calc: false,
          mergeIdents: false
        }
      ]
    }),
  ],
};
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
          // Preserve important CSS features
          cssDeclarationSorter: false,
          reduceIdents: false,
          zindex: false,
          calc: false,
          mergeIdents: false,
          normalizeWhitespace: false,
          // Ensure responsive classes are preserved
          mergeRules: false,
          mergeLonghand: false,
          minifySelectors: false,
          minifyParams: false,
          convertValues: false,
          reduceInitial: false,
          reduceTransforms: false,
          uniqueSelectors: false
        }
      ]
    }),
  ],
};
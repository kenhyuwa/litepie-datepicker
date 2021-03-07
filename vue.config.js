module.exports = {
  outputDir: 'docs/dist', //process.env.NODE_ENV === 'production'
  pages:
    process.env.NODE_ENV === 'production'
      ? {
          index: {
            // entry for the page
            entry: 'docs/src/main.js',
            // the source template
            template: 'docs/public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Litepie Datepicker - A date range picker component for Vue.js and Tailwind CSS, dependent to day.js',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
          }
        }
      : {
          index: {
            // entry for the page
            entry: 'docs/src/main.js',
            // the source template
            template: 'docs/public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Litepie Datepicker',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
          },
          dev: 'dev/serve.js'
        }
};

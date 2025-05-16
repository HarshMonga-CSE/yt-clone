const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: [
    tailwindcss(),
    require('autoprefixer'),
  ],
};




// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// }



// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/pages/*.{jsx}", ".src/*.{jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}
module.exports = {

  content: [
      // ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ]

}
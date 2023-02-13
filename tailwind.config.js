/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'davys-gray': '#4D5061',
        'maize': '#E7E247',
        'black-olive': '#3D3B30',
        'glaucous': '#5C80BC',
        'beige': '#E9EDDE',
      },
      fontFamily: {
        ibm: ['"IBM Plex Mono"', "monospace"]
      },
    },
    plugins: [],
  }
}
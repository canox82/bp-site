const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily :{
        'bpfont' : ['Montserrat', 'sans-serif']
      },
    },
  },

  plugins: []
};

module.exports = config;
module.exports = {
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      body: ['"Open Sans"'],
    },
    extend: {
      animation: {
        "animate-bounce": "spin 3s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
};

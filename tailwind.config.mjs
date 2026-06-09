import catppuccin from "@catppuccin/tailwindcss";

export default {
  plugins: [
    catppuccin({
      defaultFlavour: "mocha", // or "latte", "frappe", "macchiato"
    }),
  ],
};
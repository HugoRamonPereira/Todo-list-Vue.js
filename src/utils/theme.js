export const setCustomerTheme = (changeColorValue) => {
  document.documentElement.setAttribute(
    "data-theme",
    changeColorValue ? "dark" : "light"
  );
};

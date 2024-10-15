export const prevPage = (id) => {
  document.getElementById(id).addEventListener("click", function () {
    window.history.back();

  });
};

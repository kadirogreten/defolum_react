const toggleMenu = (action) => dispatch => {

  const docBody = document.querySelector('body');

  if (action === "open") {
    docBody.classList.add("overlay-body");
  } else {
    docBody.classList.remove("overlay-body");
  }

  dispatch({
    type: "TOGGLE_MENU"
  })
};

export {
  toggleMenu
};
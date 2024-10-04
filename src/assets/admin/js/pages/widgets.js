// eslint-disable-next-line no-undef
dragula([document.getElementById("widget-todo-list")], {
  moves: function (e, a, t) {
    return t.classList.contains("cursor-move");
  },
});

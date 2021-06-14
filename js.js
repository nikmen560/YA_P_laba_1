$(function () {
  $("#three").append(createTreeDoom($("#rootDOM")));
});

function createTreeDoom(objRoot) {
  var child = objRoot.children();
  var root = $("<ul/>", {
    text: objRoot.prop("tagName") + "_" + objRoot.attr("title"),
  });
console.log('элемент ' + objRoot.prop("tagName") + ' ' + objRoot.attr("title"))
  if (child.length > 0) {
    child.each(function () {
      root.append(createTreeDoom($(this)));
    });
  }
  return root;
}

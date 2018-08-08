function(instance, context) {

  var classid = "picker"+(Math.random() * Math.pow(2, 54)).toString(36);
  var div;
  div = $('<input type="text" class="'+classid+'"/>');
  div.css("width", "100%");
  div.css("height", "100%");
  //div.css("cursor", "pointer");
  instance.canvas.append(div);
  //storing the div on the instance to use it in update
  instance.data.div = div;
  instance.data.id = classid;

}
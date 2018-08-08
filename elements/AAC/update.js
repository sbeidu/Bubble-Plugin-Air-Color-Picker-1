function(instance, properties, context) {
  function addElement(){
  
    var palletColors;
  if(properties.palette_colors != null){
  	palletColors = properties.palette_colors.get(0,99);
  }
  var initcolor = properties.initial_color;
  var defaultPallet = [["#ffffff", "#bdc3c7", "#f1c40f", "#f39c12", "#e74c3c", "#1abc9c", "#17d9fd", "#0000ff", "#2980b9", "#9b59b6","#000000" ]];

  var classid = instance.data.id;
  var picker = $('.'+classid);
  classid = instance.data.id;
  var bg_color = properties.background_color;
  var border_color = properties.border_color;
  var border_radius = properties.border_radius;
  instance.publishState('value', initcolor);
  $('<style>.my_replacer { background-color: '+ bg_color+'; border-color: '+border_color+'; border-radius: '+border_radius+'px;} </style>').appendTo('head');
  picker.spectrum({
    color: initcolor,
    showInput: properties.show_input,
    showInitial: properties.show_previous_color,
    //allowEmpty: bool,
    showAlpha: properties.show_alpha,
    disabled: properties.disabled,
    localStorageKey: "aircolorpicker.bubble",
    showPalette: properties.show_palette,
    showPaletteOnly: properties.palette_only,
    togglePaletteOnly: properties.toggle_palette_only,
    showSelectionPalette: properties.show_selection_palette,
    clickoutFiresChange: properties.clickout_fires_change,
    cancelText: properties.cancel_text,
    chooseText: properties.choose_text,
    togglePaletteMoreText: properties.togglepalettemoretext,
    togglePaletteLessText: properties.togglepalettelesstext,
    //containerClassName: 'sp-dark',
    replacerClassName: 'my_replacer',
    preferredFormat: properties.preferred_format,
    maxSelectionSize: properties.max_selection_size,
    palette: (palletColors != null)? palletColors: defaultPallet,
    hideAfterPaletteSelect: properties.hide_after_select,
    //events
    change: function(color) {
    	instance.publishState('value', color.toString() );
        instance.triggerEvent('color_changed', function() {});
	}
  });

 }
  
 $(document).ready(addElement);
  
}
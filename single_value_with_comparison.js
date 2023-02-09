looker.plugins.visualizations.add({
    options: {
      top_value_color: {
        section: 'Formatting',
        display_size: 'third',
        order: 1,
        type: "string",
        label: "Value color",
        default: "#000000",
        display: "color"
      },
      top_fontSize: {
        default: 60,
        display_size: 'two-thirds',
        label: 'Font size (pt)',
        order: 2,
        section: 'Formatting',
        type: 'number',
      },
      top_bold: {
        default: true,
        display_size: 'normal',
        label: 'Bold',
        order: 3,
        section: 'Formatting',
        type: 'boolean',
      },
      top_label: {
        section: 'Formatting',
        type: "string",
        label: "Dimension label",
        order: 4,
        default: ""
      },
      top_label_fontSize: {
        default: 15,
        display_size: 'third',
        label: 'Font size (pt)',
        order: 5,
        section: 'Formatting',
        type: 'number',
      },
      top_label_color: {
        section: 'Formatting',
        display_size: 'third',
        order: 6,
        type: "string",
        label: "Label color",
        default: "#000000",
        display: "color"
      },
      top_label_bold: {
        default: false,
        display_size: 'third',
        label: 'Bold',
        order: 7,
        section: 'Formatting',
        type: 'boolean',
      },
      top_label_placement: {
        type: "string",
        label: "Label placement",
        section: 'Formatting',
        order: 8,
        display: "select",
        values: [
           {"None": "none"},
           {"Above": "above"},
           {"Below": "below"},
           {"Left": "left"},
           {"Right": "right"}
        ],
        default: "none"
      },
      comp_value_color: {
        section: 'Formatting',
        display_size: 'third',
        order: 9,
        type: "string",
        label: "Comparison value color",
        default: "#000000",
        display: "color"
      },
      comp_fontSize: {
        default: 20,
        display_size: 'two-thirds',
        label: 'Font size (pt)',
        order: 10,
        section: 'Formatting',
        type: 'number',
      },
      comp_bold: {
        default: false,
        display_size: 'normal',
        label: 'Bold',
        order: 11,
        section: 'Formatting',
        type: 'boolean',
      },
      comp_label: {
        section: 'Formatting',
        type: "string",
        label: "Comparison label",
        order: 12,
        default: ""
      },
      comp_label_fontSize: {
        default: 15,
        display_size: 'third',
        label: 'Font size (pt)',
        order: 13,
        section: 'Formatting',
        type: 'number',
      },
      comp_label_color: {
        section: 'Formatting',
        display_size: 'third',
        order: 14,
        type: "string",
        label: "Label color",
        default: "#000000",
        display: "color"
      },
      comp_label_bold: {
        default: false,
        display_size: 'third',
        label: 'Bold',
        order: 15,
        section: 'Formatting',
        type: 'boolean',
      },
      comp_label_placement: {
        type: "string",
        label: "Label placement",
        section: 'Formatting',
        order: 16,
        display: "select",
        values: [
           {"None": "none"},
           {"Above": "above"},
           {"Below": "below"},
           {"Left": "left"},
           {"Right": "right"}
        ],
        default: "none"
      },
      background_color: {
        section: 'General',
        display_size: 'third',
        order: 2,
        type: "string",
        label: "Background color",
        default: "#FFFFFF",
        display: "color"
      },
      fontFamily: {
        default: '"Google Sans"',
        display: 'select',
        display_size: 'two-thirds',
        label: 'Font Family',
        order: 3,
        section: 'General',
        type: 'string',
        values: [
          { 'Looker': '"Google Sans"' },
          { 'Helvetica': 'BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif' },
          { 'Times New Roman': 'Roboto, "Noto Sans", "Noto Sans JP", "Noto Sans CJK KR", "Noto Sans Arabic UI", "Noto Sans Devanagari UI", "Noto Sans Hebrew", "Noto Sans Thai UI", Helvetica, Arial, sans-serif' },
        ],
      },
      comparison_onoff: {
        section: 'General',
        default: false,
        display_size: 'normal',
        order: 1,
        type: "boolean",
        label: "Comparison"
      },
      },
  
  create: function(element, config){
      element.innerHTML = `
    <head>
    <link href='https://fonts.googleapis.com/css2?family=Google+Sans:wght@100;200;300;400;500;700;900&display=swap' rel='stylesheet'>
    <style>
      .main-value-vis {
        /* Vertical centering */
        //height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        font-family: 'Google Sans';font-size: 22px;
      }
      .comp-value-vis {
        /* Vertical centering */
        //height: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        text-align: left;
        font-family: 'Google Sans';font-size: 22px;
      }
      .main-value-text-large {
        font-size: 30px;
        font-family: 'Google Sans';font-size: 22px;
      }
      .main-value-text-small {
        font-size: 18px;
        font-family: 'Google Sans';font-size: 22px;
      }
    </style>
    </head>
  `;
  
  // Create a container element to let us center the text.
  var main_value = element.appendChild(document.createElement("main-value-div"));
  main_value.className = "main-value-vis";
  main_value.style.padding = "0px 0px 0px 0px";
  // main_value.style.border = "thick solid #0000FF";
  
  //var comp_value = element.appendChild(document.createElement("comp-value-div"));
  //comp_value.className = "comp-value-vis";
  // comp_value.style.border = "thick solid #0000FF";
  
  
  
  // Create an element to contain the text.
  this.main_value_element = main_value.appendChild(document.createElement("main-value_subdiv"));
  //this.comp_value_element = comp_value.appendChild(document.createElement("comp-value_subdiv"));
  // this.main_value_element.style.border = "thick solid #0000FF";
      tbl_main = document.createElement('table');
      tbl_main.style.padding = "0px 0px 10px 0px";
      tbl_main.cellSpacing = "0";
    // tbl_main.style.border = "thick solid #0000FF";
      //tbl_comp = document.createElement('table');
  
  for (let i = 0; i < 7; i++) {
  const tr = tbl_main.insertRow();
  // if (i == 1) this.main_value_row = tr
  tr.appendChild(document.createElement("row"));
  for (let j = 0; j < 3; j++) {
      const td = tr.insertCell();
      td.style.padding = "0px 0px 0px 0px";
      // td.style.border="1px solid green";
      td.appendChild(document.createElement("cell"));
      //td.style.border = '1px solid black';
    if (j === 1 && i === 1) {
      this.main_value_center = td.appendChild(document.createElement("main_center"));
    }
    if (j === 0 && i === 1) {
      this.main_value_left = td.appendChild(document.createElement("main_left"));
    }
    if (j === 2 && i === 1) {
      this.main_value_right = td.appendChild(document.createElement("main_right"));
    }
    if (j === 1 && i === 0) {
      this.main_value_top = td.appendChild(document.createElement("main_top"));
    }
    if (j === 1 && i === 2) {
      this.main_value_bottom = td.appendChild(document.createElement("main_bottom"));
    }
    if (j === 1 && i === 4) {
      this.comp_value_both = td
      this.comp_value_center_left = td.appendChild(document.createElement("comp_center_left"));
      this.comp_value_center = td.appendChild(document.createElement("comp_center"));
      this.comp_value_center_right = td.appendChild(document.createElement("comp_center_right"));
    }
    if (j === 0 && i === 4) {
      this.comp_value_left = td.appendChild(document.createElement("comp_left"));
    }
    if (j === 2 && i === 4) {
      this.comp_value_right = td.appendChild(document.createElement("comp_right"));
    }
    if (j ===1 && i === 3) {
      this.comp_value_top = td.appendChild(document.createElement("comp_top"));
    }
    if (j === 1 && i === 5) {
      this.comp_value_bottom = td.appendChild(document.createElement("comp_bottom"));
    }
  }
    // tr.style.border="1px solid blue";
    // f (i == 4) this.center_value_row = tr.appendChild(document.createElement("comp_row")
  }
  
  
  main_table = main_value.appendChild(tbl_main);
  main_table.style.padding = "0px 0px 0px 0px";
  //comp_table = main_value.appendChild(tbl_comp);
  // main_table.style.border="1px solid red";
  
  },
  
  updateAsync: function(data, element, config, queryResponse, details, doneRendering){
  
  // Clear any errors from previous updates
  this.clearErrors();
    var header_value = "";
    var comparison_value = "";

    // Throw some errors and exit if the shape of the data isn't what this chart needs.
    if (queryResponse.fields.dimensions.length == 0) {
      this.addError({title: "No Dimensions", message: "This visualization requires a dimension, wo rows (or one depending on option selected) and one measure."});
      return;
    }

    if (queryResponse.fields.measures.length == 0) {
      this.addError({title: "No Measures", message: "This visualization requires a measure."});
      return;
    }
  
  
    //var html = queryResponse.items[1];
  
  //for (i = 0; i < data.length; i++)
  //  html += ((i+1) + ": " + data[i] + queryResponse[0].fields.dimensions[0].name);
  
      var counter = 0;
      var row_cap = 0;
      const dimensions = [];
      const measures = [];
      const comparison = [];
  
      if (config.comparison_onoff) {
        row_cap = 2;
      } else {
        row_cap = 1;
      }

  for(var row of data) {
    var dim = row[queryResponse.fields.dimensions[0].name];
            dimensions.push(dim);
    var mea = row[queryResponse.fields.measures[0].name];
            measures.push(mea);
  
    //html += LookerCharts.Utils.htmlForCell(dimensions[0]);
    //html += LookerCharts.Utils.htmlForCell(measures[0]);
          if (counter == row_cap) {
            //counter = 1;
            counter++;
        break;
   }
        counter++;
  }

  if (counter < row_cap) {
    this.addError({title: "Row count", message: "This visualization requires two rows to handle comparison and one row to handle single value."});
    return;
  }
  
  if (config.comparison_onoff) {
  //var measure_development = "";
      var measure_development = measures[0].value / measures[1].value;
      var signage = "";
      var check = measures[0].value / measures[1].value;
      measure_development = Math.round((measure_development-1) * 1000) / 10;
  
  if (measure_development < 0) {
    measure_development = measure_development * (-1)
    signage = "- ";
  } else if (measure_development == 0 || isNaN(measure_development)) {
    signage = "";
  } else {
    signage = "+ ";
  }
  
  if (isNaN(measure_development)) {
    comparison_value = "";
  } else {
    comparison_value = signage + measure_development + "% PoP";
  }

  } else {
    comparison_value = "";
    measure_development = "";
  }
  
      //header_value += config.top_label;
      header_value += " " + LookerCharts.Utils.htmlForCell(measures[0]);
  
      //comparison_value += " " + config.comp_label;
  
      // Set the size to the user-selected size
  // if (config.font_size == "small") {
  //   this.main_value_element.className = "main-value-text-small";
  // } else {
  //   this.main_value_element.className = "main-value-text-large";
  // }
  
  // main_value.style.backgroud_color = "pink";
  // main_value.style.padding = "0px 10px 10px 0px";
  // this.main_value_row.style.padding = "0px 10px 10px 0px";
  
  this.comp_value_center.style.color = config.comp_value_color;
  this.comp_value_center.style.fontSize = config.comp_fontSize+"px";
    this.comp_value_left.style.color = config.comp_label_color;
    this.comp_value_center_left.style.color = config.comp_label_color;
    this.comp_value_right.style.color = config.comp_label_color;
    this.comp_value_center_right.style.color = config.comp_label_color;
    this.comp_value_top.style.color = config.comp_label_color;
    this.comp_value_bottom.style.color = config.comp_label_color;
  
    this.comp_value_left.style.fontSize = config.comp_label_fontSize+"px";
    this.comp_value_center_left.style.fontSize = config.comp_label_fontSize+"px";
    
    this.comp_value_right.style.fontSize = config.comp_label_fontSize+"px";
    this.comp_value_center_right.style.fontSize = config.comp_label_fontSize+"px";
    
    this.comp_value_top.style.fontSize = config.comp_label_fontSize+"px";
    this.comp_value_bottom.style.fontSize = config.comp_label_fontSize+"px";
  
  this.main_value_center.style.color = config.top_value_color;
    // this.main_value_center.style.padding = "0px 0px 10px 0px";
  this.main_value_center.style.fontSize = config.top_fontSize+"px";
    this.main_value_left.style.color = config.top_label_color;
    this.main_value_right.style.color = config.top_label_color;
    this.main_value_top.style.color = config.top_label_color;
    this.main_value_bottom.style.color = config.top_label_color;
  
    this.main_value_left.style.fontSize = config.top_label_fontSize+"px";
    this.main_value_right.style.fontSize = config.top_label_fontSize+"px";
    this.main_value_top.style.fontSize = config.top_label_fontSize+"px";
    this.main_value_bottom.style.fontSize = config.top_label_fontSize+"px";
  
  if (config.top_bold) {
    this.main_value_center.style.fontWeight = "bold";
  } else {
    this.main_value_center.style.fontWeight = "normal";
  }
  
  
  if (config.comp_bold) {
     this.comp_value_center.style.fontWeight = "bold";
   } else {
     this.comp_value_center.style.fontWeight = "normal";
   }
  
  if (config.comp_label_bold) {
     this.comp_value_left.style.fontWeight = "bold";
     this.comp_value_center_left.style.fontWeight = "bold";
     this.comp_value_right.style.fontWeight = "bold";
     this.comp_value_center_right.style.fontWeight = "bold";
     this.comp_value_top.style.fontWeight = "bold";
     this.comp_value_bottom.style.fontWeight = "bold";
   } else {
     this.comp_value_left.style.fontWeight = "normal";
     this.comp_value_right.style.fontWeight = "normal";
     this.comp_value_top.style.fontWeight = "normal";
     this.comp_value_bottom.style.fontWeight = "normal";
     this.comp_value_center_left.style.fontWeight = "normal";
     this.comp_value_center_right.style.fontWeight = "normal";
   }
  
  if (config.top_label_bold) {
     this.main_value_left.style.fontWeight = "bold";
     this.main_value_right.style.fontWeight = "bold";
     this.main_value_top.style.fontWeight = "bold";
     this.main_value_bottom.style.fontWeight = "bold";
   } else {
     this.main_value_left.style.fontWeight = "normal";
     this.main_value_right.style.fontWeight = "normal";
     this.main_value_top.style.fontWeight = "normal";
     this.main_value_bottom.style.fontWeight = "normal";
   }
  
  this.comp_value_center.style.fontFamily = config.fontFamily;
  this.main_value_center.style.fontFamily = config.fontFamily;
  element.style.fontFamily = config.fontFamily;
  
  
  //header_value += "<BR>" + config.font_size;
  
  //element.innerHTML = html;
    //this.main_value_element.innerHTML = header_value;
    //this.comp_value_element.innerHTML = comparison_value;
  
  
  
  
    //" some_text";
  
  this.main_value_center.innerHTML = header_value;

  
  if (config.comparison_onoff) {
    this.comp_value_center.innerHTML = comparison_value;
  } else {
    this.comp_value_center.innerHTML = "";
  }
  
  // comparison_label = config.comp_label;
  // this.comp_value_center_right.innerHTML = config.comp_label;
  // this.comp_value_center_right.style.color = "red";
  // this.comp_value_center_right.style.textAlign = "right";
  
  // this.comp_value_both.style.backgroundColor = "yellow";
    
    this.comp_value_left.style.textAlign = "right";
    this.comp_value_right.style.textAlign = "left";
    this.comp_value_left.innerHTML = "";
    this.comp_value_right.innerHTML = "";
    this.comp_value_top.innerHTML = "";
    this.comp_value_bottom.innerHTML = "";
    this.comp_value_center_left.innerHTML = "";
    this.comp_value_center_right.innerHTML = "";
    
  // config.comp_label_placement = "below";
  
    if (config.comp_label_placement == "none" || !(config.comparison_onoff)) {
    this.comp_value_left.innerHTML = "";
    this.comp_value_right.innerHTML = "";
    this.comp_value_top.innerHTML = "";
    this.comp_value_bottom.innerHTML = "";
    this.comp_value_center_left.innerHTML = "";
    this.comp_value_center_right.innerHTML = "";
    
   } else if (config.comp_label_placement == "above" && config.comparison_onoff) {
    this.comp_value_top.innerHTML = config.comp_label;
    this.comp_value_center_left.innerHTML = "";
    this.comp_value_center_right.innerHTML = "";
   } else if (config.comp_label_placement == "below" && config.comparison_onoff) {
    this.comp_value_bottom.innerHTML = config.comp_label;
    this.comp_value_center_left.innerHTML = "";
    this.comp_value_center_right.innerHTML = "";
   } else if (config.comp_label_placement == "left" && config.comparison_onoff) {
    // this.comp_value_left.innerHTML = config.comp_label;
    this.comp_value_center_left.innerHTML = config.comp_label+" ";
    this.comp_value_center_right.innerHTML = "";
   } else if (config.comp_label_placement == "right" && config.comparison_onoff) {
    // this.comp_value_right.innerHTML = config.comp_label;
    this.comp_value_center_left.innerHTML = "";
    this.comp_value_center_right.innerHTML = " "+config.comp_label;
   }
  
    this.main_value_left.style.textAlign = "right";
    this.main_value_right.style.textAlign = "left";
    this.main_value_left.innerHTML = "";
    this.main_value_right.innerHTML = "";
    this.main_value_top.innerHTML = "";
    this.main_value_bottom.innerHTML = "";
  // config.top_label_placement = "right";
  if (config.top_label_placement == "none") {
    this.main_value_left.innerHTML = "";
    this.main_value_right.innerHTML = "";
    this.main_value_top.innerHTML = "";
    this.main_value_bottom.innerHTML = "";
   } else if (config.top_label_placement == "above") {
    this.main_value_top.innerHTML = config.top_label;
   } else if (config.top_label_placement == "below") {
    this.main_value_bottom.innerHTML = config.top_label;
   } else if (config.top_label_placement == "left") {
    this.main_value_left.innerHTML = config.top_label;
   } else if (config.top_label_placement == "right") {
    this.main_value_right.innerHTML = config.top_label;
   }
  element.style.margin = "0px 0px 0px 0px";
  element.style.padding = "10px 0px 0px 0px";
  element.style.width = "100%";
  element.style.backgroundColor = config.background_color;
  
    // this.main_value_left.innerHTML = "left";
    // this.main_value_right.innerHTML = "right";
    // this.main_value_top.innerHTML = "top";
    // this.main_value_bottom.innerHTML = "bottom";
  
    // this.comp_value_left.innerHTML = "left";
    // this.comp_value_right.innerHTML = "right";
    // this.comp_value_top.innerHTML = "top";
    // this.comp_value_bottom.innerHTML = "bottom";
  
  
  // var mainDiv = document.getElementById('value_to_compare');
  // mainDiv.style.fontFamily = config.fontFamily;
  
  doneRendering()
  }
  });

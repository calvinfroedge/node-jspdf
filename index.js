var path = './vendor/jsPDF/';
jsPDF = require(path+'jspdf').jsPDF;

//Load all the plugins
var plugins = ['addhtml', 'addimage', 'annotations', 'autoprint', 'cell', 'from_html', 'javascript', 'outline', 'png_support', 'sillysvgrenderer', 'split_text_to_size', 'standard_fonts_metrics', 'total_pages'];
plugins.map(function(plugin){
    require(path+'jspdf.plugin.'+plugin+'.js');
});

//Modify the save function to save to disk
var fs = require('fs');
jsPDF.API.save = function(filename, callback){
    fs.writeFile(filename, this.output(), callback);
}

module.exports = jsPDF;

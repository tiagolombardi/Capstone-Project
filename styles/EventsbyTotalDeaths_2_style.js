var size = 0;
var placement = 'point';

var style_EventsbyTotalDeaths_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("deaths_tot");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5137254901960784)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(223,172,174,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.000000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5137254901960784)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(223,125,128,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.000000 && value <= 5.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.74 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5137254901960784)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(223,88,93,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.000000 && value <= 10.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.84 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5137254901960784)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(211,37,43,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.100000 && value <= 20.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.72 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5137254901960784)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(197,7,17,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20.100000 && value <= 331.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5137254901960784)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(138,0,5,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

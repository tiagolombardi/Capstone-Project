var size = 0;
var placement = 'point';

var style_EventsbyNrofInternationalNews0_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("internatio");
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
    if (value >= 0.000000 && value <= 1.100000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(16,16,16,0.7764705882352941)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.100000 && value <= 5.100000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5019607843137255)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(137,190,222,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.100000 && value <= 10.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5019607843137255)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(45,125,187,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.000000 && value <= 22.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.98 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5019607843137255)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(0,13,90,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

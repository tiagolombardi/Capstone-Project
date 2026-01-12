var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_KashmirConflictArea_1 = new ol.format.GeoJSON();
var features_KashmirConflictArea_1 = format_KashmirConflictArea_1.readFeatures(json_KashmirConflictArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KashmirConflictArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KashmirConflictArea_1.addFeatures(features_KashmirConflictArea_1);
var lyr_KashmirConflictArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KashmirConflictArea_1, 
                style: style_KashmirConflictArea_1,
                popuplayertitle: 'Kashmir Conflict Area',
                interactive: true,
    title: 'Kashmir Conflict Area<br />\
    <img src="styles/legend/KashmirConflictArea_1_0.png" /> Admin. by India; Claimed by Pakistan<br />\
    <img src="styles/legend/KashmirConflictArea_1_1.png" /> Admin. by Pakistan; Claimed by India<br />' });
var format_EventsbyTotalDeaths_2 = new ol.format.GeoJSON();
var features_EventsbyTotalDeaths_2 = format_EventsbyTotalDeaths_2.readFeatures(json_EventsbyTotalDeaths_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EventsbyTotalDeaths_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EventsbyTotalDeaths_2.addFeatures(features_EventsbyTotalDeaths_2);
var lyr_EventsbyTotalDeaths_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EventsbyTotalDeaths_2, 
                style: style_EventsbyTotalDeaths_2,
                popuplayertitle: 'Events by Total Deaths',
                interactive: true,
    title: 'Events by Total Deaths<br />\
    <img src="styles/legend/EventsbyTotalDeaths_2_0.png" /> 0<br />\
    <img src="styles/legend/EventsbyTotalDeaths_2_1.png" /> 1<br />\
    <img src="styles/legend/EventsbyTotalDeaths_2_2.png" /> 2 - 5<br />\
    <img src="styles/legend/EventsbyTotalDeaths_2_3.png" /> 6 - 10<br />\
    <img src="styles/legend/EventsbyTotalDeaths_2_4.png" /> 11 - 20<br />\
    <img src="styles/legend/EventsbyTotalDeaths_2_5.png" /> > 20<br />' });
var format_EventsbyTotalDeathsNrofInternationalNews0_3 = new ol.format.GeoJSON();
var features_EventsbyTotalDeathsNrofInternationalNews0_3 = format_EventsbyTotalDeathsNrofInternationalNews0_3.readFeatures(json_EventsbyTotalDeathsNrofInternationalNews0_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EventsbyTotalDeathsNrofInternationalNews0_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EventsbyTotalDeathsNrofInternationalNews0_3.addFeatures(features_EventsbyTotalDeathsNrofInternationalNews0_3);
var lyr_EventsbyTotalDeathsNrofInternationalNews0_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EventsbyTotalDeathsNrofInternationalNews0_3, 
                style: style_EventsbyTotalDeathsNrofInternationalNews0_3,
                popuplayertitle: 'Events by Total Deaths & Nr. of International News > 0',
                interactive: true,
    title: 'Events by Total Deaths & Nr. of International News > 0<br />\
    <img src="styles/legend/EventsbyTotalDeathsNrofInternationalNews0_3_0.png" /> 0<br />\
    <img src="styles/legend/EventsbyTotalDeathsNrofInternationalNews0_3_1.png" /> 1<br />\
    <img src="styles/legend/EventsbyTotalDeathsNrofInternationalNews0_3_2.png" /> 2 - 5<br />\
    <img src="styles/legend/EventsbyTotalDeathsNrofInternationalNews0_3_3.png" /> 6 - 10<br />\
    <img src="styles/legend/EventsbyTotalDeathsNrofInternationalNews0_3_4.png" /> 11 - 20<br />\
    <img src="styles/legend/EventsbyTotalDeathsNrofInternationalNews0_3_5.png" /> > 20<br />' });
var format_EventsbyNrofInternationalNews0_4 = new ol.format.GeoJSON();
var features_EventsbyNrofInternationalNews0_4 = format_EventsbyNrofInternationalNews0_4.readFeatures(json_EventsbyNrofInternationalNews0_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EventsbyNrofInternationalNews0_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EventsbyNrofInternationalNews0_4.addFeatures(features_EventsbyNrofInternationalNews0_4);
var lyr_EventsbyNrofInternationalNews0_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EventsbyNrofInternationalNews0_4, 
                style: style_EventsbyNrofInternationalNews0_4,
                popuplayertitle: 'Events by Nr. of International News > 0',
                interactive: true,
    title: 'Events by Nr. of International News > 0<br />\
    <img src="styles/legend/EventsbyNrofInternationalNews0_4_0.png" /> 1<br />\
    <img src="styles/legend/EventsbyNrofInternationalNews0_4_1.png" /> 2 - 5<br />\
    <img src="styles/legend/EventsbyNrofInternationalNews0_4_2.png" /> 6 - 10<br />\
    <img src="styles/legend/EventsbyNrofInternationalNews0_4_3.png" /> > 10<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_KashmirConflictArea_1.setVisible(true);lyr_EventsbyTotalDeaths_2.setVisible(true);lyr_EventsbyTotalDeathsNrofInternationalNews0_3.setVisible(true);lyr_EventsbyNrofInternationalNews0_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KashmirConflictArea_1,lyr_EventsbyTotalDeaths_2,lyr_EventsbyTotalDeathsNrofInternationalNews0_3,lyr_EventsbyNrofInternationalNews0_4];
lyr_KashmirConflictArea_1.set('fieldAliases', {'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SUBUNIT': 'SUBUNIT', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', });
lyr_EventsbyTotalDeaths_2.set('fieldAliases', {'dyad_name': 'dyad_name', 'side_a': 'side_a', 'side_b': 'side_b', 'number_of_': 'number_of_', 'source_off': 'source_off', 'deaths_a': 'deaths_a', 'deaths_b': 'deaths_b', 'deaths_civ': 'deaths_civ', 'deaths_unk': 'deaths_unk', 'internatio': 'internatio', 'deaths_tot': 'deaths_tot', });
lyr_EventsbyTotalDeathsNrofInternationalNews0_3.set('fieldAliases', {'dyad_name': 'dyad_name', 'side_a': 'side_a', 'side_b': 'side_b', 'number_of_': 'number_of_', 'source_off': 'source_off', 'deaths_a': 'deaths_a', 'deaths_b': 'deaths_b', 'deaths_civ': 'deaths_civ', 'deaths_unk': 'deaths_unk', 'internatio': 'internatio', 'deaths_tot': 'deaths_tot', });
lyr_EventsbyNrofInternationalNews0_4.set('fieldAliases', {'dyad_name': 'dyad_name', 'side_a': 'side_a', 'side_b': 'side_b', 'source_art': 'source_art', 'source_off': 'source_off', 'source_dat': 'source_dat', 'source_ori': 'source_ori', 'date_start': 'date_start', 'date_end': 'date_end', 'deaths_a': 'deaths_a', 'deaths_b': 'deaths_b', 'deaths_civ': 'deaths_civ', 'deaths_unk': 'deaths_unk', 'indian_new': 'indian_new', 'pakistani_': 'pakistani_', 'internatio': 'internatio', 'deaths_tot': 'deaths_tot', });
lyr_KashmirConflictArea_1.set('fieldImages', {'SOVEREIGNT': '', 'SOV_A3': '', 'TYPE': '', 'ADMIN': '', 'GEOUNIT': '', 'GU_A3': '', 'SUBUNIT': '', 'BRK_NAME': '', 'BRK_GROUP': '', 'NOTE_BRK': '', 'NAME_SORT': '', });
lyr_EventsbyTotalDeaths_2.set('fieldImages', {'dyad_name': 'TextEdit', 'side_a': 'TextEdit', 'side_b': 'TextEdit', 'number_of_': 'TextEdit', 'source_off': 'TextEdit', 'deaths_a': 'Range', 'deaths_b': 'Range', 'deaths_civ': 'TextEdit', 'deaths_unk': 'TextEdit', 'internatio': 'TextEdit', 'deaths_tot': 'TextEdit', });
lyr_EventsbyTotalDeathsNrofInternationalNews0_3.set('fieldImages', {'dyad_name': 'TextEdit', 'side_a': 'TextEdit', 'side_b': 'TextEdit', 'number_of_': 'TextEdit', 'source_off': 'TextEdit', 'deaths_a': 'Range', 'deaths_b': 'Range', 'deaths_civ': 'TextEdit', 'deaths_unk': 'TextEdit', 'internatio': 'TextEdit', 'deaths_tot': 'TextEdit', });
lyr_EventsbyNrofInternationalNews0_4.set('fieldImages', {'dyad_name': 'TextEdit', 'side_a': 'TextEdit', 'side_b': 'TextEdit', 'source_art': 'TextEdit', 'source_off': 'TextEdit', 'source_dat': 'TextEdit', 'source_ori': 'TextEdit', 'date_start': 'DateTime', 'date_end': 'DateTime', 'deaths_a': 'Range', 'deaths_b': 'Range', 'deaths_civ': 'TextEdit', 'deaths_unk': 'TextEdit', 'indian_new': 'TextEdit', 'pakistani_': 'TextEdit', 'internatio': 'TextEdit', 'deaths_tot': 'TextEdit', });
lyr_KashmirConflictArea_1.set('fieldLabels', {'SOVEREIGNT': 'hidden field', 'SOV_A3': 'hidden field', 'TYPE': 'hidden field', 'ADMIN': 'hidden field', 'GEOUNIT': 'hidden field', 'GU_A3': 'hidden field', 'SUBUNIT': 'hidden field', 'BRK_NAME': 'hidden field', 'BRK_GROUP': 'hidden field', 'NOTE_BRK': 'hidden field', 'NAME_SORT': 'hidden field', });
lyr_EventsbyTotalDeaths_2.set('fieldLabels', {'dyad_name': 'inline label - visible with data', 'side_a': 'inline label - visible with data', 'side_b': 'inline label - visible with data', 'number_of_': 'inline label - visible with data', 'source_off': 'inline label - visible with data', 'deaths_a': 'inline label - visible with data', 'deaths_b': 'inline label - visible with data', 'deaths_civ': 'inline label - visible with data', 'deaths_unk': 'inline label - visible with data', 'internatio': 'inline label - visible with data', 'deaths_tot': 'inline label - visible with data', });
lyr_EventsbyTotalDeathsNrofInternationalNews0_3.set('fieldLabels', {'dyad_name': 'inline label - visible with data', 'side_a': 'inline label - visible with data', 'side_b': 'inline label - visible with data', 'number_of_': 'inline label - visible with data', 'source_off': 'inline label - visible with data', 'deaths_a': 'inline label - visible with data', 'deaths_b': 'inline label - visible with data', 'deaths_civ': 'inline label - visible with data', 'deaths_unk': 'inline label - visible with data', 'internatio': 'inline label - visible with data', 'deaths_tot': 'inline label - visible with data', });
lyr_EventsbyNrofInternationalNews0_4.set('fieldLabels', {'dyad_name': 'hidden field', 'side_a': 'inline label - visible with data', 'side_b': 'inline label - visible with data', 'source_art': 'hidden field', 'source_off': 'inline label - visible with data', 'source_dat': 'hidden field', 'source_ori': 'hidden field', 'date_start': 'hidden field', 'date_end': 'hidden field', 'deaths_a': 'hidden field', 'deaths_b': 'hidden field', 'deaths_civ': 'hidden field', 'deaths_unk': 'hidden field', 'indian_new': 'hidden field', 'pakistani_': 'hidden field', 'internatio': 'inline label - visible with data', 'deaths_tot': 'inline label - visible with data', });
lyr_EventsbyNrofInternationalNews0_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
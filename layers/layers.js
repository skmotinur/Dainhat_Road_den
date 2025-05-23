var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Dainhat_1 = new ol.format.GeoJSON();
var features_Dainhat_1 = format_Dainhat_1.readFeatures(json_Dainhat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dainhat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dainhat_1.addFeatures(features_Dainhat_1);
var lyr_Dainhat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dainhat_1, 
                style: style_Dainhat_1,
                popuplayertitle: "Dainhat",
                interactive: true,
    title: 'Dainhat<br />\
    <img src="styles/legend/Dainhat_1_0.png" /> 0.038 - 0.075<br />\
    <img src="styles/legend/Dainhat_1_1.png" /> 0.075 - 0.161<br />\
    <img src="styles/legend/Dainhat_1_2.png" /> 0.161 - 0.355<br />\
    <img src="styles/legend/Dainhat_1_3.png" /> 0.355 - 1.043<br />\
    <img src="styles/legend/Dainhat_1_4.png" /> 1.043 - 1.364<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Dainhat_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Dainhat_1];
lyr_Dainhat_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Id': 'Id', 'WARD_NO_': 'Ward no.:', 'AREA': 'AREA', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'ER_ID': 'ER_ID', 'STATE_ID': 'STATE_ID', 'BLOCK_ID': 'BLOCK_ID', 'DISTRICT_I': 'DISTRICT_I', 'DRRP_ROAD_': 'DRRP_ROAD_', 'RoadCatego': 'RoadCatego', 'RoadName': 'RoadName', 'LENGTH': 'LENGTH', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RD_DENSITY': 'Road density:', });
lyr_Dainhat_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'Id': 'TextEdit', 'WARD_NO_': 'TextEdit', 'AREA': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'ER_ID': 'TextEdit', 'STATE_ID': 'TextEdit', 'BLOCK_ID': 'TextEdit', 'DISTRICT_I': 'TextEdit', 'DRRP_ROAD_': 'TextEdit', 'RoadCatego': 'TextEdit', 'RoadName': 'TextEdit', 'LENGTH': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RD_DENSITY': 'TextEdit', });
lyr_Dainhat_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'Join_Count': 'hidden field', 'TARGET_FID': 'hidden field', 'Id': 'hidden field', 'WARD_NO_': 'inline label - always visible', 'AREA': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID_3': 'hidden field', 'OBJECTID_4': 'hidden field', 'OBJECTID': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'ER_ID': 'hidden field', 'STATE_ID': 'hidden field', 'BLOCK_ID': 'hidden field', 'DISTRICT_I': 'hidden field', 'DRRP_ROAD_': 'hidden field', 'RoadCatego': 'hidden field', 'RoadName': 'hidden field', 'LENGTH': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'RD_DENSITY': 'inline label - always visible', });
lyr_Dainhat_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
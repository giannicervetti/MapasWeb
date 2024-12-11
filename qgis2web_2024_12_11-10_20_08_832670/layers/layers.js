var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_pnr0926_2 = new ol.format.GeoJSON();
var features_pnr0926_2 = format_pnr0926_2.readFeatures(json_pnr0926_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pnr0926_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pnr0926_2.addFeatures(features_pnr0926_2);
var lyr_pnr0926_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pnr0926_2, 
                style: style_pnr0926_2,
                popuplayertitle: "pnr0926",
                interactive: true,
                title: '<img src="styles/legend/pnr0926_2.png" /> pnr0926'
            });
var format_pnu0926_3 = new ol.format.GeoJSON();
var features_pnu0926_3 = format_pnu0926_3.readFeatures(json_pnu0926_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pnu0926_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pnu0926_3.addFeatures(features_pnu0926_3);
var lyr_pnu0926_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pnu0926_3, 
                style: style_pnu0926_3,
                popuplayertitle: "pnu0926",
                interactive: true,
                title: '<img src="styles/legend/pnu0926_3.png" /> pnu0926'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_pnr0926_2.setVisible(true);lyr_pnu0926_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_pnr0926_2,lyr_pnu0926_3];
lyr_pnr0926_2.set('fieldAliases', {'NOMENC': 'NOMENC', });
lyr_pnu0926_3.set('fieldAliases', {'NOMENC': 'NOMENC', });
lyr_pnr0926_2.set('fieldImages', {'NOMENC': 'TextEdit', });
lyr_pnu0926_3.set('fieldImages', {'NOMENC': 'TextEdit', });
lyr_pnr0926_2.set('fieldLabels', {'NOMENC': 'inline label - visible with data', });
lyr_pnu0926_3.set('fieldLabels', {'NOMENC': 'inline label - always visible', });
lyr_pnu0926_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
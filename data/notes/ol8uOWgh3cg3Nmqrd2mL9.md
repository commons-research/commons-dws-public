
# Geo Data visu

Looking to display and share .gpx data 

https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer

It is apparently possible to add .csv data to an existing .gpx map
https://docs.kepler.gl/docs/user-guides/b-kepler-gl-workflow/a-add-data-to-the-map#csv

I used https://geogeek.xyz/wp-content/uploads/2017/08/coordinate_converter.xlsx to convert UTM coord to decimal lon lat. Not ideal but did the job.

You can then add and combine .gpx or csv of lat long in the geo-data-viewer and export the .html.
When you open this one it will be opened in the kepler website. There you can export as shareable html (dont forget to add your personal token)
Here is an example [finca](../../../../../Users/pma/Dropbox/dendron/vault/assets/private.assets/terreno_pma_kepler.gl.html)


Au cours des siècles précédents, les scientifiques occidentaux ont exploré le monde à la recherche de nouvelles espèces végétales et animales, qu'ils ont répertoriées et dont ils ont caractérisé le contenu chimique. Certaines de ces découvertes ont conduit à l'exploitation des ressources naturelles au profit de divers secteurs industriels, notamment l'industrie pharmaceutique, parfois au détriment des communautés locales qui détenaient des connaissances traditionnelles sur les vertus médicinales des plantes concernées. La mise en œuvre du protocole de Nagoya en 2014 a établi un cadre juridique protecteur pour favoriser des échanges plus équitables de ressources naturelles et de connaissances associées entre les pays. Aujourd'hui, la bioprospection est encadrée par ce protocole et toute recherche de nouvelles molécules passe par un accord avec les pays d'origine des plantes concernées.


Looking to pass these coordinates to Restor plot

{"name":"coordTimes","type":"geojson","format":"","analyzerType":"ARRAY"}]}},{"version":"v1","data":{"id":"3hssoo2mf","label":"terreno_1_decimal.csv","color":[0,92,255],"allData":[[-1.30233732,-78.02393279],[-1.30101016,-78.03649421],[-1.30267186,-78.03776368],[-1.30406734,-78.02385553],[-1.30331076,-78.02325757],[-1.30324003,-78.02395417]],"fields":[{"name":"lat","type":"real","format":"","analyzerType":"FLOAT"},{"name":"lon","type":"real","format":"","analyzerType":"FLOAT"}]}},{"version":"v1","data":{"id":"h5zw1xlsa","label":"terreno_2_decimal.csv","color":[192,108,132],"allData":[[-1.30571595,-78.02514168],[-1.30406734,-78.02385553],[-1.30267186,-78.03776368],[-1.30433356,-78.03903305]],"fields":[{"name":"lat","type":"real","format":"","analyzerType":"FLOAT"},{"name":"lon","type":"real","format":"","analyzerType":"FLOAT"}]}}];

I generate it using https://geojson.io/#map=14.18/-1.30079/-78.03852
Terreno1 

{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              -78.02393279,
                -1.30233732
            ],
            [
              -78.03649421,
                -1.30101016
            ],
            [
              -78.03776368,
                -1.30267186
            ],
            [
              -78.02385553,
                -1.30406734
            ],
            [
              -78.02325757,
                -1.30331076
            ],
            [
              -78.02395417,
                -1.30324003
            ],
            [
              -78.02514168,
                -1.30571595
          ],
          [
            -78.02385553,
              -1.30406734
          ],
          [
            -78.03776368,
              -1.30267186
          ],
          [
            -78.03903305,
              -1.30433356
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}

Corrected format

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [-78.02393279, -1.30233732],
            [-78.03649421, -1.30101016],
            [-78.03776368, -1.30267186],
            [-78.02385553, -1.30406734],
            [-78.02325757, -1.30331076],
            [-78.02395417, -1.30324003],
            [-78.02514168, -1.30571595],
            [-78.02385553, -1.30406734],
            [-78.03776368, -1.30267186],
            [-78.03903305, -1.30433356],
            [-78.02393279, -1.30233732]  // Repeated to close the ring
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}
```


-1.30233732,-78.02393279
-1.30101016,-78.03649421
-1.30267186,-78.03776368
-1.30406734,-78.02385553
-1.30331076,-78.02325757
-1.30324003,-78.02395417
-1.30571595,-78.02514168
-1.30406734,-78.02385553
-1.30267186,-78.03776368
-1.30433356,-78.03903305


We write  .shp file using the previosu coordinates




{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [-1.30233732,-78.02393279],
            [-1.30101016,-78.03649421],
            [-1.30267186,-78.03776368],
            [-1.30406734,-78.02385553],
            [-1.30331076,-78.02325757],
            [-1.30324003,-78.02395417],
            [-1.30571595,-78.02514168],
            [-1.30406734,-78.02385553],
            [-1.30267186,-78.03776368],
            [-1.30433356,-78.03903305]  // Repeated to close the ring
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}


Terreno pix 
https://photos.app.goo.gl/D7R9LkTbJo9CwNf22


Restor plot created at https://restor.eco/sites/2a4c1765-f607-46b6-9bce-373f67ef8fc8/?lat=-1.3033646961059957&lng=-78.03114165500001&zoom=16


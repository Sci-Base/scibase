define({ "api": [
  {
    "type": "get",
    "url": "/aminer",
    "title": "Query Aminer database",
    "name": "Aminer",
    "group": "Aminer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Unique ID of the article.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publication",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of article.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Pagination.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "index",
            "description": "<p>Index of article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publication",
            "description": "<p>Publication of article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "abstract",
            "description": "<p>Abstract of article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "authors",
            "description": "<p>Authors.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "references",
            "description": "<p>References.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year of publication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"err\":false,\n     \"message\":\"Documents found successfully\",\n     \"data\":[\n         {\n             \"_id\":\"56bd754087290e1671193a21\",\n             \"index\":\"1272418\",\n             \"publication\":\"Expert Syst. Appl.\",\n             \"title\":\"Locally edge-adapted distance for image interpolation based on genetic fuzzy system.\",\n             \"abstract\":\"\",\n             \"year\":\"2010\",\n             \"references\":[\"808173\",\"947678\",\"1150324\"],\n             \"authors\":[]\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/aminer.js",
    "groupTitle": "Aminer"
  }
] });

```javascript


"editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          //following will be in italic (=FlottFlott)
          "comment",
          "entity.name.type.class", //class names
          "entity.other.attribute-name", //HTML Attributes
          "keyword", //import, export, return…
          "constant", //String, Number, Boolean…, this, super
          "storage.modifier", //static keyword
          "storage.type.class.js" //class keyword
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          //following will be excluded from italics (VSCode has some defaults for italics)
          "invalid",
          "keyword.operator",
          "constant.numeric.css",
          "keyword.other.unit.px.css",
          "constant.numeric.decimal.js",
          "constant.numeric.json"
        ],
        "settings": {
          "fontStyle": ""
        }
      }
    ]
  },

```

<!-- this is in font setting at  normal setting not json setting upper code is in json setting code  -->

`'Fira Code i', 'cascadia code', 'Consolas', 'Courier New', 'monospace'`
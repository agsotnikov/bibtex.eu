export default {
  "title": "BibTeX",
  "tagline": "BibTeX is a literature management software for formatting references for LaTeX. ",
  "url": "https://bibtex.eu",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "citedrive",
  "projectName": "bibtex.eu",
  "plugins": [
    [
      "@docusaurus/plugin-content-blog",
      {
        "blogTitle": "BibTeX bibliography and citation styles",
        "id": "styles",
        "routeBasePath": "styles",
        "path": "./styles"
      }
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        "blogTitle": "BibTeX / BibLaTeX fields",
        "id": "fields",
        "routeBasePath": "fields",
        "path": "./fields",
        "blogSidebarTitle": "BibTeX Fields",
        "blogSidebarCount": "ALL"
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "BibTeX Logo",
        "src": "img/logo.svg",
        "srcDark": "img/logo_dark.svg"
      },
      "items": [
        {
          "href": "/overleaf-citedrive",
          "label": "Overleaf",
          "position": "right"
        },
        {
          "href": "https://github.com/citedrive/bibtex.eu",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "CiteDrive",
          "items": [
            {
              "label": "CiteDrive - Home",
              "to": "https://citedrive.com/en/"
            },
            {
              "label": "CiteDrive - App",
              "to": "https://app.citedrive.com/"
            },
            {
              "label": "CiteDrive - Forum",
              "to": "http://forum.citedrive.com/"
            }
          ]
        },
        {
          "title": "BibTeX",
          "items": [
            {
              "label": "BibTeX - Fields",
              "to": "/fields"
            },
            {
              "label": "BibTeX - Types",
              "to": "/types"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "to": "https://twitter.com/citedrive"
            },
            {
              "label": "Facebook",
              "to": "https://www.facebook.com/citedrive"
            },
            {
              "label": "LinkedIn",
              "to": "https://www.linkedin.com/company/citedrive"
            },
            {
              "label": "YouTube",
              "to": "https://www.youtube.com/channel/UC3ouAJ9bMVs4wti5cRUd9ag"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 BibTeX.eu - Open source docs - Sponsored by CiteDrive LLC."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/garethii/Documents/GitHub/bibtex.eu/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/citedrive/bibtex.eu/tree/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/citedrive/bibtex.eu/blog"
        },
        "theme": {
          "customCss": "/Users/garethii/Documents/GitHub/bibtex.eu/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};
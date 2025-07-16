/*
Transform the following keys to a hierarchical nested object
*/

const keys = [
  "/dist/",
  "/dist/js/",
  "/index.html",
  "/image/screenshots/ios/ipad/temp/",
  "/dist/js/main.js",
  "/dist/css/main.css",
  "/image/hero_2x.png",
  "/image/screenshots/web/dashboard_2x.png"
];

function keysToObjects(input) {
  const rootDir = {};
  for (const key of input) {
    const pathArr = key.split('/');
    let curDir = rootDir;
    for (const [idx, pathElt] of pathArr.entries()) {
      if (!curDir[pathElt]) {
        if (pathElt === '') continue;
        if (idx == pathArr.length - 1) {
          curDir[pathElt] = null;
        } else {
          curDir[pathElt] = {};
        }
      }
      curDir = curDir[pathElt];
    }
  }
  return rootDir;
}

console.log(JSON.stringify(keysToObjects(keys), null, 2));

/***** example output *****
{
  index.html: null,
  dist: {
    js: {
      main.js: null
    },
    css: {
      main.css: null
    }
  },
  image: {
    hero_2x.png: null,
    screenshots: {
      web: {
        dashboard_2x.png: null
      },
      ios: {
        ipad: {
          temp: {}
        }
      }
    }
  }
}
***************************/

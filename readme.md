# vbb-common-places

This is a collection of **aliases for common stations** (like "zoo", "alex", "kotti") to make the search better. Mostly taken from [a Wikipedia article](https://de.wikipedia.org/wiki/Berolinismus#Stra.C3.9Fen.2C_Pl.C3.A4tze_und_Gegenden).

[![npm version](https://img.shields.io/npm/v/vbb-common-places.svg)](https://www.npmjs.com/package/vbb-common-places)
[![dependency status](https://img.shields.io/david/derhuerst/vbb-common-places.svg)](https://david-dm.org/derhuerst/vbb-common-places)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/vbb-common-places.svg)](https://david-dm.org/derhuerst/vbb-common-places#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-common-places.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installing

```shell
npm install vbb-common-places
```


## Usage

```js
const {stations, addresses} = require('vbb-common-places')

console.log(stations)
console.log(addresses)
```

```js
{
	zoo:       '900000023201', // S+U Zoologischer Garten Bhf (Berlin)
	kotti:     '900000013102', // U Kottbusser Tor (Berlin)
	witzleben: '900000024106', // S Messe Nord/ICC (Berlin)
	// …
}
```

```js
{
	stutti: {
		name: 'Stuttgarter Platz',
		longitude: 13.301503,
		latitude: 52.504916
	}
}
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-common-places/issues).

import {test} from 'node:test'
import {
	strictEqual,
	ok,
} from 'node:assert/strict'
import stations from 'vbb-stations'

import {
	stations as stationAliases,
	addresses as addressAliases,
} from './index.js'

test('stations', (t) => {
	for (let name in stationAliases) {
		const id = stationAliases[name]
		// As of 2026-05-11 (vbb-stations@8.31.0), VBB's data is currently broken, `de:11000:900086161` (U Otisstr.) doesn't exist, just `de:11000:900086161:1` & `de:11000:900086161:2`.
		if (id === 'de:11000:900086161') {
			continue
		}

		strictEqual(typeof id, 'string', `${name}: Value should be a valid id.`)
		const station = stations(id)[0]
		ok(station, `${id}: station should exist.`)
		if (!station) continue
		strictEqual(station.id, id, `${id}: station.id should exist.`)
	}
})

test('addresses', (t) => {
	for (let key in addressAliases) {
		const address = addressAliases[key]
		strictEqual(typeof address.name, 'string')
		strictEqual(typeof address.latitude, 'number')
		strictEqual(typeof address.longitude, 'number')
	}
})

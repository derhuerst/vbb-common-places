#!/usr/bin/env node

import test from 'tape'
import stations from 'vbb-stations'

import {
	stations as stationAliases,
	addresses as addressAliases,
} from './index.js'

test('stations', (t) => {
	for (let name in stationAliases) {
		const id = stations[name]
		// As of 2026-05-11 (vbb-stations@8.31.0), VBB's data is currently broken, `de:11000:900086161` (U Otisstr.) doesn't exist, just `de:11000:900086161:1` & `de:11000:900086161:2`.
		if (id === 'de:11000:900086161') {
			continue
		}

		t.equal(typeof id, 'string', `${name}: Value should be a valid id.`)
		const station = stations(id)[0]
		t.ok(station, `${id}: station should exist.`)
		if (!station) continue
		t.equal(station.id, id, `${id}: station.id should exist.`)
	}
	t.end()
})

test('addresses', (t) => {
	for (let key in addressAliases) {
		const address = addressAliases[key]
		t.equal(typeof address.name, 'string')
		t.equal(typeof address.latitude, 'number')
		t.equal(typeof address.longitude, 'number')
	}

	t.end()
})

#!/usr/bin/env node
'use strict'

const test = require('tape')
const stations = require('vbb-stations')

const places = require('./index')

test('stations', (t) => {
	for (let name in places.stations) {
		const id = places.stations[name]
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
	for (let key in places.addresses) {
		const address = places.addresses[key]
		t.equal(typeof address.name, 'string')
		t.equal(typeof address.latitude, 'number')
		t.equal(typeof address.longitude, 'number')
	}

	t.end()
})

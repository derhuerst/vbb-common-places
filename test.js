#!/usr/bin/env node
'use strict'

const test = require('tape')
const stations = require('vbb-stations')

const places = require('./index')

test('stations', (t) => {
	for (let name in places.stations) {
		const id = places.stations[name]
		t.equal(typeof id, 'string', 'Value should be a valid id.')
		const station = stations(id)[0]
		t.equal(station.id, id, 'Station id should exist.')
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

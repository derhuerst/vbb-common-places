#!/usr/bin/env node
'use strict'

const test     = require('blue-tape')
const so       = require('so')
const stations = require('vbb-stations')
const tokenize = require('vbb-tokenize-station')

const places   = require('./index')



test('keys', (t) => {
	for (let key in places.stations) {
		t.equal(tokenize(key).join(' '), key, 'Key should be in tokenized form.')
	}
	t.end()
})

test('values', so(function* (t) {
	for (let key in places.stations) {
		const id = places.stations[key]
		t.equal(typeof id, 'string', 'Value should be a valid id.')
		const station = stations(id)[0]
		t.equal(station.id, id, 'Station id should exist.')
	}
}))

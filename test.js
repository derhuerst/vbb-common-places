#!/usr/bin/env node
'use strict'

const test     = require('blue-tape')
const so       = require('so')
const stations = require('vbb-stations')
const tokenize = require('vbb-tokenize-station')

const places   = require('./index')



test('stations', (t) => {
	t.test('keys', (t) => {
		for (let key in places.stations) {
			t.equal(tokenize(key).join(' '), key, 'Key should be in tokenized form.')
		}
		t.end()
	})

	t.test('values', so(function* (t) {
		for (let key in places.stations) {
			const id = places.stations[key]
			t.equal(typeof id, 'string', 'Value should be a valid id.')
			const station = stations(id)[0]
			t.equal(station.id, id, 'Station id should exist.')
		}
	}))

	t.end()
})



test('addresses', (t) => {
	t.test('keys', (t) => {
		for (let key in places.addresses) {
			t.equal(tokenize(key).join(' '), key, 'Key should be in tokenized form.')
		}
		t.end()
	})

	t.test('values', so(function* (t) {
		for (let key in places.addresses) {
			const address = places.addresses[key]
			t.equal(typeof address.name, 'string')
			t.equal(typeof address.latitude, 'number')
			t.equal(typeof address.longitude, 'number')
		}
	}))

	t.end()
})

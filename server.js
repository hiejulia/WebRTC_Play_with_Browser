'use strict';
var http = require('http');
var fs = require('fs');
var websocket = require('websocket').server;
var port = process.env.PORT || 3000;
var webrtc_clients = [];
var webrtc_discussions = {};

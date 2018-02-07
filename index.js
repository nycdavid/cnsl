#!/usr/bin/env node

const cnsl = require('commander');
const request = require('axios');

function Member(json) {
  this.name = json.Name;
}

function ConsulServer() {
  this.type = 'consul_server';
}

function Node() {
  this.type = 'node';
}

cnsl
  .option('-A, --agent <cmd>', 'Call the Consul Agent API', async cmd => {
    let url = `http://localhost:8500/v1/agent/${cmd}`;
    let res = await request.get(url);
    let apiMembers = res.data;
    let members = apiMembers.map(member => new Member(member));
    console.log(res);
  });

cnsl.parse(process.argv);

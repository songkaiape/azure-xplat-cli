// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jsxplat';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jsxplat.centralus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .delete('/pools/xplatTestPool/nodes/tvm-4036039286_1-20160321t221745z/files/workitems%5Cxplatjobforfiletestsjob-1%5Cxplattaskwd%09askOut.txt?api-version=2015-12-01.2.2&timeout=30')
  .reply(400, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"\"http://www.w3.org/TR/html4/strict.dtd\">\r\n<HTML><HEAD><TITLE>Bad Request</TITLE>\r\n<META HTTP-EQUIV=\"Content-Type\" Content=\"text/html; charset=us-ascii\"></HEAD>\r\n<BODY><h2>Bad Request - Invalid URL</h2>\r\n<hr><p>HTTP Error 400. The request URL is invalid.</p>\r\n</BODY></HTML>\r\n", { 'content-type': 'text/html; charset=us-ascii',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Mon, 21 Mar 2016 23:33:16 GMT',
  connection: 'close',
  'content-length': '324' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .delete('/pools/xplatTestPool/nodes/tvm-4036039286_1-20160321t221745z/files/workitems%5Cxplatjobforfiletestsjob-1%5Cxplattaskwd%09askOut.txt?api-version=2015-12-01.2.2&timeout=30')
  .reply(400, "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"\"http://www.w3.org/TR/html4/strict.dtd\">\r\n<HTML><HEAD><TITLE>Bad Request</TITLE>\r\n<META HTTP-EQUIV=\"Content-Type\" Content=\"text/html; charset=us-ascii\"></HEAD>\r\n<BODY><h2>Bad Request - Invalid URL</h2>\r\n<hr><p>HTTP Error 400. The request URL is invalid.</p>\r\n</BODY></HTML>\r\n", { 'content-type': 'text/html; charset=us-ascii',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Mon, 21 Mar 2016 23:33:16 GMT',
  connection: 'close',
  'content-length': '324' });
 return result; }]];
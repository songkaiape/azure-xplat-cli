// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-23a4-e65f717fd101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":10000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '392',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-23a4-e65f717fd101',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '583101d7-de6b-4cda-822f-1b6c7ca7e34b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'c96dfcfb-33f9-449b-bd73-b12e68b585e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104841Z:c96dfcfb-33f9-449b-bd73-b12e68b585e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-23a4-e65f717fd101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":10000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '392',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-23a4-e65f717fd101',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '583101d7-de6b-4cda-822f-1b6c7ca7e34b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'c96dfcfb-33f9-449b-bd73-b12e68b585e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104841Z:c96dfcfb-33f9-449b-bd73-b12e68b585e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"085204c7-bf53-488a-86a7-ac9ea4aa39ed\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '411',
  'content-type': 'application/json; charset=utf-8',
  etag: '085204c7-bf53-488a-86a7-ac9ea4aa39ed',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c020635e-f5e8-4934-bded-c009d48b3b77',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'cb848f09-67e3-48e1-9452-cb04d2d94995',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104841Z:cb848f09-67e3-48e1-9452-cb04d2d94995',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"085204c7-bf53-488a-86a7-ac9ea4aa39ed\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '411',
  'content-type': 'application/json; charset=utf-8',
  etag: '085204c7-bf53-488a-86a7-ac9ea4aa39ed',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c020635e-f5e8-4934-bded-c009d48b3b77',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'cb848f09-67e3-48e1-9452-cb04d2d94995',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104841Z:cb848f09-67e3-48e1-9452-cb04d2d94995',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"486674d7-cf14-428e-8925-ef2d4771b3b2\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[{\"ipv4Address\":\"192.168.17.18\"}]}}", { 'cache-control': 'private',
  'content-length': '442',
  'content-type': 'application/json; charset=utf-8',
  etag: '486674d7-cf14-428e-8925-ef2d4771b3b2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '62e7343d-db1f-4b56-a71a-2c3759a88270',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '9e4fc859-27c9-4d18-805d-4cb00764a45b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104842Z:9e4fc859-27c9-4d18-805d-4cb00764a45b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"486674d7-cf14-428e-8925-ef2d4771b3b2\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[{\"ipv4Address\":\"192.168.17.18\"}]}}", { 'cache-control': 'private',
  'content-length': '442',
  'content-type': 'application/json; charset=utf-8',
  etag: '486674d7-cf14-428e-8925-ef2d4771b3b2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '62e7343d-db1f-4b56-a71a-2c3759a88270',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '9e4fc859-27c9-4d18-805d-4cb00764a45b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104842Z:9e4fc859-27c9-4d18-805d-4cb00764a45b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:42 GMT',
  connection: 'close' });
 return result; }]];
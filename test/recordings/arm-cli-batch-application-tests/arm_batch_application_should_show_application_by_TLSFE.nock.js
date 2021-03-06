// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch7370\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch7370.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Storage/storageAccounts/armclibatch1951\",\"lastKeySync\":\"2016-04-13T19:08:30.5521107Z\"}},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 13 Apr 2016 19:09:21 GMT',
  etag: '0x8D363CF1EF695B3',
  'request-id': 'e1220d32-8ec0-44ef-930d-a79dd4655938',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-request-id': 'fe8da60d-ef0d-4799-a9a9-94dac5d32ab5',
  'x-ms-correlation-request-id': 'fe8da60d-ef0d-4799-a9a9-94dac5d32ab5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190922Z:fe8da60d-ef0d-4799-a9a9-94dac5d32ab5',
  date: 'Wed, 13 Apr 2016 19:09:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch7370\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch7370.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Storage/storageAccounts/armclibatch1951\",\"lastKeySync\":\"2016-04-13T19:08:30.5521107Z\"}},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 13 Apr 2016 19:09:21 GMT',
  etag: '0x8D363CF1EF695B3',
  'request-id': 'e1220d32-8ec0-44ef-930d-a79dd4655938',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-request-id': 'fe8da60d-ef0d-4799-a9a9-94dac5d32ab5',
  'x-ms-correlation-request-id': 'fe8da60d-ef0d-4799-a9a9-94dac5d32ab5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190922Z:fe8da60d-ef0d-4799-a9a9-94dac5d32ab5',
  date: 'Wed, 13 Apr 2016 19:09:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370/listKeys?api-version=2015-12-01')
  .reply(200, "{\"accountName\":\"armclibatch7370\",\"primary\":\"E0fzEuqJjn50+Wf6XPc1c7/zVT6d2DzNWUmewhhSbKcgSvq7qU9Fa0KE1+N0meym8AYW3isnHvk91Q++oHqNBA==\",\"secondary\":\"TIxe14o3C82cefeF/B1By/ZZNCFAyeTPRN0cUJDCmOB6dkdU17axYahR/iMMgkhM2IJUbUDo8+Fa5UnTyqmFXg==\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'e9ed3110-c71c-47a0-9efd-bd41cf11cc7f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c42d91a2-cf11-428e-9a27-0e844b8729a8',
  'x-ms-correlation-request-id': 'c42d91a2-cf11-428e-9a27-0e844b8729a8',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190923Z:c42d91a2-cf11-428e-9a27-0e844b8729a8',
  date: 'Wed, 13 Apr 2016 19:09:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370/listKeys?api-version=2015-12-01')
  .reply(200, "{\"accountName\":\"armclibatch7370\",\"primary\":\"E0fzEuqJjn50+Wf6XPc1c7/zVT6d2DzNWUmewhhSbKcgSvq7qU9Fa0KE1+N0meym8AYW3isnHvk91Q++oHqNBA==\",\"secondary\":\"TIxe14o3C82cefeF/B1By/ZZNCFAyeTPRN0cUJDCmOB6dkdU17axYahR/iMMgkhM2IJUbUDo8+Fa5UnTyqmFXg==\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'e9ed3110-c71c-47a0-9efd-bd41cf11cc7f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c42d91a2-cf11-428e-9a27-0e844b8729a8',
  'x-ms-correlation-request-id': 'c42d91a2-cf11-428e-9a27-0e844b8729a8',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190923Z:c42d91a2-cf11-428e-9a27-0e844b8729a8',
  date: 'Wed, 13 Apr 2016 19:09:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://armclibatch7370.westus.batch.azure.com:443')
  .get('/applications/armclibatchapp4948?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://armclibatch7370.westus.batch.azure.com/$metadata#getapplicationsummaryresponse/@Element\",\"id\":\"armclibatchapp4948\",\"versions\":[\r\n    \"1.0\"\r\n  ],\"displayName\":\"test\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '40b0a99d-e5d0-40cb-b348-47af11ce35d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '57e40335-c116-4edf-b865-79588e5f8357',
  dataserviceversion: '3.0',
  date: 'Wed, 13 Apr 2016 19:09:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://armclibatch7370.westus.batch.azure.com:443')
  .get('/applications/armclibatchapp4948?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://armclibatch7370.westus.batch.azure.com/$metadata#getapplicationsummaryresponse/@Element\",\"id\":\"armclibatchapp4948\",\"versions\":[\r\n    \"1.0\"\r\n  ],\"displayName\":\"test\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '40b0a99d-e5d0-40cb-b348-47af11ce35d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '57e40335-c116-4edf-b865-79588e5f8357',
  dataserviceversion: '3.0',
  date: 'Wed, 13 Apr 2016 19:09:23 GMT',
  connection: 'close' });
 return result; }]];
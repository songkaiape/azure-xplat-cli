// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155\",\r\n  \"name\": \"xplatTestaAvail9155\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '363f7dbf-1152-4a35-bcd6-102091ed68ee',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '3421bea1-0fcd-4b4a-9ccf-4c8b3542284e',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230033Z:3421bea1-0fcd-4b4a-9ccf-4c8b3542284e',
  date: 'Mon, 25 Apr 2016 23:00:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155\",\r\n  \"name\": \"xplatTestaAvail9155\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '363f7dbf-1152-4a35-bcd6-102091ed68ee',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '3421bea1-0fcd-4b4a-9ccf-4c8b3542284e',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230033Z:3421bea1-0fcd-4b4a-9ccf-4c8b3542284e',
  date: 'Mon, 25 Apr 2016 23:00:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155?api-version=2016-03-30')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': 'e446ace8-5eda-4620-abb2-aa75af78ebfe',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '03edf07c-744c-44cc-af25-a4582e96c5ad',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230035Z:03edf07c-744c-44cc-af25-a4582e96c5ad',
  date: 'Mon, 25 Apr 2016 23:00:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155?api-version=2016-03-30')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': 'e446ace8-5eda-4620-abb2-aa75af78ebfe',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '03edf07c-744c-44cc-af25-a4582e96c5ad',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230035Z:03edf07c-744c-44cc-af25-a4582e96c5ad',
  date: 'Mon, 25 Apr 2016 23:00:34 GMT',
  connection: 'close' });
 return result; }]];
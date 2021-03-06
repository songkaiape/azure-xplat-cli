// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c196c564-e105-4380-8e89-ab24685a3bc5',
  'x-ms-correlation-request-id': 'c196c564-e105-4380-8e89-ab24685a3bc5',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235628Z:c196c564-e105-4380-8e89-ab24685a3bc5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:56:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c196c564-e105-4380-8e89-ab24685a3bc5',
  'x-ms-correlation-request-id': 'c196c564-e105-4380-8e89-ab24685a3bc5',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235628Z:c196c564-e105-4380-8e89-ab24685a3bc5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:56:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/IotHubKeys/iothubowner/listkeys?api-version=2016-02-03')
  .reply(200, "{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '6aad38e5-b20a-46e2-82ee-520a2cc168d9',
  'x-ms-correlation-request-id': '6aad38e5-b20a-46e2-82ee-520a2cc168d9',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235629Z:6aad38e5-b20a-46e2-82ee-520a2cc168d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:56:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/IotHubKeys/iothubowner/listkeys?api-version=2016-02-03')
  .reply(200, "{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '6aad38e5-b20a-46e2-82ee-520a2cc168d9',
  'x-ms-correlation-request-id': '6aad38e5-b20a-46e2-82ee-520a2cc168d9',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235629Z:6aad38e5-b20a-46e2-82ee-520a2cc168d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:56:28 GMT',
  connection: 'close' });
 return result; }]];
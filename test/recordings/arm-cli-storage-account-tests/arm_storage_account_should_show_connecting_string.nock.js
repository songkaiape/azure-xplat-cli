// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'East US2 (stage)';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_STORAGE_TEST_KIND'] = 'storage';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup4065/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9088/listKeys?api-version=2016-01-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"LRC9G5k2TbAYr/526+1Svl2aO6BQvdPTZIpMsVDE6cHX/Id3hVK5fITJJldPznXGeeF0z1/K4Gmz3ud/QGxFsA==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"KJX5/yznXuhovJIdj+1u7NfnLcIY77gpmM7t7ighVerbcGRj+J0EAlhSAc7fre1KyyRZX+0ktPVpTrIH0rT6Kw==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c25ef304-0fe3-4f2e-a2f6-1b84c084361f',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c25ef304-0fe3-4f2e-a2f6-1b84c084361f',
  'x-ms-routing-request-id': 'JAPANEAST:20160412T080619Z:c25ef304-0fe3-4f2e-a2f6-1b84c084361f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 08:06:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup4065/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9088/listKeys?api-version=2016-01-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"LRC9G5k2TbAYr/526+1Svl2aO6BQvdPTZIpMsVDE6cHX/Id3hVK5fITJJldPznXGeeF0z1/K4Gmz3ud/QGxFsA==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"KJX5/yznXuhovJIdj+1u7NfnLcIY77gpmM7t7ighVerbcGRj+J0EAlhSAc7fre1KyyRZX+0ktPVpTrIH0rT6Kw==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c25ef304-0fe3-4f2e-a2f6-1b84c084361f',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c25ef304-0fe3-4f2e-a2f6-1b84c084361f',
  'x-ms-routing-request-id': 'JAPANEAST:20160412T080619Z:c25ef304-0fe3-4f2e-a2f6-1b84c084361f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 08:06:18 GMT',
  connection: 'close' });
 return result; }]];
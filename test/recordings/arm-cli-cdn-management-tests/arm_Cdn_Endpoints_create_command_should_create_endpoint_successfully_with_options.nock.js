// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b',
    name: 'KasotaTest-001',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrg01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrg02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-0a51dd4a-33ca-4c25-91d7-42ae35c12cdd.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cliTestEndpoint02\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint02.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '790',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '460285ec-20b7-4fdb-ae09-c1d5035af154',
  'x-ms-client-request-id': '3c5830f7-6adb-43c2-a84e-171f2b9fc7fe',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/01a95591-215e-418f-ba86-78141148cc7e?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0eab382b-4d87-428c-9924-dd2b5e46214a',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T180112Z:0eab382b-4d87-428c-9924-dd2b5e46214a',
  date: 'Thu, 12 May 2016 18:01:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cliTestEndpoint02\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint02.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '790',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '460285ec-20b7-4fdb-ae09-c1d5035af154',
  'x-ms-client-request-id': '3c5830f7-6adb-43c2-a84e-171f2b9fc7fe',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/01a95591-215e-418f-ba86-78141148cc7e?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0eab382b-4d87-428c-9924-dd2b5e46214a',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T180112Z:0eab382b-4d87-428c-9924-dd2b5e46214a',
  date: 'Thu, 12 May 2016 18:01:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/01a95591-215e-418f-ba86-78141148cc7e?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '275cb4df-3294-4748-8f84-471cb837edea',
  'x-ms-client-request-id': '0dee06c7-4766-4a2c-8514-2536ca6e4864',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '09210f2c-a7d3-4bfb-b087-e9a755ced8a3',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T180143Z:09210f2c-a7d3-4bfb-b087-e9a755ced8a3',
  date: 'Thu, 12 May 2016 18:01:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/01a95591-215e-418f-ba86-78141148cc7e?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '275cb4df-3294-4748-8f84-471cb837edea',
  'x-ms-client-request-id': '0dee06c7-4766-4a2c-8514-2536ca6e4864',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '09210f2c-a7d3-4bfb-b087-e9a755ced8a3',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T180143Z:09210f2c-a7d3-4bfb-b087-e9a755ced8a3',
  date: 'Thu, 12 May 2016 18:01:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint02\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint02.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '790',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '2cf2bc55-190c-4044-af18-613aeb737593',
  'x-ms-client-request-id': 'f2f4d024-b939-4712-8671-f56f96e5bfd4',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '08198c1f-477e-47ce-839d-46064b5751d0',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T180144Z:08198c1f-477e-47ce-839d-46064b5751d0',
  date: 'Thu, 12 May 2016 18:01:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint02\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint02.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '790',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '2cf2bc55-190c-4044-af18-613aeb737593',
  'x-ms-client-request-id': 'f2f4d024-b939-4712-8671-f56f96e5bfd4',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '08198c1f-477e-47ce-839d-46064b5751d0',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T180144Z:08198c1f-477e-47ce-839d-46064b5751d0',
  date: 'Thu, 12 May 2016 18:01:43 GMT',
  connection: 'close' });
 return result; }]];
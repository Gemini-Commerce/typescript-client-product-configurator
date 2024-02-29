# .ConfigurationApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorGetAvailableConfiguration**](ConfigurationApi.md#productConfiguratorGetAvailableConfiguration) | **GET** /v1/{tenantId}/product/{productId}/configuration | Get Available Configuration
[**productConfiguratorGetAvailableConfiguration2**](ConfigurationApi.md#productConfiguratorGetAvailableConfiguration2) | **POST** /v1/{tenantId}/product/{productId}/configuration | Get Available Configuration
[**productConfiguratorGetConfigurationFromSelections**](ConfigurationApi.md#productConfiguratorGetConfigurationFromSelections) | **POST** /v1/{tenantId}/product/{productId}/configuration-from-selections | Get Configuration from Selections


# **productConfiguratorGetAvailableConfiguration**
> ConfigurationGetAvailableConfigurationResponse productConfiguratorGetAvailableConfiguration()

Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfigurationApi(configuration);

let body:.ConfigurationApiProductConfiguratorGetAvailableConfigurationRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  productId: "productId_example",
  // string | If not set, the service returns the active configurator (optional)
  configuratorId: "configuratorId_example",
};

apiInstance.productConfiguratorGetAvailableConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **productId** | [**string**] |  | defaults to undefined
 **configuratorId** | [**string**] | If not set, the service returns the active configurator | (optional) defaults to undefined


### Return type

**ConfigurationGetAvailableConfigurationResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization), [APIAuthorization](README.md#APIAuthorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request or Limit Exceeded |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productConfiguratorGetAvailableConfiguration2**
> ConfigurationGetAvailableConfigurationResponse productConfiguratorGetAvailableConfiguration2(body)

Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfigurationApi(configuration);

let body:.ConfigurationApiProductConfiguratorGetAvailableConfiguration2Request = {
  // string
  tenantId: "tenantId_example",
  // string
  productId: "productId_example",
  // ProductConfiguratorGetAvailableConfiguration2Request
  body: {
    selections: [
      {
        stepId: "stepId_example",
        optionIds: [
          "optionIds_example",
        ],
      },
    ],
    propertyFilters: [
      {
        genericProperty: {
          propertyKey: "propertyKey_example",
        },
        priceProperty: {},
        weightProperty: {},
      },
    ],
    configuratorId: "configuratorId_example",
  },
};

apiInstance.productConfiguratorGetAvailableConfiguration2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorGetAvailableConfiguration2Request**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **productId** | [**string**] |  | defaults to undefined


### Return type

**ConfigurationGetAvailableConfigurationResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization), [APIAuthorization](README.md#APIAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request or Limit Exceeded |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productConfiguratorGetConfigurationFromSelections**
> ConfigurationGetConfigurationFromSelectionsResponse productConfiguratorGetConfigurationFromSelections(body)

Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfigurationApi(configuration);

let body:.ConfigurationApiProductConfiguratorGetConfigurationFromSelectionsRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  productId: "productId_example",
  // ProductConfiguratorGetConfigurationFromSelectionsRequest
  body: {
    selections: [
      {
        stepId: "stepId_example",
        optionIds: [
          "optionIds_example",
        ],
      },
    ],
  },
};

apiInstance.productConfiguratorGetConfigurationFromSelections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorGetConfigurationFromSelectionsRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **productId** | [**string**] |  | defaults to undefined


### Return type

**ConfigurationGetConfigurationFromSelectionsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization), [APIAuthorization](README.md#APIAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request or Limit Exceeded |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



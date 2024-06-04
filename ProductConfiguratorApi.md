# .ProductConfiguratorApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorGetProperty**](ProductConfiguratorApi.md#productConfiguratorGetProperty) | **GET** /v1/{tenantId}/property/{propertyId} | 
[**productConfiguratorListPropertiesByConfiguration**](ProductConfiguratorApi.md#productConfiguratorListPropertiesByConfiguration) | **POST** /v1/{tenantId}/configurator/{configuratorId}/page-size/{pageSize}/properties | 


# **productConfiguratorGetProperty**
> ProductconfiguratorpropertyEntity productConfiguratorGetProperty()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductConfiguratorApi(configuration);

let body:.ProductConfiguratorApiProductConfiguratorGetPropertyRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  propertyId: "propertyId_example",
};

apiInstance.productConfiguratorGetProperty(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **propertyId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorpropertyEntity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productConfiguratorListPropertiesByConfiguration**
> PropertyListPropertiesByConfigurationResponse productConfiguratorListPropertiesByConfiguration(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductConfiguratorApi(configuration);

let body:.ProductConfiguratorApiProductConfiguratorListPropertiesByConfigurationRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  configuratorId: "configuratorId_example",
  // string
  pageSize: "pageSize_example",
  // ProductConfiguratorListPropertiesByConfigurationRequest
  body: {
    selections: [
      {
        stepId: "stepId_example",
        optionId: "optionId_example",
      },
    ],
    propertyType: "PROPERTY_TYPE_UNKNOWN",
    pageToken: "pageToken_example",
  },
};

apiInstance.productConfiguratorListPropertiesByConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorListPropertiesByConfigurationRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **configuratorId** | [**string**] |  | defaults to undefined
 **pageSize** | [**string**] |  | defaults to undefined


### Return type

**PropertyListPropertiesByConfigurationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



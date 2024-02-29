# .DependencyApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorCreateDependency**](DependencyApi.md#productConfiguratorCreateDependency) | **POST** /v1/{tenantId}/step/{stepId}/dependency/create | Create Dependency
[**productConfiguratorDeleteDependency**](DependencyApi.md#productConfiguratorDeleteDependency) | **DELETE** /v1/{tenantId}/dependency/{dependencyId} | Delete Dependency
[**productConfiguratorListDependencies**](DependencyApi.md#productConfiguratorListDependencies) | **POST** /v1/{tenantId}/page-size/{pageSize}/dependencies | List Dependencies
[**productConfiguratorUpdateDependency**](DependencyApi.md#productConfiguratorUpdateDependency) | **PUT** /v1/{tenantId}/dependency/{dependencyId} | Update Dependency


# **productConfiguratorCreateDependency**
> ProductconfiguratordependencyEntity productConfiguratorCreateDependency(body)

Establish a new dependency for an existing step by specifying the tenant and step IDs. Utilize a POST request with the required dependency details in the body to seamlessly enhance the configuration logic of your product.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DependencyApi(configuration);

let body:.DependencyApiProductConfiguratorCreateDependencyRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  stepId: "stepId_example",
  // ProductConfiguratorCreateDependencyRequest
  body: {
    optionIds: [
      "optionIds_example",
    ],
    condition: {
      optionIds: [
        "optionIds_example",
      ],
      conditions: [
        ,
      ],
      type: "UNKNOWN",
    },
  },
};

apiInstance.productConfiguratorCreateDependency(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCreateDependencyRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **stepId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratordependencyEntity**

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

# **productConfiguratorDeleteDependency**
> any productConfiguratorDeleteDependency()

Remove a specific dependency by specifying the tenant and dependency IDs. Ensure precision in dependency management with a straightforward DELETE request, simplifying the elimination of unwanted configuration logic.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DependencyApi(configuration);

let body:.DependencyApiProductConfiguratorDeleteDependencyRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  dependencyId: "dependencyId_example",
};

apiInstance.productConfiguratorDeleteDependency(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **dependencyId** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **productConfiguratorListDependencies**
> DependencyListDependenciesResponse productConfiguratorListDependencies(body)

Retrieve a list of dependencies based on the specified tenant ID. Customize results by specifying page size for efficient pagination. Submit an empty body to get all dependencies associated with the configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DependencyApi(configuration);

let body:.DependencyApiProductConfiguratorListDependenciesRequest = {
  // string
  tenantId: "tenantId_example",
  // number
  pageSize: 1,
  // ProductConfiguratorListDependenciesRequest
  body: {
    stepIds: [
      "stepIds_example",
    ],
    pageToken: "pageToken_example",
  },
};

apiInstance.productConfiguratorListDependencies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorListDependenciesRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **pageSize** | [**number**] |  | defaults to undefined


### Return type

**DependencyListDependenciesResponse**

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

# **productConfiguratorUpdateDependency**
> ProductconfiguratordependencyEntity productConfiguratorUpdateDependency(body)

Modify an existing dependency by specifying the tenant and dependency IDs. Utilize a PUT request with updated dependency details in the body for seamless customization and fine-tuning of your product configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DependencyApi(configuration);

let body:.DependencyApiProductConfiguratorUpdateDependencyRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  dependencyId: "dependencyId_example",
  // ProductConfiguratorUpdateDependencyRequest
  body: {
    payload: {
      optionIds: [
        "optionIds_example",
      ],
      condition: {
        optionIds: [
          "optionIds_example",
        ],
        conditions: [
          ,
        ],
        type: "UNKNOWN",
      },
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.productConfiguratorUpdateDependency(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorUpdateDependencyRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **dependencyId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratordependencyEntity**

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



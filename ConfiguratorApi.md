# .ConfiguratorApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorCopyConfigurator**](ConfiguratorApi.md#productConfiguratorCopyConfigurator) | **POST** /v1/{tenantId}/product/{sourceConfiguratorId}/copy | Copy Configurator
[**productConfiguratorCreateConfigurator**](ConfiguratorApi.md#productConfiguratorCreateConfigurator) | **POST** /v1/{tenantId}/product/{productId}/create | Create Configurator
[**productConfiguratorDeleteConfigurator**](ConfiguratorApi.md#productConfiguratorDeleteConfigurator) | **DELETE** /v1/{tenantId}/configurator/{configuratorId} | Delete Configurator
[**productConfiguratorGetConfiguratorByProductId**](ConfiguratorApi.md#productConfiguratorGetConfiguratorByProductId) | **GET** /v1/{tenantId}/product/{productId} | Get Configurator by Product ID
[**productConfiguratorGetConfiguratorByProductId2**](ConfiguratorApi.md#productConfiguratorGetConfiguratorByProductId2) | **GET** /v1/{tenantId}/product/{productId}/status/{status} | Get Configurator by Product ID
[**productConfiguratorListConfigurators**](ConfiguratorApi.md#productConfiguratorListConfigurators) | **POST** /v1/{tenantId}/product/{productId}/page-size/{pageSize}/configurators | List Product Configurators
[**productConfiguratorUpdateConfigurator**](ConfiguratorApi.md#productConfiguratorUpdateConfigurator) | **PUT** /v1/{tenantId}/configurator/{configuratorId} | Update Configurator


# **productConfiguratorCopyConfigurator**
> ProductconfiguratorconfiguratorEntity productConfiguratorCopyConfigurator(body)

Duplicate an existing product configurator from the source to the specified tenant and product. Submit an empty body to initiate the copy process, creating a new configuration based on the source.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfiguratorApi(configuration);

let body:.ConfiguratorApiProductConfiguratorCopyConfiguratorRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  sourceConfiguratorId: "sourceConfiguratorId_example",
  // ProductConfiguratorCopyConfiguratorRequest
  body: {
    targetProductId: "targetProductId_example",
    copyDependencies: true,
    copyMatrices: true,
  },
};

apiInstance.productConfiguratorCopyConfigurator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCopyConfiguratorRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **sourceConfiguratorId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorconfiguratorEntity**

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

# **productConfiguratorCreateConfigurator**
> ProductconfiguratorconfiguratorEntity productConfiguratorCreateConfigurator(body)

Create a new product configurator for a specified tenant and product. Submit the desired configuration details in the request body to initiate the creation process.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfiguratorApi(configuration);

let body:.ConfiguratorApiProductConfiguratorCreateConfiguratorRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  productId: "productId_example",
  // ProductConfiguratorCreateConfiguratorRequest
  body: {
    label: "label_example",
  },
};

apiInstance.productConfiguratorCreateConfigurator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCreateConfiguratorRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **productId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorconfiguratorEntity**

### Authorization

[standardAuthorization](README.md#standardAuthorization), [APIAuthorization](README.md#APIAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productConfiguratorDeleteConfigurator**
> any productConfiguratorDeleteConfigurator()

Delete a product configurator by specifying the tenant and configurator IDs. Ensure precise removal of unwanted configurations with a straightforward DELETE request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfiguratorApi(configuration);

let body:.ConfiguratorApiProductConfiguratorDeleteConfiguratorRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  configuratorId: "configuratorId_example",
};

apiInstance.productConfiguratorDeleteConfigurator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **configuratorId** | [**string**] |  | defaults to undefined


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
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productConfiguratorGetConfiguratorByProductId**
> ProductconfiguratorconfiguratorEntity productConfiguratorGetConfiguratorByProductId()

Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfiguratorApi(configuration);

let body:.ConfiguratorApiProductConfiguratorGetConfiguratorByProductIdRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  productId: "productId_example",
  // 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED' (optional)
  status: "UNKNOWN",
};

apiInstance.productConfiguratorGetConfiguratorByProductId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **productId** | [**string**] |  | defaults to undefined
 **status** | [**&#39;UNKNOWN&#39; | &#39;ACTIVE&#39; | &#39;DRAFT&#39; | &#39;DISABLED&#39;**]**Array<&#39;UNKNOWN&#39; &#124; &#39;ACTIVE&#39; &#124; &#39;DRAFT&#39; &#124; &#39;DISABLED&#39;>** |  | (optional) defaults to 'UNKNOWN'


### Return type

**ProductconfiguratorconfiguratorEntity**

### Authorization

[standardAuthorization](README.md#standardAuthorization), [APIAuthorization](README.md#APIAuthorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productConfiguratorGetConfiguratorByProductId2**
> ProductconfiguratorconfiguratorEntity productConfiguratorGetConfiguratorByProductId2()

Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfiguratorApi(configuration);

let body:.ConfiguratorApiProductConfiguratorGetConfiguratorByProductId2Request = {
  // string
  tenantId: "tenantId_example",
  // string
  productId: "productId_example",
  // 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED'
  status: "UNKNOWN",
};

apiInstance.productConfiguratorGetConfiguratorByProductId2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **productId** | [**string**] |  | defaults to undefined
 **status** | [**&#39;UNKNOWN&#39; | &#39;ACTIVE&#39; | &#39;DRAFT&#39; | &#39;DISABLED&#39;**]**Array<&#39;UNKNOWN&#39; &#124; &#39;ACTIVE&#39; &#124; &#39;DRAFT&#39; &#124; &#39;DISABLED&#39;>** |  | defaults to undefined


### Return type

**ProductconfiguratorconfiguratorEntity**

### Authorization

[standardAuthorization](README.md#standardAuthorization), [APIAuthorization](README.md#APIAuthorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productConfiguratorListConfigurators**
> ConfiguratorListResponse productConfiguratorListConfigurators(body)

List all product configurators.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfiguratorApi(configuration);

let body:.ConfiguratorApiProductConfiguratorListConfiguratorsRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  productId: "productId_example",
  // number
  pageSize: 1,
  // ProductConfiguratorListPropertiesRequest
  body: {
    pageToken: "pageToken_example",
  },
};

apiInstance.productConfiguratorListConfigurators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorListPropertiesRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **productId** | [**string**] |  | defaults to undefined
 **pageSize** | [**number**] |  | defaults to undefined


### Return type

**ConfiguratorListResponse**

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

# **productConfiguratorUpdateConfigurator**
> ProductconfiguratorconfiguratorEntity productConfiguratorUpdateConfigurator(body)

Modify an existing product configurator by specifying the tenant and configurator IDs. Use a PUT request with the updated configuration details in the body to seamlessly update and manage product configurations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfiguratorApi(configuration);

let body:.ConfiguratorApiProductConfiguratorUpdateConfiguratorRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  configuratorId: "configuratorId_example",
  // ProductConfiguratorUpdateConfiguratorRequest
  body: {
    payload: {
      label: "label_example",
      status: "UNKNOWN",
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.productConfiguratorUpdateConfigurator(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorUpdateConfiguratorRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **configuratorId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorconfiguratorEntity**

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



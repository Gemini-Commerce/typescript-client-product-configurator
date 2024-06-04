# .MatrixApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorCreateMatrix**](MatrixApi.md#productConfiguratorCreateMatrix) | **POST** /v1/{tenantId}/matrix/create | Create Matrix
[**productConfiguratorDeleteMatrix**](MatrixApi.md#productConfiguratorDeleteMatrix) | **DELETE** /v1/{tenantId}/matrix/{matrixId} | Delete Matrix
[**productConfiguratorGetMatrix**](MatrixApi.md#productConfiguratorGetMatrix) | **GET** /v1/{tenantId}/matrix/{matrixId} | Get Matrix
[**productConfiguratorListMatrices**](MatrixApi.md#productConfiguratorListMatrices) | **POST** /v1/{tenantId}/configurator/{configuratorId}/page-size/{pageSize}/matrices | List Matrices
[**productConfiguratorRemovePricelistFromMatrix**](MatrixApi.md#productConfiguratorRemovePricelistFromMatrix) | **DELETE** /v1/{tenantId}/matrix/{matrixId}/pricelist/{pricelistGrn} | Remove Pricelist from Matrix
[**productConfiguratorUpdateMatrix**](MatrixApi.md#productConfiguratorUpdateMatrix) | **PUT** /v1/{tenantId}/matrix/{matrixId} | Update Matrix


# **productConfiguratorCreateMatrix**
> ProductconfiguratormatrixEntity productConfiguratorCreateMatrix(body)

Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatrixApi(configuration);

let body:.MatrixApiProductConfiguratorCreateMatrixRequest = {
  // string
  tenantId: "tenantId_example",
  // ProductConfiguratorCreateMatrixRequest
  body: {
    configuratorId: "configuratorId_example",
    label: "label_example",
    genericType: {
      propertyKey: "propertyKey_example",
    },
    priceType: {
      pricelistGrns: [
        "pricelistGrns_example",
      ],
    },
    weightType: {
      weightUnit: "WEIGHT_UNIT_UNKNOWN",
    },
    steps: [
      {
        stepId: "stepId_example",
      },
    ],
    propertiesMode: "PROPERTY_MODE_UNKNOWN",
  },
};

apiInstance.productConfiguratorCreateMatrix(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCreateMatrixRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratormatrixEntity**

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

# **productConfiguratorDeleteMatrix**
> any productConfiguratorDeleteMatrix()

Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatrixApi(configuration);

let body:.MatrixApiProductConfiguratorDeleteMatrixRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  matrixId: "matrixId_example",
};

apiInstance.productConfiguratorDeleteMatrix(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **matrixId** | [**string**] |  | defaults to undefined


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

# **productConfiguratorGetMatrix**
> ProductconfiguratormatrixEntity productConfiguratorGetMatrix()

Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatrixApi(configuration);

let body:.MatrixApiProductConfiguratorGetMatrixRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  matrixId: "matrixId_example",
};

apiInstance.productConfiguratorGetMatrix(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **matrixId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratormatrixEntity**

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

# **productConfiguratorListMatrices**
> MatrixListMatricesResponse productConfiguratorListMatrices(body)

Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatrixApi(configuration);

let body:.MatrixApiProductConfiguratorListMatricesRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  configuratorId: "configuratorId_example",
  // string
  pageSize: "pageSize_example",
  // ProductConfiguratorListMatricesRequest
  body: {
    filterMask: "filterMask_example",
    filter: {
      propertyType: [
        "PROPERTY_TYPE_UNKNOWN",
      ],
      propertyKey: [
        "propertyKey_example",
      ],
    },
    pageToken: "pageToken_example",
  },
};

apiInstance.productConfiguratorListMatrices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorListMatricesRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **configuratorId** | [**string**] |  | defaults to undefined
 **pageSize** | [**string**] |  | defaults to undefined


### Return type

**MatrixListMatricesResponse**

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

# **productConfiguratorRemovePricelistFromMatrix**
> ProductconfiguratormatrixEntity productConfiguratorRemovePricelistFromMatrix()

Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatrixApi(configuration);

let body:.MatrixApiProductConfiguratorRemovePricelistFromMatrixRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  matrixId: "matrixId_example",
  // string
  pricelistGrn: "pricelistGrn_example",
};

apiInstance.productConfiguratorRemovePricelistFromMatrix(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **matrixId** | [**string**] |  | defaults to undefined
 **pricelistGrn** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratormatrixEntity**

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

# **productConfiguratorUpdateMatrix**
> ProductconfiguratormatrixEntity productConfiguratorUpdateMatrix(body)

Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatrixApi(configuration);

let body:.MatrixApiProductConfiguratorUpdateMatrixRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  matrixId: "matrixId_example",
  // ProductConfiguratorUpdateMatrixRequest
  body: {
    payload: {
      label: "label_example",
      defaultPropertyId: "defaultPropertyId_example",
      propertiesMode: "PROPERTY_MODE_UNKNOWN",
      steps: [
        {
          stepId: "stepId_example",
        },
      ],
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.productConfiguratorUpdateMatrix(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorUpdateMatrixRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **matrixId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratormatrixEntity**

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



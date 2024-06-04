# .PropertyApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorBulkCreateProperties**](PropertyApi.md#productConfiguratorBulkCreateProperties) | **POST** /v1/{tenantId}/property/create/bulk | Bulk Create Properties
[**productConfiguratorBulkUpdateProperties**](PropertyApi.md#productConfiguratorBulkUpdateProperties) | **PUT** /v1/{tenantId}/properties/bulk | Bulk Update Properties
[**productConfiguratorCreateProperty**](PropertyApi.md#productConfiguratorCreateProperty) | **POST** /v1/{tenantId}/property/create | Create Property
[**productConfiguratorListProperties**](PropertyApi.md#productConfiguratorListProperties) | **POST** /v1/{tenantId}/matrix/{matrixId}/page-size/{pageSize}/properties | List Properties
[**productConfiguratorUpdateProperty**](PropertyApi.md#productConfiguratorUpdateProperty) | **PUT** /v1/{tenantId}/property/{propertyId} | Update Property


# **productConfiguratorBulkCreateProperties**
> ProductconfiguratorpropertyBulkCreateResponse productConfiguratorBulkCreateProperties(body)

Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertyApi(configuration);

let body:.PropertyApiProductConfiguratorBulkCreatePropertiesRequest = {
  // string
  tenantId: "tenantId_example",
  // ProductConfiguratorBulkCreatePropertiesRequest
  body: {
    matrixId: "matrixId_example",
    properties: [
      {
        stepIdToOptionId: {
          "key": "key_example",
        },
        genericProperty: {
          propertyKey: "propertyKey_example",
          propertyValue: "propertyValue_example",
        },
        priceProperty: {
          price: {
            units: "units_example",
            micros: 1,
          },
          pricelistGrn: "pricelistGrn_example",
        },
        weightProperty: {
          weight: 3.14,
          weightUnit: "WEIGHT_UNIT_UNKNOWN",
        },
      },
    ],
  },
};

apiInstance.productConfiguratorBulkCreateProperties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorBulkCreatePropertiesRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorpropertyBulkCreateResponse**

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

# **productConfiguratorBulkUpdateProperties**
> ProductconfiguratorpropertyBulkUpdateResponse productConfiguratorBulkUpdateProperties(body)

Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertyApi(configuration);

let body:.PropertyApiProductConfiguratorBulkUpdatePropertiesRequest = {
  // string
  tenantId: "tenantId_example",
  // ProductConfiguratorBulkUpdatePropertiesRequest
  body: {
    matrixId: "matrixId_example",
    entities: [
      {
        propertyId: "propertyId_example",
        payload: {
          genericProperty: {
            propertyValue: "propertyValue_example",
          },
          weightProperty: {
            weight: 3.14,
          },
          priceProperty: {
            price: {
              units: "units_example",
              micros: 1,
            },
            pricelistGrn: "pricelistGrn_example",
          },
        },
        payloadMask: "payloadMask_example",
      },
    ],
  },
};

apiInstance.productConfiguratorBulkUpdateProperties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorBulkUpdatePropertiesRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorpropertyBulkUpdateResponse**

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

# **productConfiguratorCreateProperty**
> ProductconfiguratorpropertyEntity productConfiguratorCreateProperty(body)

Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertyApi(configuration);

let body:.PropertyApiProductConfiguratorCreatePropertyRequest = {
  // string
  tenantId: "tenantId_example",
  // ProductConfiguratorCreatePropertyRequest
  body: {
    matrixId: "matrixId_example",
    stepIdToOptionId: {
      "key": "key_example",
    },
    genericProperty: {
      propertyKey: "propertyKey_example",
      propertyValue: "propertyValue_example",
    },
    priceProperty: {
      price: {
        units: "units_example",
        micros: 1,
      },
      pricelistGrn: "pricelistGrn_example",
    },
    weightProperty: {
      weight: 3.14,
      weightUnit: "WEIGHT_UNIT_UNKNOWN",
    },
  },
};

apiInstance.productConfiguratorCreateProperty(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCreatePropertyRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorpropertyEntity**

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

# **productConfiguratorListProperties**
> PropertyListPropertiesResponse productConfiguratorListProperties(body)

Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertyApi(configuration);

let body:.PropertyApiProductConfiguratorListPropertiesRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  matrixId: "matrixId_example",
  // string
  pageSize: "pageSize_example",
  // ProductConfiguratorListPropertiesRequest
  body: {
    pageToken: "pageToken_example",
  },
};

apiInstance.productConfiguratorListProperties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorListPropertiesRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **matrixId** | [**string**] |  | defaults to undefined
 **pageSize** | [**string**] |  | defaults to undefined


### Return type

**PropertyListPropertiesResponse**

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

# **productConfiguratorUpdateProperty**
> ProductconfiguratorpropertyEntity productConfiguratorUpdateProperty(body)

Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertyApi(configuration);

let body:.PropertyApiProductConfiguratorUpdatePropertyRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  propertyId: "propertyId_example",
  // ProductConfiguratorUpdatePropertyRequest
  body: {
    matrixId: "matrixId_example",
    payload: {
      genericProperty: {
        propertyValue: "propertyValue_example",
      },
      weightProperty: {
        weight: 3.14,
      },
      priceProperty: {
        price: {
          units: "units_example",
          micros: 1,
        },
        pricelistGrn: "pricelistGrn_example",
      },
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.productConfiguratorUpdateProperty(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorUpdatePropertyRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **propertyId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorpropertyEntity**

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



# .OptionApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorBulkCreateOptions**](OptionApi.md#productConfiguratorBulkCreateOptions) | **POST** /v1/{tenantId}/step/{stepId}/option/create/bulk | Bulk Create Options
[**productConfiguratorBulkDeleteOptions**](OptionApi.md#productConfiguratorBulkDeleteOptions) | **POST** /v1/{tenantId}/option/delete/bulk | Bulk Delete Options
[**productConfiguratorBulkUpdateOptions**](OptionApi.md#productConfiguratorBulkUpdateOptions) | **PUT** /v1/{tenantId}/option/bulk | Bulk Update Options
[**productConfiguratorCopyOption**](OptionApi.md#productConfiguratorCopyOption) | **POST** /v1/{tenantId}/option/{sourceOptionId}/copy | Copy Option
[**productConfiguratorCreateOption**](OptionApi.md#productConfiguratorCreateOption) | **POST** /v1/{tenantId}/step/{stepId}/option/create | Create Option
[**productConfiguratorDeleteOption**](OptionApi.md#productConfiguratorDeleteOption) | **DELETE** /v1/{tenantId}/option/{optionId} | Delete Option
[**productConfiguratorListOptions**](OptionApi.md#productConfiguratorListOptions) | **POST** /v1/{tenantId}/step/{stepId}/page-size/{pageSize}/options | List Options
[**productConfiguratorUpdateOption**](OptionApi.md#productConfiguratorUpdateOption) | **PUT** /v1/{tenantId}/option/{optionId} | Update Option


# **productConfiguratorBulkCreateOptions**
> ProductconfiguratoroptionBulkCreateResponse productConfiguratorBulkCreateOptions(body)

Add multiple options to an existing step simultaneously. Submit a POST request with the necessary option details in the body to efficiently expand the configuration possibilities in bulk. Streamline large-scale option management effortlessly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OptionApi(configuration);

let body:.OptionApiProductConfiguratorBulkCreateOptionsRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  stepId: "stepId_example",
  // ProductConfiguratorBulkCreateOptionsRequest
  body: {
    options: [
      {
        label: {
          value: {
            "key": "key_example",
          },
        },
        position: "position_example",
        externalReferenceId: "externalReferenceId_example",
        swatch: {
          grn: "grn_example",
          url: "url_example",
        },
      },
    ],
  },
};

apiInstance.productConfiguratorBulkCreateOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorBulkCreateOptionsRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **stepId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratoroptionBulkCreateResponse**

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

# **productConfiguratorBulkDeleteOptions**
> any productConfiguratorBulkDeleteOptions(body)

Efficiently remove multiple options from configurations using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of option IDs in the body for streamlined option management.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OptionApi(configuration);

let body:.OptionApiProductConfiguratorBulkDeleteOptionsRequest = {
  // string
  tenantId: "tenantId_example",
  // ProductConfiguratorBulkDeleteOptionsRequest
  body: {
    optionIds: [
      "optionIds_example",
    ],
  },
};

apiInstance.productConfiguratorBulkDeleteOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorBulkDeleteOptionsRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **productConfiguratorBulkUpdateOptions**
> ProductconfiguratoroptionBulkUpdateResponse productConfiguratorBulkUpdateOptions(body)

Effortlessly update multiple options. Specify the tenant ID and submit a PUT request with the updated option details in the body. Streamline the customization of a multitude of options in one go.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OptionApi(configuration);

let body:.OptionApiProductConfiguratorBulkUpdateOptionsRequest = {
  // string
  tenantId: "tenantId_example",
  // ProductConfiguratorBulkUpdateOptionsRequest
  body: {
    options: [
      {
        optionId: "optionId_example",
        payload: {
          label: {
            value: {
              "key": "key_example",
            },
          },
          position: "position_example",
          externalReferenceId: "externalReferenceId_example",
          swatch: {
            grn: "grn_example",
            url: "url_example",
          },
        },
        payloadMask: "payloadMask_example",
      },
    ],
  },
};

apiInstance.productConfiguratorBulkUpdateOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorBulkUpdateOptionsRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratoroptionBulkUpdateResponse**

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

# **productConfiguratorCopyOption**
> ProductconfiguratoroptionEntity productConfiguratorCopyOption(body)

Duplicate an existing option from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new option based on the source configuration. Streamline option replication effortlessly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OptionApi(configuration);

let body:.OptionApiProductConfiguratorCopyOptionRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  sourceOptionId: "sourceOptionId_example",
  // ProductConfiguratorCopyOptionRequest
  body: {
    targetStepId: "targetStepId_example",
  },
};

apiInstance.productConfiguratorCopyOption(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCopyOptionRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **sourceOptionId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratoroptionEntity**

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

# **productConfiguratorCreateOption**
> ProductconfiguratoroptionEntity productConfiguratorCreateOption(body)

Integrate a new option into an existing step by specifying the tenant and step IDs. Use a POST request with the required option details in the body for seamless customization and expansion of product configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OptionApi(configuration);

let body:.OptionApiProductConfiguratorCreateOptionRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  stepId: "stepId_example",
  // ProductConfiguratorCreateOptionRequest
  body: {
    label: {
      value: {
        "key": "key_example",
      },
    },
    position: "position_example",
    externalReferenceId: "externalReferenceId_example",
    swatch: {
      grn: "grn_example",
      url: "url_example",
    },
  },
};

apiInstance.productConfiguratorCreateOption(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCreateOptionRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **stepId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratoroptionEntity**

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

# **productConfiguratorDeleteOption**
> any productConfiguratorDeleteOption()

Remove a specific option by specifying the tenant and option IDs. Ensure precision in option management with a straightforward DELETE request, simplifying the elimination of unwanted configuration choices.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OptionApi(configuration);

let body:.OptionApiProductConfiguratorDeleteOptionRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  optionId: "optionId_example",
};

apiInstance.productConfiguratorDeleteOption(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **optionId** | [**string**] |  | defaults to undefined


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

# **productConfiguratorListOptions**
> OptionListOptionsResponse productConfiguratorListOptions(body)

Retrieve a list of options for a specific step based on tenant and step IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all options associated with the step.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OptionApi(configuration);

let body:.OptionApiProductConfiguratorListOptionsRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  stepId: "stepId_example",
  // number
  pageSize: 1,
  // ProductConfiguratorListPropertiesRequest
  body: {
    pageToken: "pageToken_example",
  },
};

apiInstance.productConfiguratorListOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorListPropertiesRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **stepId** | [**string**] |  | defaults to undefined
 **pageSize** | [**number**] |  | defaults to undefined


### Return type

**OptionListOptionsResponse**

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

# **productConfiguratorUpdateOption**
> ProductconfiguratoroptionEntity productConfiguratorUpdateOption(body)

Modify an existing option by specifying the tenant and option IDs. Utilize a PUT request with updated option details in the body for seamless customization and fine-tuning of your product configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OptionApi(configuration);

let body:.OptionApiProductConfiguratorUpdateOptionRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  optionId: "optionId_example",
  // ProductConfiguratorUpdateOptionRequest
  body: {
    payload: {
      label: {
        value: {
          "key": "key_example",
        },
      },
      position: "position_example",
      externalReferenceId: "externalReferenceId_example",
      swatch: {
        grn: "grn_example",
        url: "url_example",
      },
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.productConfiguratorUpdateOption(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorUpdateOptionRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **optionId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratoroptionEntity**

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



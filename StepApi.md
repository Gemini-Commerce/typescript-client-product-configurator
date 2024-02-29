# .StepApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorBulkCreateSteps**](StepApi.md#productConfiguratorBulkCreateSteps) | **POST** /v1/{tenantId}/configurator/{configuratorId}/step/create/bulk | Bulk Create Steps
[**productConfiguratorBulkDeleteSteps**](StepApi.md#productConfiguratorBulkDeleteSteps) | **POST** /v1/{tenantId}/step/delete/bulk | Bulk Delete Steps
[**productConfiguratorCopyStep**](StepApi.md#productConfiguratorCopyStep) | **POST** /v1/{tenantId}/step/{sourceStepId}/copy | Copy Step
[**productConfiguratorCreateStep**](StepApi.md#productConfiguratorCreateStep) | **POST** /v1/{tenantId}/configurator/{configuratorId}/step/create | Create Step
[**productConfiguratorDeleteStep**](StepApi.md#productConfiguratorDeleteStep) | **DELETE** /v1/{tenantId}/step/{stepId} | Delete Step
[**productConfiguratorUpdateStep**](StepApi.md#productConfiguratorUpdateStep) | **PUT** /v1/{tenantId}/step/{stepId} | Update Step


# **productConfiguratorBulkCreateSteps**
> ProductconfiguratorstepBulkCreateResponse productConfiguratorBulkCreateSteps(body)

Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StepApi(configuration);

let body:.StepApiProductConfiguratorBulkCreateStepsRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  configuratorId: "configuratorId_example",
  // ProductConfiguratorBulkCreateStepsRequest
  body: {
    steps: [
      {
        label: {
          value: {
            "key": "key_example",
          },
        },
        description: {
          value: {
            "key": "key_example",
          },
        },
        isRequired: true,
        subjectToStepId: "subjectToStepId_example",
        hasMultipleSelection: true,
        optionsHaveQuantity: true,
      },
    ],
  },
};

apiInstance.productConfiguratorBulkCreateSteps(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorBulkCreateStepsRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **configuratorId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorstepBulkCreateResponse**

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

# **productConfiguratorBulkDeleteSteps**
> any productConfiguratorBulkDeleteSteps(body)

Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StepApi(configuration);

let body:.StepApiProductConfiguratorBulkDeleteStepsRequest = {
  // string
  tenantId: "tenantId_example",
  // ProductConfiguratorBulkDeleteStepsRequest
  body: {
    stepIds: [
      "stepIds_example",
    ],
  },
};

apiInstance.productConfiguratorBulkDeleteSteps(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorBulkDeleteStepsRequest**|  |
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

# **productConfiguratorCopyStep**
> ProductconfiguratorstepEntity productConfiguratorCopyStep(body)

Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StepApi(configuration);

let body:.StepApiProductConfiguratorCopyStepRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  sourceStepId: "sourceStepId_example",
  // ProductConfiguratorCopyStepRequest
  body: {
    targetConfiguratorId: "targetConfiguratorId_example",
  },
};

apiInstance.productConfiguratorCopyStep(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCopyStepRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **sourceStepId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorstepEntity**

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

# **productConfiguratorCreateStep**
> ProductconfiguratorstepEntity productConfiguratorCreateStep(body)

Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StepApi(configuration);

let body:.StepApiProductConfiguratorCreateStepRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  configuratorId: "configuratorId_example",
  // ProductConfiguratorCreateStepRequest
  body: {
    label: {
      value: {
        "key": "key_example",
      },
    },
    description: {
      value: {
        "key": "key_example",
      },
    },
    isRequired: true,
    subjectToStepId: "subjectToStepId_example",
    hasMultipleSelection: true,
    optionsHaveQuantity: true,
  },
};

apiInstance.productConfiguratorCreateStep(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorCreateStepRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **configuratorId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorstepEntity**

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

# **productConfiguratorDeleteStep**
> GooglerpcStatus productConfiguratorDeleteStep()

Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StepApi(configuration);

let body:.StepApiProductConfiguratorDeleteStepRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  stepId: "stepId_example",
};

apiInstance.productConfiguratorDeleteStep(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **stepId** | [**string**] |  | defaults to undefined


### Return type

**GooglerpcStatus**

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

# **productConfiguratorUpdateStep**
> ProductconfiguratorstepEntity productConfiguratorUpdateStep(body)

Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StepApi(configuration);

let body:.StepApiProductConfiguratorUpdateStepRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  stepId: "stepId_example",
  // ProductConfiguratorUpdateStepRequest
  body: {
    payload: {
      label: {
        value: {
          "key": "key_example",
        },
      },
      description: {
        value: {
          "key": "key_example",
        },
      },
      position: "position_example",
      isRequired: true,
      subjectToStepId: "subjectToStepId_example",
      hasMultipleSelection: true,
      optionsHaveQuantity: true,
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.productConfiguratorUpdateStep(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductConfiguratorUpdateStepRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **stepId** | [**string**] |  | defaults to undefined


### Return type

**ProductconfiguratorstepEntity**

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



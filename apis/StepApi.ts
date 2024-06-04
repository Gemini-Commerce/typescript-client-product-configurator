// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GooglerpcStatus } from '../models/GooglerpcStatus';
import { ProductConfiguratorBulkCreateStepsRequest } from '../models/ProductConfiguratorBulkCreateStepsRequest';
import { ProductConfiguratorBulkDeleteStepsRequest } from '../models/ProductConfiguratorBulkDeleteStepsRequest';
import { ProductConfiguratorCopyStepRequest } from '../models/ProductConfiguratorCopyStepRequest';
import { ProductConfiguratorCreateStepRequest } from '../models/ProductConfiguratorCreateStepRequest';
import { ProductConfiguratorUpdateStepRequest } from '../models/ProductConfiguratorUpdateStepRequest';
import { ProductconfiguratorstepBulkCreateResponse } from '../models/ProductconfiguratorstepBulkCreateResponse';
import { ProductconfiguratorstepEntity } from '../models/ProductconfiguratorstepEntity';

/**
 * no description
 */
export class StepApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.
     * Bulk Create Steps
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public async productConfiguratorBulkCreateSteps(tenantId: string, configuratorId: string, body: ProductConfiguratorBulkCreateStepsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorBulkCreateSteps", "tenantId");
        }


        // verify required parameter 'configuratorId' is not null or undefined
        if (configuratorId === null || configuratorId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorBulkCreateSteps", "configuratorId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorBulkCreateSteps", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/configurator/{configuratorId}/step/create/bulk'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'configuratorId' + '}', encodeURIComponent(String(configuratorId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorBulkCreateStepsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["standardAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APIAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.
     * Bulk Delete Steps
     * @param tenantId 
     * @param body 
     */
    public async productConfiguratorBulkDeleteSteps(tenantId: string, body: ProductConfiguratorBulkDeleteStepsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorBulkDeleteSteps", "tenantId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorBulkDeleteSteps", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/step/delete/bulk'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorBulkDeleteStepsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["standardAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APIAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.
     * Copy Step
     * @param tenantId 
     * @param sourceStepId 
     * @param body 
     */
    public async productConfiguratorCopyStep(tenantId: string, sourceStepId: string, body: ProductConfiguratorCopyStepRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorCopyStep", "tenantId");
        }


        // verify required parameter 'sourceStepId' is not null or undefined
        if (sourceStepId === null || sourceStepId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorCopyStep", "sourceStepId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorCopyStep", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/step/{sourceStepId}/copy'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'sourceStepId' + '}', encodeURIComponent(String(sourceStepId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorCopyStepRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["standardAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APIAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.
     * Create Step
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public async productConfiguratorCreateStep(tenantId: string, configuratorId: string, body: ProductConfiguratorCreateStepRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorCreateStep", "tenantId");
        }


        // verify required parameter 'configuratorId' is not null or undefined
        if (configuratorId === null || configuratorId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorCreateStep", "configuratorId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorCreateStep", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/configurator/{configuratorId}/step/create'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'configuratorId' + '}', encodeURIComponent(String(configuratorId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorCreateStepRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["standardAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APIAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.
     * Delete Step
     * @param tenantId 
     * @param stepId 
     */
    public async productConfiguratorDeleteStep(tenantId: string, stepId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorDeleteStep", "tenantId");
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorDeleteStep", "stepId");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/step/{stepId}'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["standardAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APIAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Step
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public async productConfiguratorUpdateStep(tenantId: string, stepId: string, body: ProductConfiguratorUpdateStepRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorUpdateStep", "tenantId");
        }


        // verify required parameter 'stepId' is not null or undefined
        if (stepId === null || stepId === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorUpdateStep", "stepId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("StepApi", "productConfiguratorUpdateStep", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/step/{stepId}'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorUpdateStepRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["standardAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APIAuthorization"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class StepApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorBulkCreateSteps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorBulkCreateStepsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorstepBulkCreateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorstepBulkCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorstepBulkCreateResponse", ""
            ) as ProductconfiguratorstepBulkCreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Bad Request or Limit Exceeded", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An internal error occurred is thrown when an incompatible payload is sent", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductconfiguratorstepBulkCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorstepBulkCreateResponse", ""
            ) as ProductconfiguratorstepBulkCreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorBulkDeleteSteps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorBulkDeleteStepsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Bad Request or Limit Exceeded", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An internal error occurred is thrown when an incompatible payload is sent", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorCopyStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorCopyStepWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorstepEntity >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorstepEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorstepEntity", ""
            ) as ProductconfiguratorstepEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Bad Request or Limit Exceeded", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An internal error occurred is thrown when an incompatible payload is sent", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductconfiguratorstepEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorstepEntity", ""
            ) as ProductconfiguratorstepEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorCreateStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorCreateStepWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorstepEntity >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorstepEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorstepEntity", ""
            ) as ProductconfiguratorstepEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Bad Request or Limit Exceeded", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An internal error occurred is thrown when an incompatible payload is sent", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductconfiguratorstepEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorstepEntity", ""
            ) as ProductconfiguratorstepEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorDeleteStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorDeleteStepWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GooglerpcStatus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Bad Request or Limit Exceeded", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An internal error occurred is thrown when an incompatible payload is sent", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorUpdateStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorUpdateStepWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorstepEntity >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorstepEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorstepEntity", ""
            ) as ProductconfiguratorstepEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Bad Request or Limit Exceeded", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An internal error occurred is thrown when an incompatible payload is sent", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GooglerpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GooglerpcStatus", ""
            ) as GooglerpcStatus;
            throw new ApiException<GooglerpcStatus>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductconfiguratorstepEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorstepEntity", ""
            ) as ProductconfiguratorstepEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GooglerpcStatus } from '../models/GooglerpcStatus';
import { ProductConfiguratorBulkCreatePropertiesRequest } from '../models/ProductConfiguratorBulkCreatePropertiesRequest';
import { ProductConfiguratorBulkUpdatePropertiesRequest } from '../models/ProductConfiguratorBulkUpdatePropertiesRequest';
import { ProductConfiguratorCreatePropertyRequest } from '../models/ProductConfiguratorCreatePropertyRequest';
import { ProductConfiguratorListPropertiesRequest } from '../models/ProductConfiguratorListPropertiesRequest';
import { ProductConfiguratorUpdatePropertyRequest } from '../models/ProductConfiguratorUpdatePropertyRequest';
import { ProductconfiguratorpropertyBulkCreateResponse } from '../models/ProductconfiguratorpropertyBulkCreateResponse';
import { ProductconfiguratorpropertyBulkUpdateResponse } from '../models/ProductconfiguratorpropertyBulkUpdateResponse';
import { ProductconfiguratorpropertyEntity } from '../models/ProductconfiguratorpropertyEntity';
import { PropertyListPropertiesResponse } from '../models/PropertyListPropertiesResponse';

/**
 * no description
 */
export class PropertyApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.
     * Bulk Create Properties
     * @param tenantId 
     * @param body 
     */
    public async productConfiguratorBulkCreateProperties(tenantId: string, body: ProductConfiguratorBulkCreatePropertiesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorBulkCreateProperties", "tenantId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorBulkCreateProperties", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/property/create/bulk'
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
            ObjectSerializer.serialize(body, "ProductConfiguratorBulkCreatePropertiesRequest", ""),
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
     * Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.
     * Bulk Update Properties
     * @param tenantId 
     * @param body 
     */
    public async productConfiguratorBulkUpdateProperties(tenantId: string, body: ProductConfiguratorBulkUpdatePropertiesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorBulkUpdateProperties", "tenantId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorBulkUpdateProperties", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/properties/bulk'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorBulkUpdatePropertiesRequest", ""),
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
     * Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.
     * Create Property
     * @param tenantId 
     * @param body 
     */
    public async productConfiguratorCreateProperty(tenantId: string, body: ProductConfiguratorCreatePropertyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorCreateProperty", "tenantId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorCreateProperty", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/property/create'
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
            ObjectSerializer.serialize(body, "ProductConfiguratorCreatePropertyRequest", ""),
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
     * Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.
     * List Properties
     * @param tenantId 
     * @param matrixId 
     * @param pageSize 
     * @param body 
     */
    public async productConfiguratorListProperties(tenantId: string, matrixId: string, pageSize: string, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorListProperties", "tenantId");
        }


        // verify required parameter 'matrixId' is not null or undefined
        if (matrixId === null || matrixId === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorListProperties", "matrixId");
        }


        // verify required parameter 'pageSize' is not null or undefined
        if (pageSize === null || pageSize === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorListProperties", "pageSize");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorListProperties", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/matrix/{matrixId}/page-size/{pageSize}/properties'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'matrixId' + '}', encodeURIComponent(String(matrixId)))
            .replace('{' + 'pageSize' + '}', encodeURIComponent(String(pageSize)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorListPropertiesRequest", ""),
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
     * Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Property
     * @param tenantId 
     * @param propertyId 
     * @param body 
     */
    public async productConfiguratorUpdateProperty(tenantId: string, propertyId: string, body: ProductConfiguratorUpdatePropertyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorUpdateProperty", "tenantId");
        }


        // verify required parameter 'propertyId' is not null or undefined
        if (propertyId === null || propertyId === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorUpdateProperty", "propertyId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PropertyApi", "productConfiguratorUpdateProperty", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/property/{propertyId}'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'propertyId' + '}', encodeURIComponent(String(propertyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorUpdatePropertyRequest", ""),
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

export class PropertyApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorBulkCreateProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorBulkCreatePropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorpropertyBulkCreateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorpropertyBulkCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyBulkCreateResponse", ""
            ) as ProductconfiguratorpropertyBulkCreateResponse;
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
            const body: ProductconfiguratorpropertyBulkCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyBulkCreateResponse", ""
            ) as ProductconfiguratorpropertyBulkCreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorBulkUpdateProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorBulkUpdatePropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorpropertyBulkUpdateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorpropertyBulkUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyBulkUpdateResponse", ""
            ) as ProductconfiguratorpropertyBulkUpdateResponse;
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
            const body: ProductconfiguratorpropertyBulkUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyBulkUpdateResponse", ""
            ) as ProductconfiguratorpropertyBulkUpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorCreateProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorCreatePropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorpropertyEntity >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorpropertyEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyEntity", ""
            ) as ProductconfiguratorpropertyEntity;
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
            const body: ProductconfiguratorpropertyEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyEntity", ""
            ) as ProductconfiguratorpropertyEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorListProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorListPropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PropertyListPropertiesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PropertyListPropertiesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PropertyListPropertiesResponse", ""
            ) as PropertyListPropertiesResponse;
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
            const body: PropertyListPropertiesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PropertyListPropertiesResponse", ""
            ) as PropertyListPropertiesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorUpdateProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorUpdatePropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorpropertyEntity >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorpropertyEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyEntity", ""
            ) as ProductconfiguratorpropertyEntity;
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
            const body: ProductconfiguratorpropertyEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyEntity", ""
            ) as ProductconfiguratorpropertyEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

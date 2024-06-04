// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ConfigurationGetAvailableConfigurationResponse } from '../models/ConfigurationGetAvailableConfigurationResponse';
import { ConfigurationGetConfigurationFromSelectionsResponse } from '../models/ConfigurationGetConfigurationFromSelectionsResponse';
import { GooglerpcStatus } from '../models/GooglerpcStatus';
import { ProductConfiguratorGetAvailableConfiguration2Request } from '../models/ProductConfiguratorGetAvailableConfiguration2Request';
import { ProductConfiguratorGetConfigurationFromSelectionsRequest } from '../models/ProductConfiguratorGetConfigurationFromSelectionsRequest';

/**
 * no description
 */
export class ConfigurationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param configuratorId If not set, the service returns the active configurator
     */
    public async productConfiguratorGetAvailableConfiguration(tenantId: string, productId: string, configuratorId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("ConfigurationApi", "productConfiguratorGetAvailableConfiguration", "tenantId");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ConfigurationApi", "productConfiguratorGetAvailableConfiguration", "productId");
        }



        // Path Params
        const localVarPath = '/v1/{tenantId}/product/{productId}/configuration'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (configuratorId !== undefined) {
            requestContext.setQueryParam("configuratorId", ObjectSerializer.serialize(configuratorId, "string", ""));
        }


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
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public async productConfiguratorGetAvailableConfiguration2(tenantId: string, productId: string, body: ProductConfiguratorGetAvailableConfiguration2Request, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("ConfigurationApi", "productConfiguratorGetAvailableConfiguration2", "tenantId");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ConfigurationApi", "productConfiguratorGetAvailableConfiguration2", "productId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ConfigurationApi", "productConfiguratorGetAvailableConfiguration2", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/product/{productId}/configuration'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorGetAvailableConfiguration2Request", ""),
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
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public async productConfiguratorGetConfigurationFromSelections(tenantId: string, productId: string, body: ProductConfiguratorGetConfigurationFromSelectionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("ConfigurationApi", "productConfiguratorGetConfigurationFromSelections", "tenantId");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ConfigurationApi", "productConfiguratorGetConfigurationFromSelections", "productId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ConfigurationApi", "productConfiguratorGetConfigurationFromSelections", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/product/{productId}/configuration-from-selections'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ProductConfiguratorGetConfigurationFromSelectionsRequest", ""),
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

export class ConfigurationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorGetAvailableConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorGetAvailableConfigurationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConfigurationGetAvailableConfigurationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfigurationGetAvailableConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfigurationGetAvailableConfigurationResponse", ""
            ) as ConfigurationGetAvailableConfigurationResponse;
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
            const body: ConfigurationGetAvailableConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfigurationGetAvailableConfigurationResponse", ""
            ) as ConfigurationGetAvailableConfigurationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorGetAvailableConfiguration2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorGetAvailableConfiguration2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConfigurationGetAvailableConfigurationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfigurationGetAvailableConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfigurationGetAvailableConfigurationResponse", ""
            ) as ConfigurationGetAvailableConfigurationResponse;
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
            const body: ConfigurationGetAvailableConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfigurationGetAvailableConfigurationResponse", ""
            ) as ConfigurationGetAvailableConfigurationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorGetConfigurationFromSelections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorGetConfigurationFromSelectionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConfigurationGetConfigurationFromSelectionsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfigurationGetConfigurationFromSelectionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfigurationGetConfigurationFromSelectionsResponse", ""
            ) as ConfigurationGetConfigurationFromSelectionsResponse;
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
            const body: ConfigurationGetConfigurationFromSelectionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfigurationGetConfigurationFromSelectionsResponse", ""
            ) as ConfigurationGetConfigurationFromSelectionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

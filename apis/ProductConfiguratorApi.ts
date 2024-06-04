// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GooglerpcStatus } from '../models/GooglerpcStatus';
import { ProductConfiguratorListPropertiesByConfigurationRequest } from '../models/ProductConfiguratorListPropertiesByConfigurationRequest';
import { ProductconfiguratorpropertyEntity } from '../models/ProductconfiguratorpropertyEntity';
import { PropertyListPropertiesByConfigurationResponse } from '../models/PropertyListPropertiesByConfigurationResponse';

/**
 * no description
 */
export class ProductConfiguratorApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param tenantId 
     * @param propertyId 
     */
    public async productConfiguratorGetProperty(tenantId: string, propertyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("ProductConfiguratorApi", "productConfiguratorGetProperty", "tenantId");
        }


        // verify required parameter 'propertyId' is not null or undefined
        if (propertyId === null || propertyId === undefined) {
            throw new RequiredError("ProductConfiguratorApi", "productConfiguratorGetProperty", "propertyId");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/property/{propertyId}'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'propertyId' + '}', encodeURIComponent(String(propertyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public async productConfiguratorListPropertiesByConfiguration(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListPropertiesByConfigurationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new RequiredError("ProductConfiguratorApi", "productConfiguratorListPropertiesByConfiguration", "tenantId");
        }


        // verify required parameter 'configuratorId' is not null or undefined
        if (configuratorId === null || configuratorId === undefined) {
            throw new RequiredError("ProductConfiguratorApi", "productConfiguratorListPropertiesByConfiguration", "configuratorId");
        }


        // verify required parameter 'pageSize' is not null or undefined
        if (pageSize === null || pageSize === undefined) {
            throw new RequiredError("ProductConfiguratorApi", "productConfiguratorListPropertiesByConfiguration", "pageSize");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ProductConfiguratorApi", "productConfiguratorListPropertiesByConfiguration", "body");
        }


        // Path Params
        const localVarPath = '/v1/{tenantId}/configurator/{configuratorId}/page-size/{pageSize}/properties'
            .replace('{' + 'tenantId' + '}', encodeURIComponent(String(tenantId)))
            .replace('{' + 'configuratorId' + '}', encodeURIComponent(String(configuratorId)))
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
            ObjectSerializer.serialize(body, "ProductConfiguratorListPropertiesByConfigurationRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ProductConfiguratorApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productConfiguratorGetProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorGetPropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductconfiguratorpropertyEntity >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductconfiguratorpropertyEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductconfiguratorpropertyEntity", ""
            ) as ProductconfiguratorpropertyEntity;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
     * @params response Response returned by the server for a request to productConfiguratorListPropertiesByConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productConfiguratorListPropertiesByConfigurationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PropertyListPropertiesByConfigurationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PropertyListPropertiesByConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PropertyListPropertiesByConfigurationResponse", ""
            ) as PropertyListPropertiesByConfigurationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: PropertyListPropertiesByConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PropertyListPropertiesByConfigurationResponse", ""
            ) as PropertyListPropertiesByConfigurationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

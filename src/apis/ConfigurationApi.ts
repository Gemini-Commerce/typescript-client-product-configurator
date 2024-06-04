/* tslint:disable */
/* eslint-disable */
/**
 * Product Configurator Service
 * ## Introduction  This comprehensive guide will equip you with the knowledge to integrate and leverage our Product Configurator Service in your applications.  ## Quick Start  Get up and running in no time! Follow these steps to kickstart your integration:  1. **Authentication:** Obtain your integration JWT to authenticate your requests. 2. **Client Libraries:** Explore our GitHub repositories to grab client libraries in your preferred programming language. 3. **API Overview:** Familiarize yourself with our RESTful API using the OpenAPI specification.  ## Integration  ### API Overview  Our RESTful API is the gateway to unlocking the full potential of Product Configurator. Check out the detailed [API Reference](/docs/category/configurator) for a granular understanding of each endpoint and request/response format.  ### Client Libraries  To expedite your integration process, we provide client libraries for various programming languages. Find the one that suits your stack in our [GitHub repositories](https://github.com/Gemini-Commerce).  ### Authentication  Security is paramount. Learn how to authenticate your requests using JWT. This ensures a secure and reliable connection between your application and Product Configurator.  ## Configuration Management  ### Configurator Lifecycle  Understand the lifecycle of configurators, from draft to active and deleted. This flexibility allows you to manage configurations at your own pace.  ### Steps and Options  Configure product steps with ease and define options effortlessly. Explore the power of dependencies to create dynamic and intuitive configurations.  ### Matrices  Delve into matrices—your secret weapon. Explore price and weight matrices, and learn how configured steps influence properties and pricing.  ### Price Management  Unleash dynamic pricing with our versatile price matrices. From fixed prices to incremental structures, adapt to diverse pricing models effortlessly.  ## Security  Your data is in safe hands. Discover how Product Configurator ensures security through JWT authentication, safeguarding your sensitive information.  ## Backward Compatibility  Stay ahead of the curve. Learn about our versioning strategy, providing backward compatibility while allowing our service to evolve seamlessly.  ## Developer Support  Have questions? Need assistance? Write to us at [info@gemini-commerce.com](mailto:info@gemini-commerce.com) and we will get back to you.
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ConfigurationGetAvailableConfigurationResponse,
  ConfigurationGetConfigurationFromSelectionsResponse,
  GooglerpcStatus,
  ProductConfiguratorGetAvailableConfiguration2Request,
  ProductConfiguratorGetConfigurationFromSelectionsRequest,
} from '../models/index';
import {
    ConfigurationGetAvailableConfigurationResponseFromJSON,
    ConfigurationGetAvailableConfigurationResponseToJSON,
    ConfigurationGetConfigurationFromSelectionsResponseFromJSON,
    ConfigurationGetConfigurationFromSelectionsResponseToJSON,
    GooglerpcStatusFromJSON,
    GooglerpcStatusToJSON,
    ProductConfiguratorGetAvailableConfiguration2RequestFromJSON,
    ProductConfiguratorGetAvailableConfiguration2RequestToJSON,
    ProductConfiguratorGetConfigurationFromSelectionsRequestFromJSON,
    ProductConfiguratorGetConfigurationFromSelectionsRequestToJSON,
} from '../models/index';

export interface ProductConfiguratorGetAvailableConfigurationRequest {
    tenantId: string;
    productId: string;
    configuratorId?: string;
}

export interface ProductConfiguratorGetAvailableConfiguration2OperationRequest {
    tenantId: string;
    productId: string;
    body: ProductConfiguratorGetAvailableConfiguration2Request;
}

export interface ProductConfiguratorGetConfigurationFromSelectionsOperationRequest {
    tenantId: string;
    productId: string;
    body: ProductConfiguratorGetConfigurationFromSelectionsRequest;
}

/**
 * 
 */
export class ConfigurationApi extends runtime.BaseAPI {

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     */
    async productConfiguratorGetAvailableConfigurationRaw(requestParameters: ProductConfiguratorGetAvailableConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationGetAvailableConfigurationResponse>> {
        if (requestParameters.tenantId === null || requestParameters.tenantId === undefined) {
            throw new runtime.RequiredError('tenantId','Required parameter requestParameters.tenantId was null or undefined when calling productConfiguratorGetAvailableConfiguration.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling productConfiguratorGetAvailableConfiguration.');
        }

        const queryParameters: any = {};

        if (requestParameters.configuratorId !== undefined) {
            queryParameters['configuratorId'] = requestParameters.configuratorId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standardAuthorization", []);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // APIAuthorization authentication
        }

        const response = await this.request({
            path: `/v1/{tenantId}/product/{productId}/configuration`.replace(`{${"tenantId"}}`, encodeURIComponent(String(requestParameters.tenantId))).replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationGetAvailableConfigurationResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     */
    async productConfiguratorGetAvailableConfiguration(requestParameters: ProductConfiguratorGetAvailableConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationGetAvailableConfigurationResponse> {
        const response = await this.productConfiguratorGetAvailableConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     */
    async productConfiguratorGetAvailableConfiguration2Raw(requestParameters: ProductConfiguratorGetAvailableConfiguration2OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationGetAvailableConfigurationResponse>> {
        if (requestParameters.tenantId === null || requestParameters.tenantId === undefined) {
            throw new runtime.RequiredError('tenantId','Required parameter requestParameters.tenantId was null or undefined when calling productConfiguratorGetAvailableConfiguration2.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling productConfiguratorGetAvailableConfiguration2.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling productConfiguratorGetAvailableConfiguration2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standardAuthorization", []);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // APIAuthorization authentication
        }

        const response = await this.request({
            path: `/v1/{tenantId}/product/{productId}/configuration`.replace(`{${"tenantId"}}`, encodeURIComponent(String(requestParameters.tenantId))).replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductConfiguratorGetAvailableConfiguration2RequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationGetAvailableConfigurationResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     */
    async productConfiguratorGetAvailableConfiguration2(requestParameters: ProductConfiguratorGetAvailableConfiguration2OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationGetAvailableConfigurationResponse> {
        const response = await this.productConfiguratorGetAvailableConfiguration2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     */
    async productConfiguratorGetConfigurationFromSelectionsRaw(requestParameters: ProductConfiguratorGetConfigurationFromSelectionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationGetConfigurationFromSelectionsResponse>> {
        if (requestParameters.tenantId === null || requestParameters.tenantId === undefined) {
            throw new runtime.RequiredError('tenantId','Required parameter requestParameters.tenantId was null or undefined when calling productConfiguratorGetConfigurationFromSelections.');
        }

        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling productConfiguratorGetConfigurationFromSelections.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling productConfiguratorGetConfigurationFromSelections.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standardAuthorization", []);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // APIAuthorization authentication
        }

        const response = await this.request({
            path: `/v1/{tenantId}/product/{productId}/configuration-from-selections`.replace(`{${"tenantId"}}`, encodeURIComponent(String(requestParameters.tenantId))).replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductConfiguratorGetConfigurationFromSelectionsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationGetConfigurationFromSelectionsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     */
    async productConfiguratorGetConfigurationFromSelections(requestParameters: ProductConfiguratorGetConfigurationFromSelectionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationGetConfigurationFromSelectionsResponse> {
        const response = await this.productConfiguratorGetConfigurationFromSelectionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ConfigurationConfigurationStep } from '../models/ConfigurationConfigurationStep';
import { ConfigurationConfigurator } from '../models/ConfigurationConfigurator';
import { ConfigurationGetAvailableConfigurationResponse } from '../models/ConfigurationGetAvailableConfigurationResponse';
import { ConfigurationGetConfigurationFromSelectionsResponse } from '../models/ConfigurationGetConfigurationFromSelectionsResponse';
import { ConfigurationOptionProperty } from '../models/ConfigurationOptionProperty';
import { ConfigurationProperty } from '../models/ConfigurationProperty';
import { ConfigurationPropertyFilter } from '../models/ConfigurationPropertyFilter';
import { ConfigurationPropertyFilterGenericProperty } from '../models/ConfigurationPropertyFilterGenericProperty';
import { ConfigurationStepOption } from '../models/ConfigurationStepOption';
import { ConfiguratorListResponse } from '../models/ConfiguratorListResponse';
import { DependencyCondition } from '../models/DependencyCondition';
import { DependencyListDependenciesResponse } from '../models/DependencyListDependenciesResponse';
import { GooglerpcStatus } from '../models/GooglerpcStatus';
import { ListMatricesRequestFilter } from '../models/ListMatricesRequestFilter';
import { LocalisationLocalizedText } from '../models/LocalisationLocalizedText';
import { MatrixGenericType } from '../models/MatrixGenericType';
import { MatrixListMatricesResponse } from '../models/MatrixListMatricesResponse';
import { MatrixPriceType } from '../models/MatrixPriceType';
import { MatrixWeightType } from '../models/MatrixWeightType';
import { OptionListOptionsResponse } from '../models/OptionListOptionsResponse';
import { OptionSwatch } from '../models/OptionSwatch';
import { ProductConfiguratorBulkCreateOptionsRequest } from '../models/ProductConfiguratorBulkCreateOptionsRequest';
import { ProductConfiguratorBulkCreatePropertiesRequest } from '../models/ProductConfiguratorBulkCreatePropertiesRequest';
import { ProductConfiguratorBulkCreateStepsRequest } from '../models/ProductConfiguratorBulkCreateStepsRequest';
import { ProductConfiguratorBulkDeleteOptionsRequest } from '../models/ProductConfiguratorBulkDeleteOptionsRequest';
import { ProductConfiguratorBulkDeleteStepsRequest } from '../models/ProductConfiguratorBulkDeleteStepsRequest';
import { ProductConfiguratorBulkUpdateOptionsRequest } from '../models/ProductConfiguratorBulkUpdateOptionsRequest';
import { ProductConfiguratorBulkUpdatePropertiesRequest } from '../models/ProductConfiguratorBulkUpdatePropertiesRequest';
import { ProductConfiguratorCopyConfiguratorRequest } from '../models/ProductConfiguratorCopyConfiguratorRequest';
import { ProductConfiguratorCopyOptionRequest } from '../models/ProductConfiguratorCopyOptionRequest';
import { ProductConfiguratorCopyStepRequest } from '../models/ProductConfiguratorCopyStepRequest';
import { ProductConfiguratorCreateConfiguratorRequest } from '../models/ProductConfiguratorCreateConfiguratorRequest';
import { ProductConfiguratorCreateDependencyRequest } from '../models/ProductConfiguratorCreateDependencyRequest';
import { ProductConfiguratorCreateMatrixRequest } from '../models/ProductConfiguratorCreateMatrixRequest';
import { ProductConfiguratorCreateOptionRequest } from '../models/ProductConfiguratorCreateOptionRequest';
import { ProductConfiguratorCreatePropertyRequest } from '../models/ProductConfiguratorCreatePropertyRequest';
import { ProductConfiguratorCreateStepRequest } from '../models/ProductConfiguratorCreateStepRequest';
import { ProductConfiguratorGetAvailableConfiguration2Request } from '../models/ProductConfiguratorGetAvailableConfiguration2Request';
import { ProductConfiguratorGetConfigurationFromSelectionsRequest } from '../models/ProductConfiguratorGetConfigurationFromSelectionsRequest';
import { ProductConfiguratorListDependenciesRequest } from '../models/ProductConfiguratorListDependenciesRequest';
import { ProductConfiguratorListMatricesRequest } from '../models/ProductConfiguratorListMatricesRequest';
import { ProductConfiguratorListPropertiesByConfigurationRequest } from '../models/ProductConfiguratorListPropertiesByConfigurationRequest';
import { ProductConfiguratorListPropertiesRequest } from '../models/ProductConfiguratorListPropertiesRequest';
import { ProductConfiguratorUpdateConfiguratorRequest } from '../models/ProductConfiguratorUpdateConfiguratorRequest';
import { ProductConfiguratorUpdateDependencyRequest } from '../models/ProductConfiguratorUpdateDependencyRequest';
import { ProductConfiguratorUpdateMatrixRequest } from '../models/ProductConfiguratorUpdateMatrixRequest';
import { ProductConfiguratorUpdateOptionRequest } from '../models/ProductConfiguratorUpdateOptionRequest';
import { ProductConfiguratorUpdatePropertyRequest } from '../models/ProductConfiguratorUpdatePropertyRequest';
import { ProductConfiguratorUpdateStepRequest } from '../models/ProductConfiguratorUpdateStepRequest';
import { ProductconfiguratorMoney } from '../models/ProductconfiguratorMoney';
import { ProductconfiguratorPropertyMode } from '../models/ProductconfiguratorPropertyMode';
import { ProductconfiguratorPropertyType } from '../models/ProductconfiguratorPropertyType';
import { ProductconfiguratorWeightUnit } from '../models/ProductconfiguratorWeightUnit';
import { ProductconfiguratorconfigurationOption } from '../models/ProductconfiguratorconfigurationOption';
import { ProductconfiguratorconfigurationSelection } from '../models/ProductconfiguratorconfigurationSelection';
import { ProductconfiguratorconfigurationStep } from '../models/ProductconfiguratorconfigurationStep';
import { ProductconfiguratorconfiguratorEntity } from '../models/ProductconfiguratorconfiguratorEntity';
import { ProductconfiguratorconfiguratorStatus } from '../models/ProductconfiguratorconfiguratorStatus';
import { ProductconfiguratorconfiguratorUpdatePayload } from '../models/ProductconfiguratorconfiguratorUpdatePayload';
import { ProductconfiguratordependencyEntity } from '../models/ProductconfiguratordependencyEntity';
import { ProductconfiguratordependencyType } from '../models/ProductconfiguratordependencyType';
import { ProductconfiguratordependencyUpdatePayload } from '../models/ProductconfiguratordependencyUpdatePayload';
import { ProductconfiguratormatrixEntity } from '../models/ProductconfiguratormatrixEntity';
import { ProductconfiguratormatrixStep } from '../models/ProductconfiguratormatrixStep';
import { ProductconfiguratormatrixUpdatePayload } from '../models/ProductconfiguratormatrixUpdatePayload';
import { ProductconfiguratoroptionBulkCreateRequestCreateEntity } from '../models/ProductconfiguratoroptionBulkCreateRequestCreateEntity';
import { ProductconfiguratoroptionBulkCreateResponse } from '../models/ProductconfiguratoroptionBulkCreateResponse';
import { ProductconfiguratoroptionBulkUpdateRequestUpdateEntity } from '../models/ProductconfiguratoroptionBulkUpdateRequestUpdateEntity';
import { ProductconfiguratoroptionBulkUpdateResponse } from '../models/ProductconfiguratoroptionBulkUpdateResponse';
import { ProductconfiguratoroptionEntity } from '../models/ProductconfiguratoroptionEntity';
import { ProductconfiguratoroptionUpdatePayload } from '../models/ProductconfiguratoroptionUpdatePayload';
import { ProductconfiguratorpropertyBulkCreateRequestCreateEntity } from '../models/ProductconfiguratorpropertyBulkCreateRequestCreateEntity';
import { ProductconfiguratorpropertyBulkCreateResponse } from '../models/ProductconfiguratorpropertyBulkCreateResponse';
import { ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity } from '../models/ProductconfiguratorpropertyBulkUpdateRequestUpdateEntity';
import { ProductconfiguratorpropertyBulkUpdateResponse } from '../models/ProductconfiguratorpropertyBulkUpdateResponse';
import { ProductconfiguratorpropertyEntity } from '../models/ProductconfiguratorpropertyEntity';
import { ProductconfiguratorpropertyGenericProperty } from '../models/ProductconfiguratorpropertyGenericProperty';
import { ProductconfiguratorpropertyPriceProperty } from '../models/ProductconfiguratorpropertyPriceProperty';
import { ProductconfiguratorpropertyUpdatePayload } from '../models/ProductconfiguratorpropertyUpdatePayload';
import { ProductconfiguratorpropertyWeightProperty } from '../models/ProductconfiguratorpropertyWeightProperty';
import { ProductconfiguratorstepBulkCreateRequestCreateEntity } from '../models/ProductconfiguratorstepBulkCreateRequestCreateEntity';
import { ProductconfiguratorstepBulkCreateResponse } from '../models/ProductconfiguratorstepBulkCreateResponse';
import { ProductconfiguratorstepEntity } from '../models/ProductconfiguratorstepEntity';
import { ProductconfiguratorstepUpdatePayload } from '../models/ProductconfiguratorstepUpdatePayload';
import { PropertyListPropertiesByConfigurationRequestSelection } from '../models/PropertyListPropertiesByConfigurationRequestSelection';
import { PropertyListPropertiesByConfigurationResponse } from '../models/PropertyListPropertiesByConfigurationResponse';
import { PropertyListPropertiesResponse } from '../models/PropertyListPropertiesResponse';
import { PropertyUpdatePayloadGenericProperty } from '../models/PropertyUpdatePayloadGenericProperty';
import { PropertyUpdatePayloadPriceProperty } from '../models/PropertyUpdatePayloadPriceProperty';
import { PropertyUpdatePayloadWeightProperty } from '../models/PropertyUpdatePayloadWeightProperty';
import { ProtobufAny } from '../models/ProtobufAny';

import { ConfigurationApiRequestFactory, ConfigurationApiResponseProcessor} from "../apis/ConfigurationApi";
export class ObservableConfigurationApi {
    private requestFactory: ConfigurationApiRequestFactory;
    private responseProcessor: ConfigurationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigurationApiRequestFactory,
        responseProcessor?: ConfigurationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfigurationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfigurationApiResponseProcessor();
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param configuratorId If not set, the service returns the active configurator
     */
    public productConfiguratorGetAvailableConfigurationWithHttpInfo(tenantId: string, productId: string, configuratorId?: string, _options?: Configuration): Observable<HttpInfo<ConfigurationGetAvailableConfigurationResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorGetAvailableConfiguration(tenantId, productId, configuratorId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorGetAvailableConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param configuratorId If not set, the service returns the active configurator
     */
    public productConfiguratorGetAvailableConfiguration(tenantId: string, productId: string, configuratorId?: string, _options?: Configuration): Observable<ConfigurationGetAvailableConfigurationResponse> {
        return this.productConfiguratorGetAvailableConfigurationWithHttpInfo(tenantId, productId, configuratorId, _options).pipe(map((apiResponse: HttpInfo<ConfigurationGetAvailableConfigurationResponse>) => apiResponse.data));
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorGetAvailableConfiguration2WithHttpInfo(tenantId: string, productId: string, body: ProductConfiguratorGetAvailableConfiguration2Request, _options?: Configuration): Observable<HttpInfo<ConfigurationGetAvailableConfigurationResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorGetAvailableConfiguration2(tenantId, productId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorGetAvailableConfiguration2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorGetAvailableConfiguration2(tenantId: string, productId: string, body: ProductConfiguratorGetAvailableConfiguration2Request, _options?: Configuration): Observable<ConfigurationGetAvailableConfigurationResponse> {
        return this.productConfiguratorGetAvailableConfiguration2WithHttpInfo(tenantId, productId, body, _options).pipe(map((apiResponse: HttpInfo<ConfigurationGetAvailableConfigurationResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorGetConfigurationFromSelectionsWithHttpInfo(tenantId: string, productId: string, body: ProductConfiguratorGetConfigurationFromSelectionsRequest, _options?: Configuration): Observable<HttpInfo<ConfigurationGetConfigurationFromSelectionsResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorGetConfigurationFromSelections(tenantId, productId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorGetConfigurationFromSelectionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorGetConfigurationFromSelections(tenantId: string, productId: string, body: ProductConfiguratorGetConfigurationFromSelectionsRequest, _options?: Configuration): Observable<ConfigurationGetConfigurationFromSelectionsResponse> {
        return this.productConfiguratorGetConfigurationFromSelectionsWithHttpInfo(tenantId, productId, body, _options).pipe(map((apiResponse: HttpInfo<ConfigurationGetConfigurationFromSelectionsResponse>) => apiResponse.data));
    }

}

import { ConfiguratorApiRequestFactory, ConfiguratorApiResponseProcessor} from "../apis/ConfiguratorApi";
export class ObservableConfiguratorApi {
    private requestFactory: ConfiguratorApiRequestFactory;
    private responseProcessor: ConfiguratorApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfiguratorApiRequestFactory,
        responseProcessor?: ConfiguratorApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfiguratorApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfiguratorApiResponseProcessor();
    }

    /**
     * Duplicate an existing product configurator from the source to the specified tenant and product. Submit an empty body to initiate the copy process, creating a new configuration based on the source.
     * Copy Configurator
     * @param tenantId 
     * @param sourceConfiguratorId 
     * @param body 
     */
    public productConfiguratorCopyConfiguratorWithHttpInfo(tenantId: string, sourceConfiguratorId: string, body: ProductConfiguratorCopyConfiguratorRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCopyConfigurator(tenantId, sourceConfiguratorId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCopyConfiguratorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Duplicate an existing product configurator from the source to the specified tenant and product. Submit an empty body to initiate the copy process, creating a new configuration based on the source.
     * Copy Configurator
     * @param tenantId 
     * @param sourceConfiguratorId 
     * @param body 
     */
    public productConfiguratorCopyConfigurator(tenantId: string, sourceConfiguratorId: string, body: ProductConfiguratorCopyConfiguratorRequest, _options?: Configuration): Observable<ProductconfiguratorconfiguratorEntity> {
        return this.productConfiguratorCopyConfiguratorWithHttpInfo(tenantId, sourceConfiguratorId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorconfiguratorEntity>) => apiResponse.data));
    }

    /**
     * Create a new product configurator for a specified tenant and product. Submit the desired configuration details in the request body to initiate the creation process.
     * Create Configurator
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorCreateConfiguratorWithHttpInfo(tenantId: string, productId: string, body: ProductConfiguratorCreateConfiguratorRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCreateConfigurator(tenantId, productId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCreateConfiguratorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new product configurator for a specified tenant and product. Submit the desired configuration details in the request body to initiate the creation process.
     * Create Configurator
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorCreateConfigurator(tenantId: string, productId: string, body: ProductConfiguratorCreateConfiguratorRequest, _options?: Configuration): Observable<ProductconfiguratorconfiguratorEntity> {
        return this.productConfiguratorCreateConfiguratorWithHttpInfo(tenantId, productId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorconfiguratorEntity>) => apiResponse.data));
    }

    /**
     * Delete a product configurator by specifying the tenant and configurator IDs. Ensure precise removal of unwanted configurations with a straightforward DELETE request.
     * Delete Configurator
     * @param tenantId 
     * @param configuratorId 
     */
    public productConfiguratorDeleteConfiguratorWithHttpInfo(tenantId: string, configuratorId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productConfiguratorDeleteConfigurator(tenantId, configuratorId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorDeleteConfiguratorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a product configurator by specifying the tenant and configurator IDs. Ensure precise removal of unwanted configurations with a straightforward DELETE request.
     * Delete Configurator
     * @param tenantId 
     * @param configuratorId 
     */
    public productConfiguratorDeleteConfigurator(tenantId: string, configuratorId: string, _options?: Configuration): Observable<any> {
        return this.productConfiguratorDeleteConfiguratorWithHttpInfo(tenantId, configuratorId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param tenantId 
     * @param productId 
     * @param status 
     */
    public productConfiguratorGetConfiguratorByProductIdWithHttpInfo(tenantId: string, productId: string, status?: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED', _options?: Configuration): Observable<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorGetConfiguratorByProductId(tenantId, productId, status, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorGetConfiguratorByProductIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param tenantId 
     * @param productId 
     * @param status 
     */
    public productConfiguratorGetConfiguratorByProductId(tenantId: string, productId: string, status?: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED', _options?: Configuration): Observable<ProductconfiguratorconfiguratorEntity> {
        return this.productConfiguratorGetConfiguratorByProductIdWithHttpInfo(tenantId, productId, status, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorconfiguratorEntity>) => apiResponse.data));
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param tenantId 
     * @param productId 
     * @param status 
     */
    public productConfiguratorGetConfiguratorByProductId2WithHttpInfo(tenantId: string, productId: string, status: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED', _options?: Configuration): Observable<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorGetConfiguratorByProductId2(tenantId, productId, status, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorGetConfiguratorByProductId2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param tenantId 
     * @param productId 
     * @param status 
     */
    public productConfiguratorGetConfiguratorByProductId2(tenantId: string, productId: string, status: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED', _options?: Configuration): Observable<ProductconfiguratorconfiguratorEntity> {
        return this.productConfiguratorGetConfiguratorByProductId2WithHttpInfo(tenantId, productId, status, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorconfiguratorEntity>) => apiResponse.data));
    }

    /**
     * List all product configurators.
     * List Product Configurators
     * @param tenantId 
     * @param productId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListConfiguratorsWithHttpInfo(tenantId: string, productId: string, pageSize: number, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Observable<HttpInfo<ConfiguratorListResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorListConfigurators(tenantId, productId, pageSize, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorListConfiguratorsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all product configurators.
     * List Product Configurators
     * @param tenantId 
     * @param productId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListConfigurators(tenantId: string, productId: string, pageSize: number, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Observable<ConfiguratorListResponse> {
        return this.productConfiguratorListConfiguratorsWithHttpInfo(tenantId, productId, pageSize, body, _options).pipe(map((apiResponse: HttpInfo<ConfiguratorListResponse>) => apiResponse.data));
    }

    /**
     * Modify an existing product configurator by specifying the tenant and configurator IDs. Use a PUT request with the updated configuration details in the body to seamlessly update and manage product configurations
     * Update Configurator
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorUpdateConfiguratorWithHttpInfo(tenantId: string, configuratorId: string, body: ProductConfiguratorUpdateConfiguratorRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorUpdateConfigurator(tenantId, configuratorId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorUpdateConfiguratorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify an existing product configurator by specifying the tenant and configurator IDs. Use a PUT request with the updated configuration details in the body to seamlessly update and manage product configurations
     * Update Configurator
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorUpdateConfigurator(tenantId: string, configuratorId: string, body: ProductConfiguratorUpdateConfiguratorRequest, _options?: Configuration): Observable<ProductconfiguratorconfiguratorEntity> {
        return this.productConfiguratorUpdateConfiguratorWithHttpInfo(tenantId, configuratorId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorconfiguratorEntity>) => apiResponse.data));
    }

}

import { DependencyApiRequestFactory, DependencyApiResponseProcessor} from "../apis/DependencyApi";
export class ObservableDependencyApi {
    private requestFactory: DependencyApiRequestFactory;
    private responseProcessor: DependencyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DependencyApiRequestFactory,
        responseProcessor?: DependencyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DependencyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DependencyApiResponseProcessor();
    }

    /**
     * Establish a new dependency for an existing step by specifying the tenant and step IDs. Utilize a POST request with the required dependency details in the body to seamlessly enhance the configuration logic of your product.
     * Create Dependency
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorCreateDependencyWithHttpInfo(tenantId: string, stepId: string, body: ProductConfiguratorCreateDependencyRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratordependencyEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCreateDependency(tenantId, stepId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCreateDependencyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Establish a new dependency for an existing step by specifying the tenant and step IDs. Utilize a POST request with the required dependency details in the body to seamlessly enhance the configuration logic of your product.
     * Create Dependency
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorCreateDependency(tenantId: string, stepId: string, body: ProductConfiguratorCreateDependencyRequest, _options?: Configuration): Observable<ProductconfiguratordependencyEntity> {
        return this.productConfiguratorCreateDependencyWithHttpInfo(tenantId, stepId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratordependencyEntity>) => apiResponse.data));
    }

    /**
     * Remove a specific dependency by specifying the tenant and dependency IDs. Ensure precision in dependency management with a straightforward DELETE request, simplifying the elimination of unwanted configuration logic.
     * Delete Dependency
     * @param tenantId 
     * @param dependencyId 
     */
    public productConfiguratorDeleteDependencyWithHttpInfo(tenantId: string, dependencyId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productConfiguratorDeleteDependency(tenantId, dependencyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorDeleteDependencyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a specific dependency by specifying the tenant and dependency IDs. Ensure precision in dependency management with a straightforward DELETE request, simplifying the elimination of unwanted configuration logic.
     * Delete Dependency
     * @param tenantId 
     * @param dependencyId 
     */
    public productConfiguratorDeleteDependency(tenantId: string, dependencyId: string, _options?: Configuration): Observable<any> {
        return this.productConfiguratorDeleteDependencyWithHttpInfo(tenantId, dependencyId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve a list of dependencies based on the specified tenant ID. Customize results by specifying page size for efficient pagination. Submit an empty body to get all dependencies associated with the configurations.
     * List Dependencies
     * @param tenantId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListDependenciesWithHttpInfo(tenantId: string, pageSize: number, body: ProductConfiguratorListDependenciesRequest, _options?: Configuration): Observable<HttpInfo<DependencyListDependenciesResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorListDependencies(tenantId, pageSize, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorListDependenciesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of dependencies based on the specified tenant ID. Customize results by specifying page size for efficient pagination. Submit an empty body to get all dependencies associated with the configurations.
     * List Dependencies
     * @param tenantId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListDependencies(tenantId: string, pageSize: number, body: ProductConfiguratorListDependenciesRequest, _options?: Configuration): Observable<DependencyListDependenciesResponse> {
        return this.productConfiguratorListDependenciesWithHttpInfo(tenantId, pageSize, body, _options).pipe(map((apiResponse: HttpInfo<DependencyListDependenciesResponse>) => apiResponse.data));
    }

    /**
     * Modify an existing dependency by specifying the tenant and dependency IDs. Utilize a PUT request with updated dependency details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Dependency
     * @param tenantId 
     * @param dependencyId 
     * @param body 
     */
    public productConfiguratorUpdateDependencyWithHttpInfo(tenantId: string, dependencyId: string, body: ProductConfiguratorUpdateDependencyRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratordependencyEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorUpdateDependency(tenantId, dependencyId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorUpdateDependencyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify an existing dependency by specifying the tenant and dependency IDs. Utilize a PUT request with updated dependency details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Dependency
     * @param tenantId 
     * @param dependencyId 
     * @param body 
     */
    public productConfiguratorUpdateDependency(tenantId: string, dependencyId: string, body: ProductConfiguratorUpdateDependencyRequest, _options?: Configuration): Observable<ProductconfiguratordependencyEntity> {
        return this.productConfiguratorUpdateDependencyWithHttpInfo(tenantId, dependencyId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratordependencyEntity>) => apiResponse.data));
    }

}

import { MatrixApiRequestFactory, MatrixApiResponseProcessor} from "../apis/MatrixApi";
export class ObservableMatrixApi {
    private requestFactory: MatrixApiRequestFactory;
    private responseProcessor: MatrixApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MatrixApiRequestFactory,
        responseProcessor?: MatrixApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MatrixApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MatrixApiResponseProcessor();
    }

    /**
     * Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.
     * Create Matrix
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorCreateMatrixWithHttpInfo(tenantId: string, body: ProductConfiguratorCreateMatrixRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratormatrixEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCreateMatrix(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCreateMatrixWithHttpInfo(rsp)));
            }));
    }

    /**
     * Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.
     * Create Matrix
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorCreateMatrix(tenantId: string, body: ProductConfiguratorCreateMatrixRequest, _options?: Configuration): Observable<ProductconfiguratormatrixEntity> {
        return this.productConfiguratorCreateMatrixWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratormatrixEntity>) => apiResponse.data));
    }

    /**
     * Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.
     * Delete Matrix
     * @param tenantId 
     * @param matrixId 
     */
    public productConfiguratorDeleteMatrixWithHttpInfo(tenantId: string, matrixId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productConfiguratorDeleteMatrix(tenantId, matrixId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorDeleteMatrixWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.
     * Delete Matrix
     * @param tenantId 
     * @param matrixId 
     */
    public productConfiguratorDeleteMatrix(tenantId: string, matrixId: string, _options?: Configuration): Observable<any> {
        return this.productConfiguratorDeleteMatrixWithHttpInfo(tenantId, matrixId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.
     * Get Matrix
     * @param tenantId 
     * @param matrixId 
     */
    public productConfiguratorGetMatrixWithHttpInfo(tenantId: string, matrixId: string, _options?: Configuration): Observable<HttpInfo<ProductconfiguratormatrixEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorGetMatrix(tenantId, matrixId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorGetMatrixWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.
     * Get Matrix
     * @param tenantId 
     * @param matrixId 
     */
    public productConfiguratorGetMatrix(tenantId: string, matrixId: string, _options?: Configuration): Observable<ProductconfiguratormatrixEntity> {
        return this.productConfiguratorGetMatrixWithHttpInfo(tenantId, matrixId, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratormatrixEntity>) => apiResponse.data));
    }

    /**
     * Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.
     * List Matrices
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListMatricesWithHttpInfo(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListMatricesRequest, _options?: Configuration): Observable<HttpInfo<MatrixListMatricesResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorListMatrices(tenantId, configuratorId, pageSize, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorListMatricesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.
     * List Matrices
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListMatrices(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListMatricesRequest, _options?: Configuration): Observable<MatrixListMatricesResponse> {
        return this.productConfiguratorListMatricesWithHttpInfo(tenantId, configuratorId, pageSize, body, _options).pipe(map((apiResponse: HttpInfo<MatrixListMatricesResponse>) => apiResponse.data));
    }

    /**
     * Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.
     * Remove Pricelist from Matrix
     * @param tenantId 
     * @param matrixId 
     * @param pricelistGrn 
     */
    public productConfiguratorRemovePricelistFromMatrixWithHttpInfo(tenantId: string, matrixId: string, pricelistGrn: string, _options?: Configuration): Observable<HttpInfo<ProductconfiguratormatrixEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorRemovePricelistFromMatrix(tenantId, matrixId, pricelistGrn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorRemovePricelistFromMatrixWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.
     * Remove Pricelist from Matrix
     * @param tenantId 
     * @param matrixId 
     * @param pricelistGrn 
     */
    public productConfiguratorRemovePricelistFromMatrix(tenantId: string, matrixId: string, pricelistGrn: string, _options?: Configuration): Observable<ProductconfiguratormatrixEntity> {
        return this.productConfiguratorRemovePricelistFromMatrixWithHttpInfo(tenantId, matrixId, pricelistGrn, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratormatrixEntity>) => apiResponse.data));
    }

    /**
     * Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.
     * Update Matrix
     * @param tenantId 
     * @param matrixId 
     * @param body 
     */
    public productConfiguratorUpdateMatrixWithHttpInfo(tenantId: string, matrixId: string, body: ProductConfiguratorUpdateMatrixRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratormatrixEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorUpdateMatrix(tenantId, matrixId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorUpdateMatrixWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.
     * Update Matrix
     * @param tenantId 
     * @param matrixId 
     * @param body 
     */
    public productConfiguratorUpdateMatrix(tenantId: string, matrixId: string, body: ProductConfiguratorUpdateMatrixRequest, _options?: Configuration): Observable<ProductconfiguratormatrixEntity> {
        return this.productConfiguratorUpdateMatrixWithHttpInfo(tenantId, matrixId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratormatrixEntity>) => apiResponse.data));
    }

}

import { OptionApiRequestFactory, OptionApiResponseProcessor} from "../apis/OptionApi";
export class ObservableOptionApi {
    private requestFactory: OptionApiRequestFactory;
    private responseProcessor: OptionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OptionApiRequestFactory,
        responseProcessor?: OptionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OptionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OptionApiResponseProcessor();
    }

    /**
     * Add multiple options to an existing step simultaneously. Submit a POST request with the necessary option details in the body to efficiently expand the configuration possibilities in bulk. Streamline large-scale option management effortlessly.
     * Bulk Create Options
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorBulkCreateOptionsWithHttpInfo(tenantId: string, stepId: string, body: ProductConfiguratorBulkCreateOptionsRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratoroptionBulkCreateResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorBulkCreateOptions(tenantId, stepId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorBulkCreateOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add multiple options to an existing step simultaneously. Submit a POST request with the necessary option details in the body to efficiently expand the configuration possibilities in bulk. Streamline large-scale option management effortlessly.
     * Bulk Create Options
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorBulkCreateOptions(tenantId: string, stepId: string, body: ProductConfiguratorBulkCreateOptionsRequest, _options?: Configuration): Observable<ProductconfiguratoroptionBulkCreateResponse> {
        return this.productConfiguratorBulkCreateOptionsWithHttpInfo(tenantId, stepId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratoroptionBulkCreateResponse>) => apiResponse.data));
    }

    /**
     * Efficiently remove multiple options from configurations using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of option IDs in the body for streamlined option management.
     * Bulk Delete Options
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkDeleteOptionsWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkDeleteOptionsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productConfiguratorBulkDeleteOptions(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorBulkDeleteOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Efficiently remove multiple options from configurations using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of option IDs in the body for streamlined option management.
     * Bulk Delete Options
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkDeleteOptions(tenantId: string, body: ProductConfiguratorBulkDeleteOptionsRequest, _options?: Configuration): Observable<any> {
        return this.productConfiguratorBulkDeleteOptionsWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Effortlessly update multiple options. Specify the tenant ID and submit a PUT request with the updated option details in the body. Streamline the customization of a multitude of options in one go.
     * Bulk Update Options
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkUpdateOptionsWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkUpdateOptionsRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratoroptionBulkUpdateResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorBulkUpdateOptions(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorBulkUpdateOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Effortlessly update multiple options. Specify the tenant ID and submit a PUT request with the updated option details in the body. Streamline the customization of a multitude of options in one go.
     * Bulk Update Options
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkUpdateOptions(tenantId: string, body: ProductConfiguratorBulkUpdateOptionsRequest, _options?: Configuration): Observable<ProductconfiguratoroptionBulkUpdateResponse> {
        return this.productConfiguratorBulkUpdateOptionsWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratoroptionBulkUpdateResponse>) => apiResponse.data));
    }

    /**
     * Duplicate an existing option from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new option based on the source configuration. Streamline option replication effortlessly.
     * Copy Option
     * @param tenantId 
     * @param sourceOptionId 
     * @param body 
     */
    public productConfiguratorCopyOptionWithHttpInfo(tenantId: string, sourceOptionId: string, body: ProductConfiguratorCopyOptionRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratoroptionEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCopyOption(tenantId, sourceOptionId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCopyOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Duplicate an existing option from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new option based on the source configuration. Streamline option replication effortlessly.
     * Copy Option
     * @param tenantId 
     * @param sourceOptionId 
     * @param body 
     */
    public productConfiguratorCopyOption(tenantId: string, sourceOptionId: string, body: ProductConfiguratorCopyOptionRequest, _options?: Configuration): Observable<ProductconfiguratoroptionEntity> {
        return this.productConfiguratorCopyOptionWithHttpInfo(tenantId, sourceOptionId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratoroptionEntity>) => apiResponse.data));
    }

    /**
     * Integrate a new option into an existing step by specifying the tenant and step IDs. Use a POST request with the required option details in the body for seamless customization and expansion of product configurations.
     * Create Option
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorCreateOptionWithHttpInfo(tenantId: string, stepId: string, body: ProductConfiguratorCreateOptionRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratoroptionEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCreateOption(tenantId, stepId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCreateOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Integrate a new option into an existing step by specifying the tenant and step IDs. Use a POST request with the required option details in the body for seamless customization and expansion of product configurations.
     * Create Option
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorCreateOption(tenantId: string, stepId: string, body: ProductConfiguratorCreateOptionRequest, _options?: Configuration): Observable<ProductconfiguratoroptionEntity> {
        return this.productConfiguratorCreateOptionWithHttpInfo(tenantId, stepId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratoroptionEntity>) => apiResponse.data));
    }

    /**
     * Remove a specific option by specifying the tenant and option IDs. Ensure precision in option management with a straightforward DELETE request, simplifying the elimination of unwanted configuration choices.
     * Delete Option
     * @param tenantId 
     * @param optionId 
     */
    public productConfiguratorDeleteOptionWithHttpInfo(tenantId: string, optionId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productConfiguratorDeleteOption(tenantId, optionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorDeleteOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a specific option by specifying the tenant and option IDs. Ensure precision in option management with a straightforward DELETE request, simplifying the elimination of unwanted configuration choices.
     * Delete Option
     * @param tenantId 
     * @param optionId 
     */
    public productConfiguratorDeleteOption(tenantId: string, optionId: string, _options?: Configuration): Observable<any> {
        return this.productConfiguratorDeleteOptionWithHttpInfo(tenantId, optionId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve a list of options for a specific step based on tenant and step IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all options associated with the step.
     * List Options
     * @param tenantId 
     * @param stepId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListOptionsWithHttpInfo(tenantId: string, stepId: string, pageSize: number, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Observable<HttpInfo<OptionListOptionsResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorListOptions(tenantId, stepId, pageSize, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorListOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of options for a specific step based on tenant and step IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all options associated with the step.
     * List Options
     * @param tenantId 
     * @param stepId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListOptions(tenantId: string, stepId: string, pageSize: number, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Observable<OptionListOptionsResponse> {
        return this.productConfiguratorListOptionsWithHttpInfo(tenantId, stepId, pageSize, body, _options).pipe(map((apiResponse: HttpInfo<OptionListOptionsResponse>) => apiResponse.data));
    }

    /**
     * Modify an existing option by specifying the tenant and option IDs. Utilize a PUT request with updated option details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Option
     * @param tenantId 
     * @param optionId 
     * @param body 
     */
    public productConfiguratorUpdateOptionWithHttpInfo(tenantId: string, optionId: string, body: ProductConfiguratorUpdateOptionRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratoroptionEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorUpdateOption(tenantId, optionId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorUpdateOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify an existing option by specifying the tenant and option IDs. Utilize a PUT request with updated option details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Option
     * @param tenantId 
     * @param optionId 
     * @param body 
     */
    public productConfiguratorUpdateOption(tenantId: string, optionId: string, body: ProductConfiguratorUpdateOptionRequest, _options?: Configuration): Observable<ProductconfiguratoroptionEntity> {
        return this.productConfiguratorUpdateOptionWithHttpInfo(tenantId, optionId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratoroptionEntity>) => apiResponse.data));
    }

}

import { ProductConfiguratorApiRequestFactory, ProductConfiguratorApiResponseProcessor} from "../apis/ProductConfiguratorApi";
export class ObservableProductConfiguratorApi {
    private requestFactory: ProductConfiguratorApiRequestFactory;
    private responseProcessor: ProductConfiguratorApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductConfiguratorApiRequestFactory,
        responseProcessor?: ProductConfiguratorApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductConfiguratorApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductConfiguratorApiResponseProcessor();
    }

    /**
     * @param tenantId 
     * @param propertyId 
     */
    public productConfiguratorGetPropertyWithHttpInfo(tenantId: string, propertyId: string, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorpropertyEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorGetProperty(tenantId, propertyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorGetPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param tenantId 
     * @param propertyId 
     */
    public productConfiguratorGetProperty(tenantId: string, propertyId: string, _options?: Configuration): Observable<ProductconfiguratorpropertyEntity> {
        return this.productConfiguratorGetPropertyWithHttpInfo(tenantId, propertyId, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorpropertyEntity>) => apiResponse.data));
    }

    /**
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListPropertiesByConfigurationWithHttpInfo(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListPropertiesByConfigurationRequest, _options?: Configuration): Observable<HttpInfo<PropertyListPropertiesByConfigurationResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorListPropertiesByConfiguration(tenantId, configuratorId, pageSize, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorListPropertiesByConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListPropertiesByConfiguration(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListPropertiesByConfigurationRequest, _options?: Configuration): Observable<PropertyListPropertiesByConfigurationResponse> {
        return this.productConfiguratorListPropertiesByConfigurationWithHttpInfo(tenantId, configuratorId, pageSize, body, _options).pipe(map((apiResponse: HttpInfo<PropertyListPropertiesByConfigurationResponse>) => apiResponse.data));
    }

}

import { PropertyApiRequestFactory, PropertyApiResponseProcessor} from "../apis/PropertyApi";
export class ObservablePropertyApi {
    private requestFactory: PropertyApiRequestFactory;
    private responseProcessor: PropertyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PropertyApiRequestFactory,
        responseProcessor?: PropertyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PropertyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PropertyApiResponseProcessor();
    }

    /**
     * Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.
     * Bulk Create Properties
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkCreatePropertiesWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkCreatePropertiesRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorpropertyBulkCreateResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorBulkCreateProperties(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorBulkCreatePropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.
     * Bulk Create Properties
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkCreateProperties(tenantId: string, body: ProductConfiguratorBulkCreatePropertiesRequest, _options?: Configuration): Observable<ProductconfiguratorpropertyBulkCreateResponse> {
        return this.productConfiguratorBulkCreatePropertiesWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorpropertyBulkCreateResponse>) => apiResponse.data));
    }

    /**
     * Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.
     * Bulk Update Properties
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkUpdatePropertiesWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkUpdatePropertiesRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorpropertyBulkUpdateResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorBulkUpdateProperties(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorBulkUpdatePropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.
     * Bulk Update Properties
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkUpdateProperties(tenantId: string, body: ProductConfiguratorBulkUpdatePropertiesRequest, _options?: Configuration): Observable<ProductconfiguratorpropertyBulkUpdateResponse> {
        return this.productConfiguratorBulkUpdatePropertiesWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorpropertyBulkUpdateResponse>) => apiResponse.data));
    }

    /**
     * Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.
     * Create Property
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorCreatePropertyWithHttpInfo(tenantId: string, body: ProductConfiguratorCreatePropertyRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorpropertyEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCreateProperty(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCreatePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.
     * Create Property
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorCreateProperty(tenantId: string, body: ProductConfiguratorCreatePropertyRequest, _options?: Configuration): Observable<ProductconfiguratorpropertyEntity> {
        return this.productConfiguratorCreatePropertyWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorpropertyEntity>) => apiResponse.data));
    }

    /**
     * Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.
     * List Properties
     * @param tenantId 
     * @param matrixId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListPropertiesWithHttpInfo(tenantId: string, matrixId: string, pageSize: string, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Observable<HttpInfo<PropertyListPropertiesResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorListProperties(tenantId, matrixId, pageSize, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorListPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.
     * List Properties
     * @param tenantId 
     * @param matrixId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListProperties(tenantId: string, matrixId: string, pageSize: string, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Observable<PropertyListPropertiesResponse> {
        return this.productConfiguratorListPropertiesWithHttpInfo(tenantId, matrixId, pageSize, body, _options).pipe(map((apiResponse: HttpInfo<PropertyListPropertiesResponse>) => apiResponse.data));
    }

    /**
     * Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Property
     * @param tenantId 
     * @param propertyId 
     * @param body 
     */
    public productConfiguratorUpdatePropertyWithHttpInfo(tenantId: string, propertyId: string, body: ProductConfiguratorUpdatePropertyRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorpropertyEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorUpdateProperty(tenantId, propertyId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorUpdatePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Property
     * @param tenantId 
     * @param propertyId 
     * @param body 
     */
    public productConfiguratorUpdateProperty(tenantId: string, propertyId: string, body: ProductConfiguratorUpdatePropertyRequest, _options?: Configuration): Observable<ProductconfiguratorpropertyEntity> {
        return this.productConfiguratorUpdatePropertyWithHttpInfo(tenantId, propertyId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorpropertyEntity>) => apiResponse.data));
    }

}

import { StepApiRequestFactory, StepApiResponseProcessor} from "../apis/StepApi";
export class ObservableStepApi {
    private requestFactory: StepApiRequestFactory;
    private responseProcessor: StepApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StepApiRequestFactory,
        responseProcessor?: StepApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StepApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StepApiResponseProcessor();
    }

    /**
     * Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.
     * Bulk Create Steps
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorBulkCreateStepsWithHttpInfo(tenantId: string, configuratorId: string, body: ProductConfiguratorBulkCreateStepsRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorstepBulkCreateResponse>> {
        const requestContextPromise = this.requestFactory.productConfiguratorBulkCreateSteps(tenantId, configuratorId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorBulkCreateStepsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.
     * Bulk Create Steps
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorBulkCreateSteps(tenantId: string, configuratorId: string, body: ProductConfiguratorBulkCreateStepsRequest, _options?: Configuration): Observable<ProductconfiguratorstepBulkCreateResponse> {
        return this.productConfiguratorBulkCreateStepsWithHttpInfo(tenantId, configuratorId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorstepBulkCreateResponse>) => apiResponse.data));
    }

    /**
     * Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.
     * Bulk Delete Steps
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkDeleteStepsWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkDeleteStepsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productConfiguratorBulkDeleteSteps(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorBulkDeleteStepsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.
     * Bulk Delete Steps
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkDeleteSteps(tenantId: string, body: ProductConfiguratorBulkDeleteStepsRequest, _options?: Configuration): Observable<any> {
        return this.productConfiguratorBulkDeleteStepsWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.
     * Copy Step
     * @param tenantId 
     * @param sourceStepId 
     * @param body 
     */
    public productConfiguratorCopyStepWithHttpInfo(tenantId: string, sourceStepId: string, body: ProductConfiguratorCopyStepRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorstepEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCopyStep(tenantId, sourceStepId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCopyStepWithHttpInfo(rsp)));
            }));
    }

    /**
     * Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.
     * Copy Step
     * @param tenantId 
     * @param sourceStepId 
     * @param body 
     */
    public productConfiguratorCopyStep(tenantId: string, sourceStepId: string, body: ProductConfiguratorCopyStepRequest, _options?: Configuration): Observable<ProductconfiguratorstepEntity> {
        return this.productConfiguratorCopyStepWithHttpInfo(tenantId, sourceStepId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorstepEntity>) => apiResponse.data));
    }

    /**
     * Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.
     * Create Step
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorCreateStepWithHttpInfo(tenantId: string, configuratorId: string, body: ProductConfiguratorCreateStepRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorstepEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorCreateStep(tenantId, configuratorId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorCreateStepWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.
     * Create Step
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorCreateStep(tenantId: string, configuratorId: string, body: ProductConfiguratorCreateStepRequest, _options?: Configuration): Observable<ProductconfiguratorstepEntity> {
        return this.productConfiguratorCreateStepWithHttpInfo(tenantId, configuratorId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorstepEntity>) => apiResponse.data));
    }

    /**
     * Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.
     * Delete Step
     * @param tenantId 
     * @param stepId 
     */
    public productConfiguratorDeleteStepWithHttpInfo(tenantId: string, stepId: string, _options?: Configuration): Observable<HttpInfo<GooglerpcStatus>> {
        const requestContextPromise = this.requestFactory.productConfiguratorDeleteStep(tenantId, stepId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorDeleteStepWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.
     * Delete Step
     * @param tenantId 
     * @param stepId 
     */
    public productConfiguratorDeleteStep(tenantId: string, stepId: string, _options?: Configuration): Observable<GooglerpcStatus> {
        return this.productConfiguratorDeleteStepWithHttpInfo(tenantId, stepId, _options).pipe(map((apiResponse: HttpInfo<GooglerpcStatus>) => apiResponse.data));
    }

    /**
     * Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Step
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorUpdateStepWithHttpInfo(tenantId: string, stepId: string, body: ProductConfiguratorUpdateStepRequest, _options?: Configuration): Observable<HttpInfo<ProductconfiguratorstepEntity>> {
        const requestContextPromise = this.requestFactory.productConfiguratorUpdateStep(tenantId, stepId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productConfiguratorUpdateStepWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Step
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorUpdateStep(tenantId: string, stepId: string, body: ProductConfiguratorUpdateStepRequest, _options?: Configuration): Observable<ProductconfiguratorstepEntity> {
        return this.productConfiguratorUpdateStepWithHttpInfo(tenantId, stepId, body, _options).pipe(map((apiResponse: HttpInfo<ProductconfiguratorstepEntity>) => apiResponse.data));
    }

}

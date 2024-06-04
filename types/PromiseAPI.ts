import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { ObservableConfigurationApi } from './ObservableAPI';

import { ConfigurationApiRequestFactory, ConfigurationApiResponseProcessor} from "../apis/ConfigurationApi";
export class PromiseConfigurationApi {
    private api: ObservableConfigurationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigurationApiRequestFactory,
        responseProcessor?: ConfigurationApiResponseProcessor
    ) {
        this.api = new ObservableConfigurationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param configuratorId If not set, the service returns the active configurator
     */
    public productConfiguratorGetAvailableConfigurationWithHttpInfo(tenantId: string, productId: string, configuratorId?: string, _options?: Configuration): Promise<HttpInfo<ConfigurationGetAvailableConfigurationResponse>> {
        const result = this.api.productConfiguratorGetAvailableConfigurationWithHttpInfo(tenantId, productId, configuratorId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param configuratorId If not set, the service returns the active configurator
     */
    public productConfiguratorGetAvailableConfiguration(tenantId: string, productId: string, configuratorId?: string, _options?: Configuration): Promise<ConfigurationGetAvailableConfigurationResponse> {
        const result = this.api.productConfiguratorGetAvailableConfiguration(tenantId, productId, configuratorId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorGetAvailableConfiguration2WithHttpInfo(tenantId: string, productId: string, body: ProductConfiguratorGetAvailableConfiguration2Request, _options?: Configuration): Promise<HttpInfo<ConfigurationGetAvailableConfigurationResponse>> {
        const result = this.api.productConfiguratorGetAvailableConfiguration2WithHttpInfo(tenantId, productId, body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorGetAvailableConfiguration2(tenantId: string, productId: string, body: ProductConfiguratorGetAvailableConfiguration2Request, _options?: Configuration): Promise<ConfigurationGetAvailableConfigurationResponse> {
        const result = this.api.productConfiguratorGetAvailableConfiguration2(tenantId, productId, body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorGetConfigurationFromSelectionsWithHttpInfo(tenantId: string, productId: string, body: ProductConfiguratorGetConfigurationFromSelectionsRequest, _options?: Configuration): Promise<HttpInfo<ConfigurationGetConfigurationFromSelectionsResponse>> {
        const result = this.api.productConfiguratorGetConfigurationFromSelectionsWithHttpInfo(tenantId, productId, body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorGetConfigurationFromSelections(tenantId: string, productId: string, body: ProductConfiguratorGetConfigurationFromSelectionsRequest, _options?: Configuration): Promise<ConfigurationGetConfigurationFromSelectionsResponse> {
        const result = this.api.productConfiguratorGetConfigurationFromSelections(tenantId, productId, body, _options);
        return result.toPromise();
    }


}



import { ObservableConfiguratorApi } from './ObservableAPI';

import { ConfiguratorApiRequestFactory, ConfiguratorApiResponseProcessor} from "../apis/ConfiguratorApi";
export class PromiseConfiguratorApi {
    private api: ObservableConfiguratorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfiguratorApiRequestFactory,
        responseProcessor?: ConfiguratorApiResponseProcessor
    ) {
        this.api = new ObservableConfiguratorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Duplicate an existing product configurator from the source to the specified tenant and product. Submit an empty body to initiate the copy process, creating a new configuration based on the source.
     * Copy Configurator
     * @param tenantId 
     * @param sourceConfiguratorId 
     * @param body 
     */
    public productConfiguratorCopyConfiguratorWithHttpInfo(tenantId: string, sourceConfiguratorId: string, body: ProductConfiguratorCopyConfiguratorRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const result = this.api.productConfiguratorCopyConfiguratorWithHttpInfo(tenantId, sourceConfiguratorId, body, _options);
        return result.toPromise();
    }

    /**
     * Duplicate an existing product configurator from the source to the specified tenant and product. Submit an empty body to initiate the copy process, creating a new configuration based on the source.
     * Copy Configurator
     * @param tenantId 
     * @param sourceConfiguratorId 
     * @param body 
     */
    public productConfiguratorCopyConfigurator(tenantId: string, sourceConfiguratorId: string, body: ProductConfiguratorCopyConfiguratorRequest, _options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        const result = this.api.productConfiguratorCopyConfigurator(tenantId, sourceConfiguratorId, body, _options);
        return result.toPromise();
    }

    /**
     * Create a new product configurator for a specified tenant and product. Submit the desired configuration details in the request body to initiate the creation process.
     * Create Configurator
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorCreateConfiguratorWithHttpInfo(tenantId: string, productId: string, body: ProductConfiguratorCreateConfiguratorRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const result = this.api.productConfiguratorCreateConfiguratorWithHttpInfo(tenantId, productId, body, _options);
        return result.toPromise();
    }

    /**
     * Create a new product configurator for a specified tenant and product. Submit the desired configuration details in the request body to initiate the creation process.
     * Create Configurator
     * @param tenantId 
     * @param productId 
     * @param body 
     */
    public productConfiguratorCreateConfigurator(tenantId: string, productId: string, body: ProductConfiguratorCreateConfiguratorRequest, _options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        const result = this.api.productConfiguratorCreateConfigurator(tenantId, productId, body, _options);
        return result.toPromise();
    }

    /**
     * Delete a product configurator by specifying the tenant and configurator IDs. Ensure precise removal of unwanted configurations with a straightforward DELETE request.
     * Delete Configurator
     * @param tenantId 
     * @param configuratorId 
     */
    public productConfiguratorDeleteConfiguratorWithHttpInfo(tenantId: string, configuratorId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productConfiguratorDeleteConfiguratorWithHttpInfo(tenantId, configuratorId, _options);
        return result.toPromise();
    }

    /**
     * Delete a product configurator by specifying the tenant and configurator IDs. Ensure precise removal of unwanted configurations with a straightforward DELETE request.
     * Delete Configurator
     * @param tenantId 
     * @param configuratorId 
     */
    public productConfiguratorDeleteConfigurator(tenantId: string, configuratorId: string, _options?: Configuration): Promise<any> {
        const result = this.api.productConfiguratorDeleteConfigurator(tenantId, configuratorId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param tenantId 
     * @param productId 
     * @param status 
     */
    public productConfiguratorGetConfiguratorByProductIdWithHttpInfo(tenantId: string, productId: string, status?: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED', _options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const result = this.api.productConfiguratorGetConfiguratorByProductIdWithHttpInfo(tenantId, productId, status, _options);
        return result.toPromise();
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param tenantId 
     * @param productId 
     * @param status 
     */
    public productConfiguratorGetConfiguratorByProductId(tenantId: string, productId: string, status?: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED', _options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        const result = this.api.productConfiguratorGetConfiguratorByProductId(tenantId, productId, status, _options);
        return result.toPromise();
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param tenantId 
     * @param productId 
     * @param status 
     */
    public productConfiguratorGetConfiguratorByProductId2WithHttpInfo(tenantId: string, productId: string, status: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED', _options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const result = this.api.productConfiguratorGetConfiguratorByProductId2WithHttpInfo(tenantId, productId, status, _options);
        return result.toPromise();
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param tenantId 
     * @param productId 
     * @param status 
     */
    public productConfiguratorGetConfiguratorByProductId2(tenantId: string, productId: string, status: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED', _options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        const result = this.api.productConfiguratorGetConfiguratorByProductId2(tenantId, productId, status, _options);
        return result.toPromise();
    }

    /**
     * List all product configurators.
     * List Product Configurators
     * @param tenantId 
     * @param productId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListConfiguratorsWithHttpInfo(tenantId: string, productId: string, pageSize: number, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Promise<HttpInfo<ConfiguratorListResponse>> {
        const result = this.api.productConfiguratorListConfiguratorsWithHttpInfo(tenantId, productId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * List all product configurators.
     * List Product Configurators
     * @param tenantId 
     * @param productId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListConfigurators(tenantId: string, productId: string, pageSize: number, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Promise<ConfiguratorListResponse> {
        const result = this.api.productConfiguratorListConfigurators(tenantId, productId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing product configurator by specifying the tenant and configurator IDs. Use a PUT request with the updated configuration details in the body to seamlessly update and manage product configurations
     * Update Configurator
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorUpdateConfiguratorWithHttpInfo(tenantId: string, configuratorId: string, body: ProductConfiguratorUpdateConfiguratorRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        const result = this.api.productConfiguratorUpdateConfiguratorWithHttpInfo(tenantId, configuratorId, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing product configurator by specifying the tenant and configurator IDs. Use a PUT request with the updated configuration details in the body to seamlessly update and manage product configurations
     * Update Configurator
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorUpdateConfigurator(tenantId: string, configuratorId: string, body: ProductConfiguratorUpdateConfiguratorRequest, _options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        const result = this.api.productConfiguratorUpdateConfigurator(tenantId, configuratorId, body, _options);
        return result.toPromise();
    }


}



import { ObservableDependencyApi } from './ObservableAPI';

import { DependencyApiRequestFactory, DependencyApiResponseProcessor} from "../apis/DependencyApi";
export class PromiseDependencyApi {
    private api: ObservableDependencyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DependencyApiRequestFactory,
        responseProcessor?: DependencyApiResponseProcessor
    ) {
        this.api = new ObservableDependencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Establish a new dependency for an existing step by specifying the tenant and step IDs. Utilize a POST request with the required dependency details in the body to seamlessly enhance the configuration logic of your product.
     * Create Dependency
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorCreateDependencyWithHttpInfo(tenantId: string, stepId: string, body: ProductConfiguratorCreateDependencyRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratordependencyEntity>> {
        const result = this.api.productConfiguratorCreateDependencyWithHttpInfo(tenantId, stepId, body, _options);
        return result.toPromise();
    }

    /**
     * Establish a new dependency for an existing step by specifying the tenant and step IDs. Utilize a POST request with the required dependency details in the body to seamlessly enhance the configuration logic of your product.
     * Create Dependency
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorCreateDependency(tenantId: string, stepId: string, body: ProductConfiguratorCreateDependencyRequest, _options?: Configuration): Promise<ProductconfiguratordependencyEntity> {
        const result = this.api.productConfiguratorCreateDependency(tenantId, stepId, body, _options);
        return result.toPromise();
    }

    /**
     * Remove a specific dependency by specifying the tenant and dependency IDs. Ensure precision in dependency management with a straightforward DELETE request, simplifying the elimination of unwanted configuration logic.
     * Delete Dependency
     * @param tenantId 
     * @param dependencyId 
     */
    public productConfiguratorDeleteDependencyWithHttpInfo(tenantId: string, dependencyId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productConfiguratorDeleteDependencyWithHttpInfo(tenantId, dependencyId, _options);
        return result.toPromise();
    }

    /**
     * Remove a specific dependency by specifying the tenant and dependency IDs. Ensure precision in dependency management with a straightforward DELETE request, simplifying the elimination of unwanted configuration logic.
     * Delete Dependency
     * @param tenantId 
     * @param dependencyId 
     */
    public productConfiguratorDeleteDependency(tenantId: string, dependencyId: string, _options?: Configuration): Promise<any> {
        const result = this.api.productConfiguratorDeleteDependency(tenantId, dependencyId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of dependencies based on the specified tenant ID. Customize results by specifying page size for efficient pagination. Submit an empty body to get all dependencies associated with the configurations.
     * List Dependencies
     * @param tenantId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListDependenciesWithHttpInfo(tenantId: string, pageSize: number, body: ProductConfiguratorListDependenciesRequest, _options?: Configuration): Promise<HttpInfo<DependencyListDependenciesResponse>> {
        const result = this.api.productConfiguratorListDependenciesWithHttpInfo(tenantId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of dependencies based on the specified tenant ID. Customize results by specifying page size for efficient pagination. Submit an empty body to get all dependencies associated with the configurations.
     * List Dependencies
     * @param tenantId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListDependencies(tenantId: string, pageSize: number, body: ProductConfiguratorListDependenciesRequest, _options?: Configuration): Promise<DependencyListDependenciesResponse> {
        const result = this.api.productConfiguratorListDependencies(tenantId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing dependency by specifying the tenant and dependency IDs. Utilize a PUT request with updated dependency details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Dependency
     * @param tenantId 
     * @param dependencyId 
     * @param body 
     */
    public productConfiguratorUpdateDependencyWithHttpInfo(tenantId: string, dependencyId: string, body: ProductConfiguratorUpdateDependencyRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratordependencyEntity>> {
        const result = this.api.productConfiguratorUpdateDependencyWithHttpInfo(tenantId, dependencyId, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing dependency by specifying the tenant and dependency IDs. Utilize a PUT request with updated dependency details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Dependency
     * @param tenantId 
     * @param dependencyId 
     * @param body 
     */
    public productConfiguratorUpdateDependency(tenantId: string, dependencyId: string, body: ProductConfiguratorUpdateDependencyRequest, _options?: Configuration): Promise<ProductconfiguratordependencyEntity> {
        const result = this.api.productConfiguratorUpdateDependency(tenantId, dependencyId, body, _options);
        return result.toPromise();
    }


}



import { ObservableMatrixApi } from './ObservableAPI';

import { MatrixApiRequestFactory, MatrixApiResponseProcessor} from "../apis/MatrixApi";
export class PromiseMatrixApi {
    private api: ObservableMatrixApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MatrixApiRequestFactory,
        responseProcessor?: MatrixApiResponseProcessor
    ) {
        this.api = new ObservableMatrixApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.
     * Create Matrix
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorCreateMatrixWithHttpInfo(tenantId: string, body: ProductConfiguratorCreateMatrixRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratormatrixEntity>> {
        const result = this.api.productConfiguratorCreateMatrixWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.
     * Create Matrix
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorCreateMatrix(tenantId: string, body: ProductConfiguratorCreateMatrixRequest, _options?: Configuration): Promise<ProductconfiguratormatrixEntity> {
        const result = this.api.productConfiguratorCreateMatrix(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.
     * Delete Matrix
     * @param tenantId 
     * @param matrixId 
     */
    public productConfiguratorDeleteMatrixWithHttpInfo(tenantId: string, matrixId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productConfiguratorDeleteMatrixWithHttpInfo(tenantId, matrixId, _options);
        return result.toPromise();
    }

    /**
     * Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.
     * Delete Matrix
     * @param tenantId 
     * @param matrixId 
     */
    public productConfiguratorDeleteMatrix(tenantId: string, matrixId: string, _options?: Configuration): Promise<any> {
        const result = this.api.productConfiguratorDeleteMatrix(tenantId, matrixId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.
     * Get Matrix
     * @param tenantId 
     * @param matrixId 
     */
    public productConfiguratorGetMatrixWithHttpInfo(tenantId: string, matrixId: string, _options?: Configuration): Promise<HttpInfo<ProductconfiguratormatrixEntity>> {
        const result = this.api.productConfiguratorGetMatrixWithHttpInfo(tenantId, matrixId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.
     * Get Matrix
     * @param tenantId 
     * @param matrixId 
     */
    public productConfiguratorGetMatrix(tenantId: string, matrixId: string, _options?: Configuration): Promise<ProductconfiguratormatrixEntity> {
        const result = this.api.productConfiguratorGetMatrix(tenantId, matrixId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.
     * List Matrices
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListMatricesWithHttpInfo(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListMatricesRequest, _options?: Configuration): Promise<HttpInfo<MatrixListMatricesResponse>> {
        const result = this.api.productConfiguratorListMatricesWithHttpInfo(tenantId, configuratorId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.
     * List Matrices
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListMatrices(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListMatricesRequest, _options?: Configuration): Promise<MatrixListMatricesResponse> {
        const result = this.api.productConfiguratorListMatrices(tenantId, configuratorId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.
     * Remove Pricelist from Matrix
     * @param tenantId 
     * @param matrixId 
     * @param pricelistGrn 
     */
    public productConfiguratorRemovePricelistFromMatrixWithHttpInfo(tenantId: string, matrixId: string, pricelistGrn: string, _options?: Configuration): Promise<HttpInfo<ProductconfiguratormatrixEntity>> {
        const result = this.api.productConfiguratorRemovePricelistFromMatrixWithHttpInfo(tenantId, matrixId, pricelistGrn, _options);
        return result.toPromise();
    }

    /**
     * Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.
     * Remove Pricelist from Matrix
     * @param tenantId 
     * @param matrixId 
     * @param pricelistGrn 
     */
    public productConfiguratorRemovePricelistFromMatrix(tenantId: string, matrixId: string, pricelistGrn: string, _options?: Configuration): Promise<ProductconfiguratormatrixEntity> {
        const result = this.api.productConfiguratorRemovePricelistFromMatrix(tenantId, matrixId, pricelistGrn, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.
     * Update Matrix
     * @param tenantId 
     * @param matrixId 
     * @param body 
     */
    public productConfiguratorUpdateMatrixWithHttpInfo(tenantId: string, matrixId: string, body: ProductConfiguratorUpdateMatrixRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratormatrixEntity>> {
        const result = this.api.productConfiguratorUpdateMatrixWithHttpInfo(tenantId, matrixId, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.
     * Update Matrix
     * @param tenantId 
     * @param matrixId 
     * @param body 
     */
    public productConfiguratorUpdateMatrix(tenantId: string, matrixId: string, body: ProductConfiguratorUpdateMatrixRequest, _options?: Configuration): Promise<ProductconfiguratormatrixEntity> {
        const result = this.api.productConfiguratorUpdateMatrix(tenantId, matrixId, body, _options);
        return result.toPromise();
    }


}



import { ObservableOptionApi } from './ObservableAPI';

import { OptionApiRequestFactory, OptionApiResponseProcessor} from "../apis/OptionApi";
export class PromiseOptionApi {
    private api: ObservableOptionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OptionApiRequestFactory,
        responseProcessor?: OptionApiResponseProcessor
    ) {
        this.api = new ObservableOptionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add multiple options to an existing step simultaneously. Submit a POST request with the necessary option details in the body to efficiently expand the configuration possibilities in bulk. Streamline large-scale option management effortlessly.
     * Bulk Create Options
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorBulkCreateOptionsWithHttpInfo(tenantId: string, stepId: string, body: ProductConfiguratorBulkCreateOptionsRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionBulkCreateResponse>> {
        const result = this.api.productConfiguratorBulkCreateOptionsWithHttpInfo(tenantId, stepId, body, _options);
        return result.toPromise();
    }

    /**
     * Add multiple options to an existing step simultaneously. Submit a POST request with the necessary option details in the body to efficiently expand the configuration possibilities in bulk. Streamline large-scale option management effortlessly.
     * Bulk Create Options
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorBulkCreateOptions(tenantId: string, stepId: string, body: ProductConfiguratorBulkCreateOptionsRequest, _options?: Configuration): Promise<ProductconfiguratoroptionBulkCreateResponse> {
        const result = this.api.productConfiguratorBulkCreateOptions(tenantId, stepId, body, _options);
        return result.toPromise();
    }

    /**
     * Efficiently remove multiple options from configurations using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of option IDs in the body for streamlined option management.
     * Bulk Delete Options
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkDeleteOptionsWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkDeleteOptionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productConfiguratorBulkDeleteOptionsWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Efficiently remove multiple options from configurations using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of option IDs in the body for streamlined option management.
     * Bulk Delete Options
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkDeleteOptions(tenantId: string, body: ProductConfiguratorBulkDeleteOptionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.productConfiguratorBulkDeleteOptions(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Effortlessly update multiple options. Specify the tenant ID and submit a PUT request with the updated option details in the body. Streamline the customization of a multitude of options in one go.
     * Bulk Update Options
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkUpdateOptionsWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkUpdateOptionsRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionBulkUpdateResponse>> {
        const result = this.api.productConfiguratorBulkUpdateOptionsWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Effortlessly update multiple options. Specify the tenant ID and submit a PUT request with the updated option details in the body. Streamline the customization of a multitude of options in one go.
     * Bulk Update Options
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkUpdateOptions(tenantId: string, body: ProductConfiguratorBulkUpdateOptionsRequest, _options?: Configuration): Promise<ProductconfiguratoroptionBulkUpdateResponse> {
        const result = this.api.productConfiguratorBulkUpdateOptions(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Duplicate an existing option from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new option based on the source configuration. Streamline option replication effortlessly.
     * Copy Option
     * @param tenantId 
     * @param sourceOptionId 
     * @param body 
     */
    public productConfiguratorCopyOptionWithHttpInfo(tenantId: string, sourceOptionId: string, body: ProductConfiguratorCopyOptionRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionEntity>> {
        const result = this.api.productConfiguratorCopyOptionWithHttpInfo(tenantId, sourceOptionId, body, _options);
        return result.toPromise();
    }

    /**
     * Duplicate an existing option from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new option based on the source configuration. Streamline option replication effortlessly.
     * Copy Option
     * @param tenantId 
     * @param sourceOptionId 
     * @param body 
     */
    public productConfiguratorCopyOption(tenantId: string, sourceOptionId: string, body: ProductConfiguratorCopyOptionRequest, _options?: Configuration): Promise<ProductconfiguratoroptionEntity> {
        const result = this.api.productConfiguratorCopyOption(tenantId, sourceOptionId, body, _options);
        return result.toPromise();
    }

    /**
     * Integrate a new option into an existing step by specifying the tenant and step IDs. Use a POST request with the required option details in the body for seamless customization and expansion of product configurations.
     * Create Option
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorCreateOptionWithHttpInfo(tenantId: string, stepId: string, body: ProductConfiguratorCreateOptionRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionEntity>> {
        const result = this.api.productConfiguratorCreateOptionWithHttpInfo(tenantId, stepId, body, _options);
        return result.toPromise();
    }

    /**
     * Integrate a new option into an existing step by specifying the tenant and step IDs. Use a POST request with the required option details in the body for seamless customization and expansion of product configurations.
     * Create Option
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorCreateOption(tenantId: string, stepId: string, body: ProductConfiguratorCreateOptionRequest, _options?: Configuration): Promise<ProductconfiguratoroptionEntity> {
        const result = this.api.productConfiguratorCreateOption(tenantId, stepId, body, _options);
        return result.toPromise();
    }

    /**
     * Remove a specific option by specifying the tenant and option IDs. Ensure precision in option management with a straightforward DELETE request, simplifying the elimination of unwanted configuration choices.
     * Delete Option
     * @param tenantId 
     * @param optionId 
     */
    public productConfiguratorDeleteOptionWithHttpInfo(tenantId: string, optionId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productConfiguratorDeleteOptionWithHttpInfo(tenantId, optionId, _options);
        return result.toPromise();
    }

    /**
     * Remove a specific option by specifying the tenant and option IDs. Ensure precision in option management with a straightforward DELETE request, simplifying the elimination of unwanted configuration choices.
     * Delete Option
     * @param tenantId 
     * @param optionId 
     */
    public productConfiguratorDeleteOption(tenantId: string, optionId: string, _options?: Configuration): Promise<any> {
        const result = this.api.productConfiguratorDeleteOption(tenantId, optionId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of options for a specific step based on tenant and step IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all options associated with the step.
     * List Options
     * @param tenantId 
     * @param stepId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListOptionsWithHttpInfo(tenantId: string, stepId: string, pageSize: number, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Promise<HttpInfo<OptionListOptionsResponse>> {
        const result = this.api.productConfiguratorListOptionsWithHttpInfo(tenantId, stepId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of options for a specific step based on tenant and step IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all options associated with the step.
     * List Options
     * @param tenantId 
     * @param stepId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListOptions(tenantId: string, stepId: string, pageSize: number, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Promise<OptionListOptionsResponse> {
        const result = this.api.productConfiguratorListOptions(tenantId, stepId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing option by specifying the tenant and option IDs. Utilize a PUT request with updated option details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Option
     * @param tenantId 
     * @param optionId 
     * @param body 
     */
    public productConfiguratorUpdateOptionWithHttpInfo(tenantId: string, optionId: string, body: ProductConfiguratorUpdateOptionRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionEntity>> {
        const result = this.api.productConfiguratorUpdateOptionWithHttpInfo(tenantId, optionId, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing option by specifying the tenant and option IDs. Utilize a PUT request with updated option details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Option
     * @param tenantId 
     * @param optionId 
     * @param body 
     */
    public productConfiguratorUpdateOption(tenantId: string, optionId: string, body: ProductConfiguratorUpdateOptionRequest, _options?: Configuration): Promise<ProductconfiguratoroptionEntity> {
        const result = this.api.productConfiguratorUpdateOption(tenantId, optionId, body, _options);
        return result.toPromise();
    }


}



import { ObservableProductConfiguratorApi } from './ObservableAPI';

import { ProductConfiguratorApiRequestFactory, ProductConfiguratorApiResponseProcessor} from "../apis/ProductConfiguratorApi";
export class PromiseProductConfiguratorApi {
    private api: ObservableProductConfiguratorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductConfiguratorApiRequestFactory,
        responseProcessor?: ProductConfiguratorApiResponseProcessor
    ) {
        this.api = new ObservableProductConfiguratorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param tenantId 
     * @param propertyId 
     */
    public productConfiguratorGetPropertyWithHttpInfo(tenantId: string, propertyId: string, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyEntity>> {
        const result = this.api.productConfiguratorGetPropertyWithHttpInfo(tenantId, propertyId, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param propertyId 
     */
    public productConfiguratorGetProperty(tenantId: string, propertyId: string, _options?: Configuration): Promise<ProductconfiguratorpropertyEntity> {
        const result = this.api.productConfiguratorGetProperty(tenantId, propertyId, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListPropertiesByConfigurationWithHttpInfo(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListPropertiesByConfigurationRequest, _options?: Configuration): Promise<HttpInfo<PropertyListPropertiesByConfigurationResponse>> {
        const result = this.api.productConfiguratorListPropertiesByConfigurationWithHttpInfo(tenantId, configuratorId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param configuratorId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListPropertiesByConfiguration(tenantId: string, configuratorId: string, pageSize: string, body: ProductConfiguratorListPropertiesByConfigurationRequest, _options?: Configuration): Promise<PropertyListPropertiesByConfigurationResponse> {
        const result = this.api.productConfiguratorListPropertiesByConfiguration(tenantId, configuratorId, pageSize, body, _options);
        return result.toPromise();
    }


}



import { ObservablePropertyApi } from './ObservableAPI';

import { PropertyApiRequestFactory, PropertyApiResponseProcessor} from "../apis/PropertyApi";
export class PromisePropertyApi {
    private api: ObservablePropertyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PropertyApiRequestFactory,
        responseProcessor?: PropertyApiResponseProcessor
    ) {
        this.api = new ObservablePropertyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.
     * Bulk Create Properties
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkCreatePropertiesWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkCreatePropertiesRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyBulkCreateResponse>> {
        const result = this.api.productConfiguratorBulkCreatePropertiesWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.
     * Bulk Create Properties
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkCreateProperties(tenantId: string, body: ProductConfiguratorBulkCreatePropertiesRequest, _options?: Configuration): Promise<ProductconfiguratorpropertyBulkCreateResponse> {
        const result = this.api.productConfiguratorBulkCreateProperties(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.
     * Bulk Update Properties
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkUpdatePropertiesWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkUpdatePropertiesRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyBulkUpdateResponse>> {
        const result = this.api.productConfiguratorBulkUpdatePropertiesWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.
     * Bulk Update Properties
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkUpdateProperties(tenantId: string, body: ProductConfiguratorBulkUpdatePropertiesRequest, _options?: Configuration): Promise<ProductconfiguratorpropertyBulkUpdateResponse> {
        const result = this.api.productConfiguratorBulkUpdateProperties(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.
     * Create Property
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorCreatePropertyWithHttpInfo(tenantId: string, body: ProductConfiguratorCreatePropertyRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyEntity>> {
        const result = this.api.productConfiguratorCreatePropertyWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.
     * Create Property
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorCreateProperty(tenantId: string, body: ProductConfiguratorCreatePropertyRequest, _options?: Configuration): Promise<ProductconfiguratorpropertyEntity> {
        const result = this.api.productConfiguratorCreateProperty(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.
     * List Properties
     * @param tenantId 
     * @param matrixId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListPropertiesWithHttpInfo(tenantId: string, matrixId: string, pageSize: string, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Promise<HttpInfo<PropertyListPropertiesResponse>> {
        const result = this.api.productConfiguratorListPropertiesWithHttpInfo(tenantId, matrixId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.
     * List Properties
     * @param tenantId 
     * @param matrixId 
     * @param pageSize 
     * @param body 
     */
    public productConfiguratorListProperties(tenantId: string, matrixId: string, pageSize: string, body: ProductConfiguratorListPropertiesRequest, _options?: Configuration): Promise<PropertyListPropertiesResponse> {
        const result = this.api.productConfiguratorListProperties(tenantId, matrixId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Property
     * @param tenantId 
     * @param propertyId 
     * @param body 
     */
    public productConfiguratorUpdatePropertyWithHttpInfo(tenantId: string, propertyId: string, body: ProductConfiguratorUpdatePropertyRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyEntity>> {
        const result = this.api.productConfiguratorUpdatePropertyWithHttpInfo(tenantId, propertyId, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Property
     * @param tenantId 
     * @param propertyId 
     * @param body 
     */
    public productConfiguratorUpdateProperty(tenantId: string, propertyId: string, body: ProductConfiguratorUpdatePropertyRequest, _options?: Configuration): Promise<ProductconfiguratorpropertyEntity> {
        const result = this.api.productConfiguratorUpdateProperty(tenantId, propertyId, body, _options);
        return result.toPromise();
    }


}



import { ObservableStepApi } from './ObservableAPI';

import { StepApiRequestFactory, StepApiResponseProcessor} from "../apis/StepApi";
export class PromiseStepApi {
    private api: ObservableStepApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StepApiRequestFactory,
        responseProcessor?: StepApiResponseProcessor
    ) {
        this.api = new ObservableStepApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.
     * Bulk Create Steps
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorBulkCreateStepsWithHttpInfo(tenantId: string, configuratorId: string, body: ProductConfiguratorBulkCreateStepsRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorstepBulkCreateResponse>> {
        const result = this.api.productConfiguratorBulkCreateStepsWithHttpInfo(tenantId, configuratorId, body, _options);
        return result.toPromise();
    }

    /**
     * Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.
     * Bulk Create Steps
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorBulkCreateSteps(tenantId: string, configuratorId: string, body: ProductConfiguratorBulkCreateStepsRequest, _options?: Configuration): Promise<ProductconfiguratorstepBulkCreateResponse> {
        const result = this.api.productConfiguratorBulkCreateSteps(tenantId, configuratorId, body, _options);
        return result.toPromise();
    }

    /**
     * Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.
     * Bulk Delete Steps
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkDeleteStepsWithHttpInfo(tenantId: string, body: ProductConfiguratorBulkDeleteStepsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productConfiguratorBulkDeleteStepsWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.
     * Bulk Delete Steps
     * @param tenantId 
     * @param body 
     */
    public productConfiguratorBulkDeleteSteps(tenantId: string, body: ProductConfiguratorBulkDeleteStepsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.productConfiguratorBulkDeleteSteps(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.
     * Copy Step
     * @param tenantId 
     * @param sourceStepId 
     * @param body 
     */
    public productConfiguratorCopyStepWithHttpInfo(tenantId: string, sourceStepId: string, body: ProductConfiguratorCopyStepRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorstepEntity>> {
        const result = this.api.productConfiguratorCopyStepWithHttpInfo(tenantId, sourceStepId, body, _options);
        return result.toPromise();
    }

    /**
     * Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.
     * Copy Step
     * @param tenantId 
     * @param sourceStepId 
     * @param body 
     */
    public productConfiguratorCopyStep(tenantId: string, sourceStepId: string, body: ProductConfiguratorCopyStepRequest, _options?: Configuration): Promise<ProductconfiguratorstepEntity> {
        const result = this.api.productConfiguratorCopyStep(tenantId, sourceStepId, body, _options);
        return result.toPromise();
    }

    /**
     * Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.
     * Create Step
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorCreateStepWithHttpInfo(tenantId: string, configuratorId: string, body: ProductConfiguratorCreateStepRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorstepEntity>> {
        const result = this.api.productConfiguratorCreateStepWithHttpInfo(tenantId, configuratorId, body, _options);
        return result.toPromise();
    }

    /**
     * Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.
     * Create Step
     * @param tenantId 
     * @param configuratorId 
     * @param body 
     */
    public productConfiguratorCreateStep(tenantId: string, configuratorId: string, body: ProductConfiguratorCreateStepRequest, _options?: Configuration): Promise<ProductconfiguratorstepEntity> {
        const result = this.api.productConfiguratorCreateStep(tenantId, configuratorId, body, _options);
        return result.toPromise();
    }

    /**
     * Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.
     * Delete Step
     * @param tenantId 
     * @param stepId 
     */
    public productConfiguratorDeleteStepWithHttpInfo(tenantId: string, stepId: string, _options?: Configuration): Promise<HttpInfo<GooglerpcStatus>> {
        const result = this.api.productConfiguratorDeleteStepWithHttpInfo(tenantId, stepId, _options);
        return result.toPromise();
    }

    /**
     * Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.
     * Delete Step
     * @param tenantId 
     * @param stepId 
     */
    public productConfiguratorDeleteStep(tenantId: string, stepId: string, _options?: Configuration): Promise<GooglerpcStatus> {
        const result = this.api.productConfiguratorDeleteStep(tenantId, stepId, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Step
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorUpdateStepWithHttpInfo(tenantId: string, stepId: string, body: ProductConfiguratorUpdateStepRequest, _options?: Configuration): Promise<HttpInfo<ProductconfiguratorstepEntity>> {
        const result = this.api.productConfiguratorUpdateStepWithHttpInfo(tenantId, stepId, body, _options);
        return result.toPromise();
    }

    /**
     * Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Step
     * @param tenantId 
     * @param stepId 
     * @param body 
     */
    public productConfiguratorUpdateStep(tenantId: string, stepId: string, body: ProductConfiguratorUpdateStepRequest, _options?: Configuration): Promise<ProductconfiguratorstepEntity> {
        const result = this.api.productConfiguratorUpdateStep(tenantId, stepId, body, _options);
        return result.toPromise();
    }


}




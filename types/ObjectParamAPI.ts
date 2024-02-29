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

import { ObservableConfigurationApi } from "./ObservableAPI";
import { ConfigurationApiRequestFactory, ConfigurationApiResponseProcessor} from "../apis/ConfigurationApi";

export interface ConfigurationApiProductConfiguratorGetAvailableConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ConfigurationApiproductConfiguratorGetAvailableConfiguration
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfigurationApiproductConfiguratorGetAvailableConfiguration
     */
    productId: string
    /**
     * If not set, the service returns the active configurator
     * @type string
     * @memberof ConfigurationApiproductConfiguratorGetAvailableConfiguration
     */
    configuratorId?: string
}

export interface ConfigurationApiProductConfiguratorGetAvailableConfiguration2Request {
    /**
     * 
     * @type string
     * @memberof ConfigurationApiproductConfiguratorGetAvailableConfiguration2
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfigurationApiproductConfiguratorGetAvailableConfiguration2
     */
    productId: string
    /**
     * 
     * @type ProductConfiguratorGetAvailableConfiguration2Request
     * @memberof ConfigurationApiproductConfiguratorGetAvailableConfiguration2
     */
    body: ProductConfiguratorGetAvailableConfiguration2Request
}

export interface ConfigurationApiProductConfiguratorGetConfigurationFromSelectionsRequest {
    /**
     * 
     * @type string
     * @memberof ConfigurationApiproductConfiguratorGetConfigurationFromSelections
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfigurationApiproductConfiguratorGetConfigurationFromSelections
     */
    productId: string
    /**
     * 
     * @type ProductConfiguratorGetConfigurationFromSelectionsRequest
     * @memberof ConfigurationApiproductConfiguratorGetConfigurationFromSelections
     */
    body: ProductConfiguratorGetConfigurationFromSelectionsRequest
}

export class ObjectConfigurationApi {
    private api: ObservableConfigurationApi

    public constructor(configuration: Configuration, requestFactory?: ConfigurationApiRequestFactory, responseProcessor?: ConfigurationApiResponseProcessor) {
        this.api = new ObservableConfigurationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param param the request object
     */
    public productConfiguratorGetAvailableConfigurationWithHttpInfo(param: ConfigurationApiProductConfiguratorGetAvailableConfigurationRequest, options?: Configuration): Promise<HttpInfo<ConfigurationGetAvailableConfigurationResponse>> {
        return this.api.productConfiguratorGetAvailableConfigurationWithHttpInfo(param.tenantId, param.productId, param.configuratorId,  options).toPromise();
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param param the request object
     */
    public productConfiguratorGetAvailableConfiguration(param: ConfigurationApiProductConfiguratorGetAvailableConfigurationRequest, options?: Configuration): Promise<ConfigurationGetAvailableConfigurationResponse> {
        return this.api.productConfiguratorGetAvailableConfiguration(param.tenantId, param.productId, param.configuratorId,  options).toPromise();
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param param the request object
     */
    public productConfiguratorGetAvailableConfiguration2WithHttpInfo(param: ConfigurationApiProductConfiguratorGetAvailableConfiguration2Request, options?: Configuration): Promise<HttpInfo<ConfigurationGetAvailableConfigurationResponse>> {
        return this.api.productConfiguratorGetAvailableConfiguration2WithHttpInfo(param.tenantId, param.productId, param.body,  options).toPromise();
    }

    /**
     * Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.
     * Get Available Configuration
     * @param param the request object
     */
    public productConfiguratorGetAvailableConfiguration2(param: ConfigurationApiProductConfiguratorGetAvailableConfiguration2Request, options?: Configuration): Promise<ConfigurationGetAvailableConfigurationResponse> {
        return this.api.productConfiguratorGetAvailableConfiguration2(param.tenantId, param.productId, param.body,  options).toPromise();
    }

    /**
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     * @param param the request object
     */
    public productConfiguratorGetConfigurationFromSelectionsWithHttpInfo(param: ConfigurationApiProductConfiguratorGetConfigurationFromSelectionsRequest, options?: Configuration): Promise<HttpInfo<ConfigurationGetConfigurationFromSelectionsResponse>> {
        return this.api.productConfiguratorGetConfigurationFromSelectionsWithHttpInfo(param.tenantId, param.productId, param.body,  options).toPromise();
    }

    /**
     * Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.
     * Get Configuration from Selections
     * @param param the request object
     */
    public productConfiguratorGetConfigurationFromSelections(param: ConfigurationApiProductConfiguratorGetConfigurationFromSelectionsRequest, options?: Configuration): Promise<ConfigurationGetConfigurationFromSelectionsResponse> {
        return this.api.productConfiguratorGetConfigurationFromSelections(param.tenantId, param.productId, param.body,  options).toPromise();
    }

}

import { ObservableConfiguratorApi } from "./ObservableAPI";
import { ConfiguratorApiRequestFactory, ConfiguratorApiResponseProcessor} from "../apis/ConfiguratorApi";

export interface ConfiguratorApiProductConfiguratorCopyConfiguratorRequest {
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorCopyConfigurator
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorCopyConfigurator
     */
    sourceConfiguratorId: string
    /**
     * 
     * @type ProductConfiguratorCopyConfiguratorRequest
     * @memberof ConfiguratorApiproductConfiguratorCopyConfigurator
     */
    body: ProductConfiguratorCopyConfiguratorRequest
}

export interface ConfiguratorApiProductConfiguratorCreateConfiguratorRequest {
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorCreateConfigurator
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorCreateConfigurator
     */
    productId: string
    /**
     * 
     * @type ProductConfiguratorCreateConfiguratorRequest
     * @memberof ConfiguratorApiproductConfiguratorCreateConfigurator
     */
    body: ProductConfiguratorCreateConfiguratorRequest
}

export interface ConfiguratorApiProductConfiguratorDeleteConfiguratorRequest {
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorDeleteConfigurator
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorDeleteConfigurator
     */
    configuratorId: string
}

export interface ConfiguratorApiProductConfiguratorGetConfiguratorByProductIdRequest {
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorGetConfiguratorByProductId
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorGetConfiguratorByProductId
     */
    productId: string
    /**
     * 
     * @type &#39;UNKNOWN&#39; | &#39;ACTIVE&#39; | &#39;DRAFT&#39; | &#39;DISABLED&#39;
     * @memberof ConfiguratorApiproductConfiguratorGetConfiguratorByProductId
     */
    status?: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED'
}

export interface ConfiguratorApiProductConfiguratorGetConfiguratorByProductId2Request {
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorGetConfiguratorByProductId2
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorGetConfiguratorByProductId2
     */
    productId: string
    /**
     * 
     * @type &#39;UNKNOWN&#39; | &#39;ACTIVE&#39; | &#39;DRAFT&#39; | &#39;DISABLED&#39;
     * @memberof ConfiguratorApiproductConfiguratorGetConfiguratorByProductId2
     */
    status: 'UNKNOWN' | 'ACTIVE' | 'DRAFT' | 'DISABLED'
}

export interface ConfiguratorApiProductConfiguratorListConfiguratorsRequest {
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorListConfigurators
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorListConfigurators
     */
    productId: string
    /**
     * 
     * @type number
     * @memberof ConfiguratorApiproductConfiguratorListConfigurators
     */
    pageSize: number
    /**
     * 
     * @type ProductConfiguratorListPropertiesRequest
     * @memberof ConfiguratorApiproductConfiguratorListConfigurators
     */
    body: ProductConfiguratorListPropertiesRequest
}

export interface ConfiguratorApiProductConfiguratorUpdateConfiguratorRequest {
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorUpdateConfigurator
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ConfiguratorApiproductConfiguratorUpdateConfigurator
     */
    configuratorId: string
    /**
     * 
     * @type ProductConfiguratorUpdateConfiguratorRequest
     * @memberof ConfiguratorApiproductConfiguratorUpdateConfigurator
     */
    body: ProductConfiguratorUpdateConfiguratorRequest
}

export class ObjectConfiguratorApi {
    private api: ObservableConfiguratorApi

    public constructor(configuration: Configuration, requestFactory?: ConfiguratorApiRequestFactory, responseProcessor?: ConfiguratorApiResponseProcessor) {
        this.api = new ObservableConfiguratorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Duplicate an existing product configurator from the source to the specified tenant and product. Submit an empty body to initiate the copy process, creating a new configuration based on the source.
     * Copy Configurator
     * @param param the request object
     */
    public productConfiguratorCopyConfiguratorWithHttpInfo(param: ConfiguratorApiProductConfiguratorCopyConfiguratorRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        return this.api.productConfiguratorCopyConfiguratorWithHttpInfo(param.tenantId, param.sourceConfiguratorId, param.body,  options).toPromise();
    }

    /**
     * Duplicate an existing product configurator from the source to the specified tenant and product. Submit an empty body to initiate the copy process, creating a new configuration based on the source.
     * Copy Configurator
     * @param param the request object
     */
    public productConfiguratorCopyConfigurator(param: ConfiguratorApiProductConfiguratorCopyConfiguratorRequest, options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        return this.api.productConfiguratorCopyConfigurator(param.tenantId, param.sourceConfiguratorId, param.body,  options).toPromise();
    }

    /**
     * Create a new product configurator for a specified tenant and product. Submit the desired configuration details in the request body to initiate the creation process.
     * Create Configurator
     * @param param the request object
     */
    public productConfiguratorCreateConfiguratorWithHttpInfo(param: ConfiguratorApiProductConfiguratorCreateConfiguratorRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        return this.api.productConfiguratorCreateConfiguratorWithHttpInfo(param.tenantId, param.productId, param.body,  options).toPromise();
    }

    /**
     * Create a new product configurator for a specified tenant and product. Submit the desired configuration details in the request body to initiate the creation process.
     * Create Configurator
     * @param param the request object
     */
    public productConfiguratorCreateConfigurator(param: ConfiguratorApiProductConfiguratorCreateConfiguratorRequest, options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        return this.api.productConfiguratorCreateConfigurator(param.tenantId, param.productId, param.body,  options).toPromise();
    }

    /**
     * Delete a product configurator by specifying the tenant and configurator IDs. Ensure precise removal of unwanted configurations with a straightforward DELETE request.
     * Delete Configurator
     * @param param the request object
     */
    public productConfiguratorDeleteConfiguratorWithHttpInfo(param: ConfiguratorApiProductConfiguratorDeleteConfiguratorRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productConfiguratorDeleteConfiguratorWithHttpInfo(param.tenantId, param.configuratorId,  options).toPromise();
    }

    /**
     * Delete a product configurator by specifying the tenant and configurator IDs. Ensure precise removal of unwanted configurations with a straightforward DELETE request.
     * Delete Configurator
     * @param param the request object
     */
    public productConfiguratorDeleteConfigurator(param: ConfiguratorApiProductConfiguratorDeleteConfiguratorRequest, options?: Configuration): Promise<any> {
        return this.api.productConfiguratorDeleteConfigurator(param.tenantId, param.configuratorId,  options).toPromise();
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param param the request object
     */
    public productConfiguratorGetConfiguratorByProductIdWithHttpInfo(param: ConfiguratorApiProductConfiguratorGetConfiguratorByProductIdRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        return this.api.productConfiguratorGetConfiguratorByProductIdWithHttpInfo(param.tenantId, param.productId, param.status,  options).toPromise();
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param param the request object
     */
    public productConfiguratorGetConfiguratorByProductId(param: ConfiguratorApiProductConfiguratorGetConfiguratorByProductIdRequest, options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        return this.api.productConfiguratorGetConfiguratorByProductId(param.tenantId, param.productId, param.status,  options).toPromise();
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param param the request object
     */
    public productConfiguratorGetConfiguratorByProductId2WithHttpInfo(param: ConfiguratorApiProductConfiguratorGetConfiguratorByProductId2Request, options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        return this.api.productConfiguratorGetConfiguratorByProductId2WithHttpInfo(param.tenantId, param.productId, param.status,  options).toPromise();
    }

    /**
     * Retrieve product configurations with status details, filtered by product and tenant IDs. Flexible options for specifying additional status parameters.
     * Get Configurator by Product ID
     * @param param the request object
     */
    public productConfiguratorGetConfiguratorByProductId2(param: ConfiguratorApiProductConfiguratorGetConfiguratorByProductId2Request, options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        return this.api.productConfiguratorGetConfiguratorByProductId2(param.tenantId, param.productId, param.status,  options).toPromise();
    }

    /**
     * List all product configurators.
     * List Product Configurators
     * @param param the request object
     */
    public productConfiguratorListConfiguratorsWithHttpInfo(param: ConfiguratorApiProductConfiguratorListConfiguratorsRequest, options?: Configuration): Promise<HttpInfo<ConfiguratorListResponse>> {
        return this.api.productConfiguratorListConfiguratorsWithHttpInfo(param.tenantId, param.productId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * List all product configurators.
     * List Product Configurators
     * @param param the request object
     */
    public productConfiguratorListConfigurators(param: ConfiguratorApiProductConfiguratorListConfiguratorsRequest, options?: Configuration): Promise<ConfiguratorListResponse> {
        return this.api.productConfiguratorListConfigurators(param.tenantId, param.productId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Modify an existing product configurator by specifying the tenant and configurator IDs. Use a PUT request with the updated configuration details in the body to seamlessly update and manage product configurations
     * Update Configurator
     * @param param the request object
     */
    public productConfiguratorUpdateConfiguratorWithHttpInfo(param: ConfiguratorApiProductConfiguratorUpdateConfiguratorRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorconfiguratorEntity>> {
        return this.api.productConfiguratorUpdateConfiguratorWithHttpInfo(param.tenantId, param.configuratorId, param.body,  options).toPromise();
    }

    /**
     * Modify an existing product configurator by specifying the tenant and configurator IDs. Use a PUT request with the updated configuration details in the body to seamlessly update and manage product configurations
     * Update Configurator
     * @param param the request object
     */
    public productConfiguratorUpdateConfigurator(param: ConfiguratorApiProductConfiguratorUpdateConfiguratorRequest, options?: Configuration): Promise<ProductconfiguratorconfiguratorEntity> {
        return this.api.productConfiguratorUpdateConfigurator(param.tenantId, param.configuratorId, param.body,  options).toPromise();
    }

}

import { ObservableDependencyApi } from "./ObservableAPI";
import { DependencyApiRequestFactory, DependencyApiResponseProcessor} from "../apis/DependencyApi";

export interface DependencyApiProductConfiguratorCreateDependencyRequest {
    /**
     * 
     * @type string
     * @memberof DependencyApiproductConfiguratorCreateDependency
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof DependencyApiproductConfiguratorCreateDependency
     */
    stepId: string
    /**
     * 
     * @type ProductConfiguratorCreateDependencyRequest
     * @memberof DependencyApiproductConfiguratorCreateDependency
     */
    body: ProductConfiguratorCreateDependencyRequest
}

export interface DependencyApiProductConfiguratorDeleteDependencyRequest {
    /**
     * 
     * @type string
     * @memberof DependencyApiproductConfiguratorDeleteDependency
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof DependencyApiproductConfiguratorDeleteDependency
     */
    dependencyId: string
}

export interface DependencyApiProductConfiguratorListDependenciesRequest {
    /**
     * 
     * @type string
     * @memberof DependencyApiproductConfiguratorListDependencies
     */
    tenantId: string
    /**
     * 
     * @type number
     * @memberof DependencyApiproductConfiguratorListDependencies
     */
    pageSize: number
    /**
     * 
     * @type ProductConfiguratorListDependenciesRequest
     * @memberof DependencyApiproductConfiguratorListDependencies
     */
    body: ProductConfiguratorListDependenciesRequest
}

export interface DependencyApiProductConfiguratorUpdateDependencyRequest {
    /**
     * 
     * @type string
     * @memberof DependencyApiproductConfiguratorUpdateDependency
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof DependencyApiproductConfiguratorUpdateDependency
     */
    dependencyId: string
    /**
     * 
     * @type ProductConfiguratorUpdateDependencyRequest
     * @memberof DependencyApiproductConfiguratorUpdateDependency
     */
    body: ProductConfiguratorUpdateDependencyRequest
}

export class ObjectDependencyApi {
    private api: ObservableDependencyApi

    public constructor(configuration: Configuration, requestFactory?: DependencyApiRequestFactory, responseProcessor?: DependencyApiResponseProcessor) {
        this.api = new ObservableDependencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Establish a new dependency for an existing step by specifying the tenant and step IDs. Utilize a POST request with the required dependency details in the body to seamlessly enhance the configuration logic of your product.
     * Create Dependency
     * @param param the request object
     */
    public productConfiguratorCreateDependencyWithHttpInfo(param: DependencyApiProductConfiguratorCreateDependencyRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratordependencyEntity>> {
        return this.api.productConfiguratorCreateDependencyWithHttpInfo(param.tenantId, param.stepId, param.body,  options).toPromise();
    }

    /**
     * Establish a new dependency for an existing step by specifying the tenant and step IDs. Utilize a POST request with the required dependency details in the body to seamlessly enhance the configuration logic of your product.
     * Create Dependency
     * @param param the request object
     */
    public productConfiguratorCreateDependency(param: DependencyApiProductConfiguratorCreateDependencyRequest, options?: Configuration): Promise<ProductconfiguratordependencyEntity> {
        return this.api.productConfiguratorCreateDependency(param.tenantId, param.stepId, param.body,  options).toPromise();
    }

    /**
     * Remove a specific dependency by specifying the tenant and dependency IDs. Ensure precision in dependency management with a straightforward DELETE request, simplifying the elimination of unwanted configuration logic.
     * Delete Dependency
     * @param param the request object
     */
    public productConfiguratorDeleteDependencyWithHttpInfo(param: DependencyApiProductConfiguratorDeleteDependencyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productConfiguratorDeleteDependencyWithHttpInfo(param.tenantId, param.dependencyId,  options).toPromise();
    }

    /**
     * Remove a specific dependency by specifying the tenant and dependency IDs. Ensure precision in dependency management with a straightforward DELETE request, simplifying the elimination of unwanted configuration logic.
     * Delete Dependency
     * @param param the request object
     */
    public productConfiguratorDeleteDependency(param: DependencyApiProductConfiguratorDeleteDependencyRequest, options?: Configuration): Promise<any> {
        return this.api.productConfiguratorDeleteDependency(param.tenantId, param.dependencyId,  options).toPromise();
    }

    /**
     * Retrieve a list of dependencies based on the specified tenant ID. Customize results by specifying page size for efficient pagination. Submit an empty body to get all dependencies associated with the configurations.
     * List Dependencies
     * @param param the request object
     */
    public productConfiguratorListDependenciesWithHttpInfo(param: DependencyApiProductConfiguratorListDependenciesRequest, options?: Configuration): Promise<HttpInfo<DependencyListDependenciesResponse>> {
        return this.api.productConfiguratorListDependenciesWithHttpInfo(param.tenantId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of dependencies based on the specified tenant ID. Customize results by specifying page size for efficient pagination. Submit an empty body to get all dependencies associated with the configurations.
     * List Dependencies
     * @param param the request object
     */
    public productConfiguratorListDependencies(param: DependencyApiProductConfiguratorListDependenciesRequest, options?: Configuration): Promise<DependencyListDependenciesResponse> {
        return this.api.productConfiguratorListDependencies(param.tenantId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Modify an existing dependency by specifying the tenant and dependency IDs. Utilize a PUT request with updated dependency details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Dependency
     * @param param the request object
     */
    public productConfiguratorUpdateDependencyWithHttpInfo(param: DependencyApiProductConfiguratorUpdateDependencyRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratordependencyEntity>> {
        return this.api.productConfiguratorUpdateDependencyWithHttpInfo(param.tenantId, param.dependencyId, param.body,  options).toPromise();
    }

    /**
     * Modify an existing dependency by specifying the tenant and dependency IDs. Utilize a PUT request with updated dependency details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Dependency
     * @param param the request object
     */
    public productConfiguratorUpdateDependency(param: DependencyApiProductConfiguratorUpdateDependencyRequest, options?: Configuration): Promise<ProductconfiguratordependencyEntity> {
        return this.api.productConfiguratorUpdateDependency(param.tenantId, param.dependencyId, param.body,  options).toPromise();
    }

}

import { ObservableMatrixApi } from "./ObservableAPI";
import { MatrixApiRequestFactory, MatrixApiResponseProcessor} from "../apis/MatrixApi";

export interface MatrixApiProductConfiguratorCreateMatrixRequest {
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorCreateMatrix
     */
    tenantId: string
    /**
     * 
     * @type ProductConfiguratorCreateMatrixRequest
     * @memberof MatrixApiproductConfiguratorCreateMatrix
     */
    body: ProductConfiguratorCreateMatrixRequest
}

export interface MatrixApiProductConfiguratorDeleteMatrixRequest {
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorDeleteMatrix
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorDeleteMatrix
     */
    matrixId: string
}

export interface MatrixApiProductConfiguratorGetMatrixRequest {
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorGetMatrix
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorGetMatrix
     */
    matrixId: string
}

export interface MatrixApiProductConfiguratorListMatricesRequest {
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorListMatrices
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorListMatrices
     */
    configuratorId: string
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorListMatrices
     */
    pageSize: string
    /**
     * 
     * @type ProductConfiguratorListMatricesRequest
     * @memberof MatrixApiproductConfiguratorListMatrices
     */
    body: ProductConfiguratorListMatricesRequest
}

export interface MatrixApiProductConfiguratorRemovePricelistFromMatrixRequest {
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorRemovePricelistFromMatrix
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorRemovePricelistFromMatrix
     */
    matrixId: string
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorRemovePricelistFromMatrix
     */
    pricelistGrn: string
}

export interface MatrixApiProductConfiguratorUpdateMatrixRequest {
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorUpdateMatrix
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof MatrixApiproductConfiguratorUpdateMatrix
     */
    matrixId: string
    /**
     * 
     * @type ProductConfiguratorUpdateMatrixRequest
     * @memberof MatrixApiproductConfiguratorUpdateMatrix
     */
    body: ProductConfiguratorUpdateMatrixRequest
}

export class ObjectMatrixApi {
    private api: ObservableMatrixApi

    public constructor(configuration: Configuration, requestFactory?: MatrixApiRequestFactory, responseProcessor?: MatrixApiResponseProcessor) {
        this.api = new ObservableMatrixApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.
     * Create Matrix
     * @param param the request object
     */
    public productConfiguratorCreateMatrixWithHttpInfo(param: MatrixApiProductConfiguratorCreateMatrixRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratormatrixEntity>> {
        return this.api.productConfiguratorCreateMatrixWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.
     * Create Matrix
     * @param param the request object
     */
    public productConfiguratorCreateMatrix(param: MatrixApiProductConfiguratorCreateMatrixRequest, options?: Configuration): Promise<ProductconfiguratormatrixEntity> {
        return this.api.productConfiguratorCreateMatrix(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.
     * Delete Matrix
     * @param param the request object
     */
    public productConfiguratorDeleteMatrixWithHttpInfo(param: MatrixApiProductConfiguratorDeleteMatrixRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productConfiguratorDeleteMatrixWithHttpInfo(param.tenantId, param.matrixId,  options).toPromise();
    }

    /**
     * Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.
     * Delete Matrix
     * @param param the request object
     */
    public productConfiguratorDeleteMatrix(param: MatrixApiProductConfiguratorDeleteMatrixRequest, options?: Configuration): Promise<any> {
        return this.api.productConfiguratorDeleteMatrix(param.tenantId, param.matrixId,  options).toPromise();
    }

    /**
     * Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.
     * Get Matrix
     * @param param the request object
     */
    public productConfiguratorGetMatrixWithHttpInfo(param: MatrixApiProductConfiguratorGetMatrixRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratormatrixEntity>> {
        return this.api.productConfiguratorGetMatrixWithHttpInfo(param.tenantId, param.matrixId,  options).toPromise();
    }

    /**
     * Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.
     * Get Matrix
     * @param param the request object
     */
    public productConfiguratorGetMatrix(param: MatrixApiProductConfiguratorGetMatrixRequest, options?: Configuration): Promise<ProductconfiguratormatrixEntity> {
        return this.api.productConfiguratorGetMatrix(param.tenantId, param.matrixId,  options).toPromise();
    }

    /**
     * Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.
     * List Matrices
     * @param param the request object
     */
    public productConfiguratorListMatricesWithHttpInfo(param: MatrixApiProductConfiguratorListMatricesRequest, options?: Configuration): Promise<HttpInfo<MatrixListMatricesResponse>> {
        return this.api.productConfiguratorListMatricesWithHttpInfo(param.tenantId, param.configuratorId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.
     * List Matrices
     * @param param the request object
     */
    public productConfiguratorListMatrices(param: MatrixApiProductConfiguratorListMatricesRequest, options?: Configuration): Promise<MatrixListMatricesResponse> {
        return this.api.productConfiguratorListMatrices(param.tenantId, param.configuratorId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.
     * Remove Pricelist from Matrix
     * @param param the request object
     */
    public productConfiguratorRemovePricelistFromMatrixWithHttpInfo(param: MatrixApiProductConfiguratorRemovePricelistFromMatrixRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratormatrixEntity>> {
        return this.api.productConfiguratorRemovePricelistFromMatrixWithHttpInfo(param.tenantId, param.matrixId, param.pricelistGrn,  options).toPromise();
    }

    /**
     * Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.
     * Remove Pricelist from Matrix
     * @param param the request object
     */
    public productConfiguratorRemovePricelistFromMatrix(param: MatrixApiProductConfiguratorRemovePricelistFromMatrixRequest, options?: Configuration): Promise<ProductconfiguratormatrixEntity> {
        return this.api.productConfiguratorRemovePricelistFromMatrix(param.tenantId, param.matrixId, param.pricelistGrn,  options).toPromise();
    }

    /**
     * Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.
     * Update Matrix
     * @param param the request object
     */
    public productConfiguratorUpdateMatrixWithHttpInfo(param: MatrixApiProductConfiguratorUpdateMatrixRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratormatrixEntity>> {
        return this.api.productConfiguratorUpdateMatrixWithHttpInfo(param.tenantId, param.matrixId, param.body,  options).toPromise();
    }

    /**
     * Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.
     * Update Matrix
     * @param param the request object
     */
    public productConfiguratorUpdateMatrix(param: MatrixApiProductConfiguratorUpdateMatrixRequest, options?: Configuration): Promise<ProductconfiguratormatrixEntity> {
        return this.api.productConfiguratorUpdateMatrix(param.tenantId, param.matrixId, param.body,  options).toPromise();
    }

}

import { ObservableOptionApi } from "./ObservableAPI";
import { OptionApiRequestFactory, OptionApiResponseProcessor} from "../apis/OptionApi";

export interface OptionApiProductConfiguratorBulkCreateOptionsRequest {
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorBulkCreateOptions
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorBulkCreateOptions
     */
    stepId: string
    /**
     * 
     * @type ProductConfiguratorBulkCreateOptionsRequest
     * @memberof OptionApiproductConfiguratorBulkCreateOptions
     */
    body: ProductConfiguratorBulkCreateOptionsRequest
}

export interface OptionApiProductConfiguratorBulkDeleteOptionsRequest {
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorBulkDeleteOptions
     */
    tenantId: string
    /**
     * 
     * @type ProductConfiguratorBulkDeleteOptionsRequest
     * @memberof OptionApiproductConfiguratorBulkDeleteOptions
     */
    body: ProductConfiguratorBulkDeleteOptionsRequest
}

export interface OptionApiProductConfiguratorBulkUpdateOptionsRequest {
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorBulkUpdateOptions
     */
    tenantId: string
    /**
     * 
     * @type ProductConfiguratorBulkUpdateOptionsRequest
     * @memberof OptionApiproductConfiguratorBulkUpdateOptions
     */
    body: ProductConfiguratorBulkUpdateOptionsRequest
}

export interface OptionApiProductConfiguratorCopyOptionRequest {
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorCopyOption
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorCopyOption
     */
    sourceOptionId: string
    /**
     * 
     * @type ProductConfiguratorCopyOptionRequest
     * @memberof OptionApiproductConfiguratorCopyOption
     */
    body: ProductConfiguratorCopyOptionRequest
}

export interface OptionApiProductConfiguratorCreateOptionRequest {
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorCreateOption
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorCreateOption
     */
    stepId: string
    /**
     * 
     * @type ProductConfiguratorCreateOptionRequest
     * @memberof OptionApiproductConfiguratorCreateOption
     */
    body: ProductConfiguratorCreateOptionRequest
}

export interface OptionApiProductConfiguratorDeleteOptionRequest {
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorDeleteOption
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorDeleteOption
     */
    optionId: string
}

export interface OptionApiProductConfiguratorListOptionsRequest {
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorListOptions
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorListOptions
     */
    stepId: string
    /**
     * 
     * @type number
     * @memberof OptionApiproductConfiguratorListOptions
     */
    pageSize: number
    /**
     * 
     * @type ProductConfiguratorListPropertiesRequest
     * @memberof OptionApiproductConfiguratorListOptions
     */
    body: ProductConfiguratorListPropertiesRequest
}

export interface OptionApiProductConfiguratorUpdateOptionRequest {
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorUpdateOption
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof OptionApiproductConfiguratorUpdateOption
     */
    optionId: string
    /**
     * 
     * @type ProductConfiguratorUpdateOptionRequest
     * @memberof OptionApiproductConfiguratorUpdateOption
     */
    body: ProductConfiguratorUpdateOptionRequest
}

export class ObjectOptionApi {
    private api: ObservableOptionApi

    public constructor(configuration: Configuration, requestFactory?: OptionApiRequestFactory, responseProcessor?: OptionApiResponseProcessor) {
        this.api = new ObservableOptionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add multiple options to an existing step simultaneously. Submit a POST request with the necessary option details in the body to efficiently expand the configuration possibilities in bulk. Streamline large-scale option management effortlessly.
     * Bulk Create Options
     * @param param the request object
     */
    public productConfiguratorBulkCreateOptionsWithHttpInfo(param: OptionApiProductConfiguratorBulkCreateOptionsRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionBulkCreateResponse>> {
        return this.api.productConfiguratorBulkCreateOptionsWithHttpInfo(param.tenantId, param.stepId, param.body,  options).toPromise();
    }

    /**
     * Add multiple options to an existing step simultaneously. Submit a POST request with the necessary option details in the body to efficiently expand the configuration possibilities in bulk. Streamline large-scale option management effortlessly.
     * Bulk Create Options
     * @param param the request object
     */
    public productConfiguratorBulkCreateOptions(param: OptionApiProductConfiguratorBulkCreateOptionsRequest, options?: Configuration): Promise<ProductconfiguratoroptionBulkCreateResponse> {
        return this.api.productConfiguratorBulkCreateOptions(param.tenantId, param.stepId, param.body,  options).toPromise();
    }

    /**
     * Efficiently remove multiple options from configurations using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of option IDs in the body for streamlined option management.
     * Bulk Delete Options
     * @param param the request object
     */
    public productConfiguratorBulkDeleteOptionsWithHttpInfo(param: OptionApiProductConfiguratorBulkDeleteOptionsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productConfiguratorBulkDeleteOptionsWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Efficiently remove multiple options from configurations using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of option IDs in the body for streamlined option management.
     * Bulk Delete Options
     * @param param the request object
     */
    public productConfiguratorBulkDeleteOptions(param: OptionApiProductConfiguratorBulkDeleteOptionsRequest, options?: Configuration): Promise<any> {
        return this.api.productConfiguratorBulkDeleteOptions(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Effortlessly update multiple options. Specify the tenant ID and submit a PUT request with the updated option details in the body. Streamline the customization of a multitude of options in one go.
     * Bulk Update Options
     * @param param the request object
     */
    public productConfiguratorBulkUpdateOptionsWithHttpInfo(param: OptionApiProductConfiguratorBulkUpdateOptionsRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionBulkUpdateResponse>> {
        return this.api.productConfiguratorBulkUpdateOptionsWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Effortlessly update multiple options. Specify the tenant ID and submit a PUT request with the updated option details in the body. Streamline the customization of a multitude of options in one go.
     * Bulk Update Options
     * @param param the request object
     */
    public productConfiguratorBulkUpdateOptions(param: OptionApiProductConfiguratorBulkUpdateOptionsRequest, options?: Configuration): Promise<ProductconfiguratoroptionBulkUpdateResponse> {
        return this.api.productConfiguratorBulkUpdateOptions(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Duplicate an existing option from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new option based on the source configuration. Streamline option replication effortlessly.
     * Copy Option
     * @param param the request object
     */
    public productConfiguratorCopyOptionWithHttpInfo(param: OptionApiProductConfiguratorCopyOptionRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionEntity>> {
        return this.api.productConfiguratorCopyOptionWithHttpInfo(param.tenantId, param.sourceOptionId, param.body,  options).toPromise();
    }

    /**
     * Duplicate an existing option from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new option based on the source configuration. Streamline option replication effortlessly.
     * Copy Option
     * @param param the request object
     */
    public productConfiguratorCopyOption(param: OptionApiProductConfiguratorCopyOptionRequest, options?: Configuration): Promise<ProductconfiguratoroptionEntity> {
        return this.api.productConfiguratorCopyOption(param.tenantId, param.sourceOptionId, param.body,  options).toPromise();
    }

    /**
     * Integrate a new option into an existing step by specifying the tenant and step IDs. Use a POST request with the required option details in the body for seamless customization and expansion of product configurations.
     * Create Option
     * @param param the request object
     */
    public productConfiguratorCreateOptionWithHttpInfo(param: OptionApiProductConfiguratorCreateOptionRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionEntity>> {
        return this.api.productConfiguratorCreateOptionWithHttpInfo(param.tenantId, param.stepId, param.body,  options).toPromise();
    }

    /**
     * Integrate a new option into an existing step by specifying the tenant and step IDs. Use a POST request with the required option details in the body for seamless customization and expansion of product configurations.
     * Create Option
     * @param param the request object
     */
    public productConfiguratorCreateOption(param: OptionApiProductConfiguratorCreateOptionRequest, options?: Configuration): Promise<ProductconfiguratoroptionEntity> {
        return this.api.productConfiguratorCreateOption(param.tenantId, param.stepId, param.body,  options).toPromise();
    }

    /**
     * Remove a specific option by specifying the tenant and option IDs. Ensure precision in option management with a straightforward DELETE request, simplifying the elimination of unwanted configuration choices.
     * Delete Option
     * @param param the request object
     */
    public productConfiguratorDeleteOptionWithHttpInfo(param: OptionApiProductConfiguratorDeleteOptionRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productConfiguratorDeleteOptionWithHttpInfo(param.tenantId, param.optionId,  options).toPromise();
    }

    /**
     * Remove a specific option by specifying the tenant and option IDs. Ensure precision in option management with a straightforward DELETE request, simplifying the elimination of unwanted configuration choices.
     * Delete Option
     * @param param the request object
     */
    public productConfiguratorDeleteOption(param: OptionApiProductConfiguratorDeleteOptionRequest, options?: Configuration): Promise<any> {
        return this.api.productConfiguratorDeleteOption(param.tenantId, param.optionId,  options).toPromise();
    }

    /**
     * Retrieve a list of options for a specific step based on tenant and step IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all options associated with the step.
     * List Options
     * @param param the request object
     */
    public productConfiguratorListOptionsWithHttpInfo(param: OptionApiProductConfiguratorListOptionsRequest, options?: Configuration): Promise<HttpInfo<OptionListOptionsResponse>> {
        return this.api.productConfiguratorListOptionsWithHttpInfo(param.tenantId, param.stepId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of options for a specific step based on tenant and step IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all options associated with the step.
     * List Options
     * @param param the request object
     */
    public productConfiguratorListOptions(param: OptionApiProductConfiguratorListOptionsRequest, options?: Configuration): Promise<OptionListOptionsResponse> {
        return this.api.productConfiguratorListOptions(param.tenantId, param.stepId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Modify an existing option by specifying the tenant and option IDs. Utilize a PUT request with updated option details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Option
     * @param param the request object
     */
    public productConfiguratorUpdateOptionWithHttpInfo(param: OptionApiProductConfiguratorUpdateOptionRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratoroptionEntity>> {
        return this.api.productConfiguratorUpdateOptionWithHttpInfo(param.tenantId, param.optionId, param.body,  options).toPromise();
    }

    /**
     * Modify an existing option by specifying the tenant and option IDs. Utilize a PUT request with updated option details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Option
     * @param param the request object
     */
    public productConfiguratorUpdateOption(param: OptionApiProductConfiguratorUpdateOptionRequest, options?: Configuration): Promise<ProductconfiguratoroptionEntity> {
        return this.api.productConfiguratorUpdateOption(param.tenantId, param.optionId, param.body,  options).toPromise();
    }

}

import { ObservableProductConfiguratorApi } from "./ObservableAPI";
import { ProductConfiguratorApiRequestFactory, ProductConfiguratorApiResponseProcessor} from "../apis/ProductConfiguratorApi";

export interface ProductConfiguratorApiProductConfiguratorGetPropertyRequest {
    /**
     * 
     * @type string
     * @memberof ProductConfiguratorApiproductConfiguratorGetProperty
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ProductConfiguratorApiproductConfiguratorGetProperty
     */
    propertyId: string
}

export interface ProductConfiguratorApiProductConfiguratorListPropertiesByConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ProductConfiguratorApiproductConfiguratorListPropertiesByConfiguration
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof ProductConfiguratorApiproductConfiguratorListPropertiesByConfiguration
     */
    configuratorId: string
    /**
     * 
     * @type string
     * @memberof ProductConfiguratorApiproductConfiguratorListPropertiesByConfiguration
     */
    pageSize: string
    /**
     * 
     * @type ProductConfiguratorListPropertiesByConfigurationRequest
     * @memberof ProductConfiguratorApiproductConfiguratorListPropertiesByConfiguration
     */
    body: ProductConfiguratorListPropertiesByConfigurationRequest
}

export class ObjectProductConfiguratorApi {
    private api: ObservableProductConfiguratorApi

    public constructor(configuration: Configuration, requestFactory?: ProductConfiguratorApiRequestFactory, responseProcessor?: ProductConfiguratorApiResponseProcessor) {
        this.api = new ObservableProductConfiguratorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public productConfiguratorGetPropertyWithHttpInfo(param: ProductConfiguratorApiProductConfiguratorGetPropertyRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyEntity>> {
        return this.api.productConfiguratorGetPropertyWithHttpInfo(param.tenantId, param.propertyId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productConfiguratorGetProperty(param: ProductConfiguratorApiProductConfiguratorGetPropertyRequest, options?: Configuration): Promise<ProductconfiguratorpropertyEntity> {
        return this.api.productConfiguratorGetProperty(param.tenantId, param.propertyId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productConfiguratorListPropertiesByConfigurationWithHttpInfo(param: ProductConfiguratorApiProductConfiguratorListPropertiesByConfigurationRequest, options?: Configuration): Promise<HttpInfo<PropertyListPropertiesByConfigurationResponse>> {
        return this.api.productConfiguratorListPropertiesByConfigurationWithHttpInfo(param.tenantId, param.configuratorId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productConfiguratorListPropertiesByConfiguration(param: ProductConfiguratorApiProductConfiguratorListPropertiesByConfigurationRequest, options?: Configuration): Promise<PropertyListPropertiesByConfigurationResponse> {
        return this.api.productConfiguratorListPropertiesByConfiguration(param.tenantId, param.configuratorId, param.pageSize, param.body,  options).toPromise();
    }

}

import { ObservablePropertyApi } from "./ObservableAPI";
import { PropertyApiRequestFactory, PropertyApiResponseProcessor} from "../apis/PropertyApi";

export interface PropertyApiProductConfiguratorBulkCreatePropertiesRequest {
    /**
     * 
     * @type string
     * @memberof PropertyApiproductConfiguratorBulkCreateProperties
     */
    tenantId: string
    /**
     * 
     * @type ProductConfiguratorBulkCreatePropertiesRequest
     * @memberof PropertyApiproductConfiguratorBulkCreateProperties
     */
    body: ProductConfiguratorBulkCreatePropertiesRequest
}

export interface PropertyApiProductConfiguratorBulkUpdatePropertiesRequest {
    /**
     * 
     * @type string
     * @memberof PropertyApiproductConfiguratorBulkUpdateProperties
     */
    tenantId: string
    /**
     * 
     * @type ProductConfiguratorBulkUpdatePropertiesRequest
     * @memberof PropertyApiproductConfiguratorBulkUpdateProperties
     */
    body: ProductConfiguratorBulkUpdatePropertiesRequest
}

export interface PropertyApiProductConfiguratorCreatePropertyRequest {
    /**
     * 
     * @type string
     * @memberof PropertyApiproductConfiguratorCreateProperty
     */
    tenantId: string
    /**
     * 
     * @type ProductConfiguratorCreatePropertyRequest
     * @memberof PropertyApiproductConfiguratorCreateProperty
     */
    body: ProductConfiguratorCreatePropertyRequest
}

export interface PropertyApiProductConfiguratorListPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof PropertyApiproductConfiguratorListProperties
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof PropertyApiproductConfiguratorListProperties
     */
    matrixId: string
    /**
     * 
     * @type string
     * @memberof PropertyApiproductConfiguratorListProperties
     */
    pageSize: string
    /**
     * 
     * @type ProductConfiguratorListPropertiesRequest
     * @memberof PropertyApiproductConfiguratorListProperties
     */
    body: ProductConfiguratorListPropertiesRequest
}

export interface PropertyApiProductConfiguratorUpdatePropertyRequest {
    /**
     * 
     * @type string
     * @memberof PropertyApiproductConfiguratorUpdateProperty
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof PropertyApiproductConfiguratorUpdateProperty
     */
    propertyId: string
    /**
     * 
     * @type ProductConfiguratorUpdatePropertyRequest
     * @memberof PropertyApiproductConfiguratorUpdateProperty
     */
    body: ProductConfiguratorUpdatePropertyRequest
}

export class ObjectPropertyApi {
    private api: ObservablePropertyApi

    public constructor(configuration: Configuration, requestFactory?: PropertyApiRequestFactory, responseProcessor?: PropertyApiResponseProcessor) {
        this.api = new ObservablePropertyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.
     * Bulk Create Properties
     * @param param the request object
     */
    public productConfiguratorBulkCreatePropertiesWithHttpInfo(param: PropertyApiProductConfiguratorBulkCreatePropertiesRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyBulkCreateResponse>> {
        return this.api.productConfiguratorBulkCreatePropertiesWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Efficiently add multiple properties to configurations with a bulk create operation. Specify the tenant ID and submit a POST request with the necessary property details in the body for streamlined property management.
     * Bulk Create Properties
     * @param param the request object
     */
    public productConfiguratorBulkCreateProperties(param: PropertyApiProductConfiguratorBulkCreatePropertiesRequest, options?: Configuration): Promise<ProductconfiguratorpropertyBulkCreateResponse> {
        return this.api.productConfiguratorBulkCreateProperties(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.
     * Bulk Update Properties
     * @param param the request object
     */
    public productConfiguratorBulkUpdatePropertiesWithHttpInfo(param: PropertyApiProductConfiguratorBulkUpdatePropertiesRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyBulkUpdateResponse>> {
        return this.api.productConfiguratorBulkUpdatePropertiesWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Effortlessly update multiple properties. Specify the tenant ID and submit a PUT request with the updated property details in the body. Streamline the customization of a multitude of properties in one go.
     * Bulk Update Properties
     * @param param the request object
     */
    public productConfiguratorBulkUpdateProperties(param: PropertyApiProductConfiguratorBulkUpdatePropertiesRequest, options?: Configuration): Promise<ProductconfiguratorpropertyBulkUpdateResponse> {
        return this.api.productConfiguratorBulkUpdateProperties(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.
     * Create Property
     * @param param the request object
     */
    public productConfiguratorCreatePropertyWithHttpInfo(param: PropertyApiProductConfiguratorCreatePropertyRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyEntity>> {
        return this.api.productConfiguratorCreatePropertyWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Integrate a new property into configurations by specifying the tenant ID. Use a POST request with the required property details in the body for seamless customization and expansion of product configurations.
     * Create Property
     * @param param the request object
     */
    public productConfiguratorCreateProperty(param: PropertyApiProductConfiguratorCreatePropertyRequest, options?: Configuration): Promise<ProductconfiguratorpropertyEntity> {
        return this.api.productConfiguratorCreateProperty(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.
     * List Properties
     * @param param the request object
     */
    public productConfiguratorListPropertiesWithHttpInfo(param: PropertyApiProductConfiguratorListPropertiesRequest, options?: Configuration): Promise<HttpInfo<PropertyListPropertiesResponse>> {
        return this.api.productConfiguratorListPropertiesWithHttpInfo(param.tenantId, param.matrixId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of properties for a specific matrix based on tenant and matrix IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all properties associated with the matrix.
     * List Properties
     * @param param the request object
     */
    public productConfiguratorListProperties(param: PropertyApiProductConfiguratorListPropertiesRequest, options?: Configuration): Promise<PropertyListPropertiesResponse> {
        return this.api.productConfiguratorListProperties(param.tenantId, param.matrixId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Property
     * @param param the request object
     */
    public productConfiguratorUpdatePropertyWithHttpInfo(param: PropertyApiProductConfiguratorUpdatePropertyRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorpropertyEntity>> {
        return this.api.productConfiguratorUpdatePropertyWithHttpInfo(param.tenantId, param.propertyId, param.body,  options).toPromise();
    }

    /**
     * Modify an existing property by specifying the tenant and property IDs. Utilize a PUT request with updated property details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Property
     * @param param the request object
     */
    public productConfiguratorUpdateProperty(param: PropertyApiProductConfiguratorUpdatePropertyRequest, options?: Configuration): Promise<ProductconfiguratorpropertyEntity> {
        return this.api.productConfiguratorUpdateProperty(param.tenantId, param.propertyId, param.body,  options).toPromise();
    }

}

import { ObservableStepApi } from "./ObservableAPI";
import { StepApiRequestFactory, StepApiResponseProcessor} from "../apis/StepApi";

export interface StepApiProductConfiguratorBulkCreateStepsRequest {
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorBulkCreateSteps
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorBulkCreateSteps
     */
    configuratorId: string
    /**
     * 
     * @type ProductConfiguratorBulkCreateStepsRequest
     * @memberof StepApiproductConfiguratorBulkCreateSteps
     */
    body: ProductConfiguratorBulkCreateStepsRequest
}

export interface StepApiProductConfiguratorBulkDeleteStepsRequest {
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorBulkDeleteSteps
     */
    tenantId: string
    /**
     * 
     * @type ProductConfiguratorBulkDeleteStepsRequest
     * @memberof StepApiproductConfiguratorBulkDeleteSteps
     */
    body: ProductConfiguratorBulkDeleteStepsRequest
}

export interface StepApiProductConfiguratorCopyStepRequest {
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorCopyStep
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorCopyStep
     */
    sourceStepId: string
    /**
     * 
     * @type ProductConfiguratorCopyStepRequest
     * @memberof StepApiproductConfiguratorCopyStep
     */
    body: ProductConfiguratorCopyStepRequest
}

export interface StepApiProductConfiguratorCreateStepRequest {
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorCreateStep
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorCreateStep
     */
    configuratorId: string
    /**
     * 
     * @type ProductConfiguratorCreateStepRequest
     * @memberof StepApiproductConfiguratorCreateStep
     */
    body: ProductConfiguratorCreateStepRequest
}

export interface StepApiProductConfiguratorDeleteStepRequest {
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorDeleteStep
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorDeleteStep
     */
    stepId: string
}

export interface StepApiProductConfiguratorUpdateStepRequest {
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorUpdateStep
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof StepApiproductConfiguratorUpdateStep
     */
    stepId: string
    /**
     * 
     * @type ProductConfiguratorUpdateStepRequest
     * @memberof StepApiproductConfiguratorUpdateStep
     */
    body: ProductConfiguratorUpdateStepRequest
}

export class ObjectStepApi {
    private api: ObservableStepApi

    public constructor(configuration: Configuration, requestFactory?: StepApiRequestFactory, responseProcessor?: StepApiResponseProcessor) {
        this.api = new ObservableStepApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.
     * Bulk Create Steps
     * @param param the request object
     */
    public productConfiguratorBulkCreateStepsWithHttpInfo(param: StepApiProductConfiguratorBulkCreateStepsRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorstepBulkCreateResponse>> {
        return this.api.productConfiguratorBulkCreateStepsWithHttpInfo(param.tenantId, param.configuratorId, param.body,  options).toPromise();
    }

    /**
     * Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.
     * Bulk Create Steps
     * @param param the request object
     */
    public productConfiguratorBulkCreateSteps(param: StepApiProductConfiguratorBulkCreateStepsRequest, options?: Configuration): Promise<ProductconfiguratorstepBulkCreateResponse> {
        return this.api.productConfiguratorBulkCreateSteps(param.tenantId, param.configuratorId, param.body,  options).toPromise();
    }

    /**
     * Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.
     * Bulk Delete Steps
     * @param param the request object
     */
    public productConfiguratorBulkDeleteStepsWithHttpInfo(param: StepApiProductConfiguratorBulkDeleteStepsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productConfiguratorBulkDeleteStepsWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.
     * Bulk Delete Steps
     * @param param the request object
     */
    public productConfiguratorBulkDeleteSteps(param: StepApiProductConfiguratorBulkDeleteStepsRequest, options?: Configuration): Promise<any> {
        return this.api.productConfiguratorBulkDeleteSteps(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.
     * Copy Step
     * @param param the request object
     */
    public productConfiguratorCopyStepWithHttpInfo(param: StepApiProductConfiguratorCopyStepRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorstepEntity>> {
        return this.api.productConfiguratorCopyStepWithHttpInfo(param.tenantId, param.sourceStepId, param.body,  options).toPromise();
    }

    /**
     * Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.
     * Copy Step
     * @param param the request object
     */
    public productConfiguratorCopyStep(param: StepApiProductConfiguratorCopyStepRequest, options?: Configuration): Promise<ProductconfiguratorstepEntity> {
        return this.api.productConfiguratorCopyStep(param.tenantId, param.sourceStepId, param.body,  options).toPromise();
    }

    /**
     * Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.
     * Create Step
     * @param param the request object
     */
    public productConfiguratorCreateStepWithHttpInfo(param: StepApiProductConfiguratorCreateStepRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorstepEntity>> {
        return this.api.productConfiguratorCreateStepWithHttpInfo(param.tenantId, param.configuratorId, param.body,  options).toPromise();
    }

    /**
     * Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.
     * Create Step
     * @param param the request object
     */
    public productConfiguratorCreateStep(param: StepApiProductConfiguratorCreateStepRequest, options?: Configuration): Promise<ProductconfiguratorstepEntity> {
        return this.api.productConfiguratorCreateStep(param.tenantId, param.configuratorId, param.body,  options).toPromise();
    }

    /**
     * Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.
     * Delete Step
     * @param param the request object
     */
    public productConfiguratorDeleteStepWithHttpInfo(param: StepApiProductConfiguratorDeleteStepRequest, options?: Configuration): Promise<HttpInfo<GooglerpcStatus>> {
        return this.api.productConfiguratorDeleteStepWithHttpInfo(param.tenantId, param.stepId,  options).toPromise();
    }

    /**
     * Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.
     * Delete Step
     * @param param the request object
     */
    public productConfiguratorDeleteStep(param: StepApiProductConfiguratorDeleteStepRequest, options?: Configuration): Promise<GooglerpcStatus> {
        return this.api.productConfiguratorDeleteStep(param.tenantId, param.stepId,  options).toPromise();
    }

    /**
     * Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Step
     * @param param the request object
     */
    public productConfiguratorUpdateStepWithHttpInfo(param: StepApiProductConfiguratorUpdateStepRequest, options?: Configuration): Promise<HttpInfo<ProductconfiguratorstepEntity>> {
        return this.api.productConfiguratorUpdateStepWithHttpInfo(param.tenantId, param.stepId, param.body,  options).toPromise();
    }

    /**
     * Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.
     * Update Step
     * @param param the request object
     */
    public productConfiguratorUpdateStep(param: StepApiProductConfiguratorUpdateStepRequest, options?: Configuration): Promise<ProductconfiguratorstepEntity> {
        return this.api.productConfiguratorUpdateStep(param.tenantId, param.stepId, param.body,  options).toPromise();
    }

}

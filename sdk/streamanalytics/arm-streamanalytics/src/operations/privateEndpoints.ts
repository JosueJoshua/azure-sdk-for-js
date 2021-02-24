/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/privateEndpointsMappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";

/** Class representing a PrivateEndpoints. */
export class PrivateEndpoints {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Create a PrivateEndpoints.
   * @param {StreamAnalyticsManagementClientContext} client Reference to the service client.
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a Stream Analytics Private Endpoint or replaces an already existing Private Endpoint.
   * @param privateEndpoint The definition of the private endpoint that will be used to create a new
   * cluster or replace the existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointsCreateOrUpdateResponse>
   */
  createOrUpdate(privateEndpoint: Models.PrivateEndpoint, resourceGroupName: string, clusterName: string, privateEndpointName: string, options?: Models.PrivateEndpointsCreateOrUpdateOptionalParams): Promise<Models.PrivateEndpointsCreateOrUpdateResponse>;
  /**
   * @param privateEndpoint The definition of the private endpoint that will be used to create a new
   * cluster or replace the existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param callback The callback
   */
  createOrUpdate(privateEndpoint: Models.PrivateEndpoint, resourceGroupName: string, clusterName: string, privateEndpointName: string, callback: msRest.ServiceCallback<Models.PrivateEndpoint>): void;
  /**
   * @param privateEndpoint The definition of the private endpoint that will be used to create a new
   * cluster or replace the existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(privateEndpoint: Models.PrivateEndpoint, resourceGroupName: string, clusterName: string, privateEndpointName: string, options: Models.PrivateEndpointsCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.PrivateEndpoint>): void;
  createOrUpdate(privateEndpoint: Models.PrivateEndpoint, resourceGroupName: string, clusterName: string, privateEndpointName: string, options?: Models.PrivateEndpointsCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.PrivateEndpoint>, callback?: msRest.ServiceCallback<Models.PrivateEndpoint>): Promise<Models.PrivateEndpointsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        privateEndpoint,
        resourceGroupName,
        clusterName,
        privateEndpointName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.PrivateEndpointsCreateOrUpdateResponse>;
  }

  /**
   * Gets information about the specified Private Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointsGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, privateEndpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, privateEndpointName: string, callback: msRest.ServiceCallback<Models.PrivateEndpoint>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, privateEndpointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpoint>): void;
  get(resourceGroupName: string, clusterName: string, privateEndpointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpoint>, callback?: msRest.ServiceCallback<Models.PrivateEndpoint>): Promise<Models.PrivateEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        privateEndpointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateEndpointsGetResponse>;
  }

  /**
   * Delete the specified private endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, privateEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,privateEndpointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists the private endpoints in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointsListByClusterResponse>
   */
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointsListByClusterResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointListResult>): void;
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointListResult>, callback?: msRest.ServiceCallback<Models.PrivateEndpointListResult>): Promise<Models.PrivateEndpointsListByClusterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listByClusterOperationSpec,
      callback) as Promise<Models.PrivateEndpointsListByClusterResponse>;
  }

  /**
   * Delete the specified private endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateEndpointName The name of the private endpoint.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, privateEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        privateEndpointName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists the private endpoints in the cluster.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointsListByClusterNextResponse>
   */
  listByClusterNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointsListByClusterNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByClusterNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateEndpointListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByClusterNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointListResult>): void;
  listByClusterNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointListResult>, callback?: msRest.ServiceCallback<Models.PrivateEndpointListResult>): Promise<Models.PrivateEndpointsListByClusterNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByClusterNextOperationSpec,
      callback) as Promise<Models.PrivateEndpointsListByClusterNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.privateEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "privateEndpoint",
    mapper: {
      ...Mappers.PrivateEndpoint,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpoint
    },
    201: {
      bodyMapper: Mappers.PrivateEndpoint
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.privateEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpoint
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByClusterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.privateEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByClusterNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

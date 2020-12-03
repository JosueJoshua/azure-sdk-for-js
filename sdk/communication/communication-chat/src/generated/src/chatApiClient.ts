/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { ChatApiClientContext } from "./chatApiClientContext";
import { ChatApiClientOptionalParams } from "./models";

class ChatApiClient extends ChatApiClientContext {
  /**
   * Initializes a new instance of the ChatApiClient class.
   * @param endpoint The endpoint of the Azure Communication resource.
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: ChatApiClientOptionalParams) {
    super(endpoint, options);
    this.chatThread = new operations.ChatThread(this);
    this.chat = new operations.Chat(this);
  }

  chatThread: operations.ChatThread;
  chat: operations.Chat;
}

// Operation Specifications

export { ChatApiClient, ChatApiClientContext, Models as ChatApiModels, Mappers as ChatApiMappers };
export * from "./operations";

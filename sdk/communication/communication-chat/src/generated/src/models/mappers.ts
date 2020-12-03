/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const ChatMessageReadReceiptsCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageReadReceiptsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "ChatMessageReadReceipt" }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessageReadReceipt: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageReadReceipt",
    modelProperties: {
      senderId: {
        serializedName: "senderId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      chatMessageId: {
        serializedName: "chatMessageId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      readOn: {
        serializedName: "readOn",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      innerErrors: {
        serializedName: "innerErrors",
        readOnly: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ErrorModel" } }
        }
      }
    }
  }
};

export const SendReadReceiptRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendReadReceiptRequest",
    modelProperties: {
      chatMessageId: {
        serializedName: "chatMessageId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendChatMessageRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendChatMessageRequest",
    modelProperties: {
      priority: {
        serializedName: "priority",
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendChatMessageResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendChatMessageResult",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessagesCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessagesCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ChatMessage" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessage: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessage",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      priority: {
        serializedName: "priority",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdOn",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      senderId: {
        serializedName: "senderId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      },
      editedOn: {
        serializedName: "editedOn",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const UpdateChatMessageRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateChatMessageRequest",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      priority: {
        serializedName: "priority",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatParticipantsCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatParticipantsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ChatParticipant" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatParticipant: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatParticipant",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      shareHistoryTime: {
        serializedName: "shareHistoryTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const AddChatParticipantsRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsRequest",
    modelProperties: {
      participants: {
        serializedName: "participants",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ChatParticipant" } }
        }
      }
    }
  }
};

export const AddChatParticipantsResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsResult",
    modelProperties: {
      errors: {
        serializedName: "errors",
        type: {
          name: "Composite",
          className: "AddChatParticipantsErrors"
        }
      }
    }
  }
};

export const AddChatParticipantsErrors: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsErrors",
    modelProperties: {
      invalidParticipants: {
        serializedName: "invalidParticipants",
        readOnly: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ErrorModel" } }
        }
      }
    }
  }
};

export const CreateChatThreadRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadRequest",
    modelProperties: {
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String"
        }
      },
      participants: {
        serializedName: "participants",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ChatParticipant" } }
        }
      }
    }
  }
};

export const CreateChatThreadResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadResult",
    modelProperties: {
      chatThread: {
        serializedName: "chatThread",
        type: {
          name: "Composite",
          className: "ChatThread"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Composite",
          className: "CreateChatThreadErrors"
        }
      }
    }
  }
};

export const ChatThread: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThread",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      topic: {
        serializedName: "topic",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdOn",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      createdBy: {
        serializedName: "createdBy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CreateChatThreadErrors: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadErrors",
    modelProperties: {
      invalidParticipants: {
        serializedName: "invalidParticipants",
        readOnly: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ErrorModel" } }
        }
      }
    }
  }
};

export const ChatThreadsInfoCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadsInfoCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ChatThreadInfo" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatThreadInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadInfo",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      topic: {
        serializedName: "topic",
        type: {
          name: "String"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      },
      lastMessageReceivedOn: {
        serializedName: "lastMessageReceivedOn",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const UpdateChatThreadRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateChatThreadRequest",
    modelProperties: {
      topic: {
        serializedName: "topic",
        type: {
          name: "String"
        }
      }
    }
  }
};

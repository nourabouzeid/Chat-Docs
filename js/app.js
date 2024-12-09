
    const schema = {
  "asyncapi": "2.0.0",
  "info": {
    "title": "Chats, Groups and Channels WebSocket API",
    "version": "1.0.0",
    "description": "WebSocket API for real-time Chat and Channel Features"
  },
  "servers": {
    "chat-server": {
      "url": "http://localhost:5000",
      "protocol": "ws"
    }
  },
  "channels": {
    "createChat": {
      "description": "Channel for creating chat.",
      "subscribe": {
        "summary": "Create a chat",
        "operationId": "createChat",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "chat",
                  "group",
                  "channel"
                ],
                "description": "The type of entity being created (e.g., chat, group, channel).",
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "name": {
                "type": "string",
                "description": "The name of the chat, group, or channel.",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "users": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "x-parser-schema-id": "<anonymous-schema-28>"
                },
                "description": "Array of participant IDs (required for channel and group creation).",
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              "picture": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "senderKey": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-30>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-24>"
          },
          "x-parser-message-name": "<anonymous-message-2>"
        }
      },
      "publish": {
        "summary": "Join Chat",
        "operationId": "joinChat",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "description": "Chat identifier",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "othersId": {
                "type": "integer",
                "description": "Chat identifier",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "name": {
                "type": "string",
                "description": "The name of the chat",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "type": {
                "type": "string",
                "enum": [
                  "DM",
                  "GROUP",
                  "CHANNEL"
                ],
                "description": "The type of entity being created (e.g., chat, group, channel).",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "picture": {
                "type": "string",
                "description": "URL of the chat picture",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "hasStory": {
                "type": "boolean",
                "description": "Is the chat muted",
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "isMuted": {
                "type": "boolean",
                "description": "Is the chat muted",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "participantKeys": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "x-parser-schema-id": "<anonymous-schema-10>"
                },
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "status": {
                "type": "string",
                "description": "Is the chat muted",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "unreadMessageCount": {
                "type": "integer",
                "nullable": true,
                "description": "The count of unread messages in the chat",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "lastMessage": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "description": "Identifier of the last message",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "content": {
                    "type": "string",
                    "description": "Content of the last message",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "type": {
                    "type": "string",
                    "description": "Type of the last message (e.g., text, image)",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  },
                  "time": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Timestamp when the last message was sent",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  },
                  "read": {
                    "type": "boolean",
                    "description": "Indicates if the last message has been read",
                    "x-parser-schema-id": "<anonymous-schema-18>"
                  },
                  "delivered": {
                    "type": "boolean",
                    "description": "Indicates if the last message has been delivered",
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  },
                  "extension": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-20>"
                  },
                  "sender": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-22>"
                      },
                      "userName": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-23>"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-21>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "<anonymous-message-1>"
        }
      }
    },
    "leaveChat": {
      "description": "Channel for leaving Group/Channel.",
      "subscribe": {
        "summary": "leave Group/Channel",
        "operationId": "leaveGroup",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "chatId": {
                "type": "integer",
                "description": "identifier for group/channel",
                "x-parser-schema-id": "<anonymous-schema-35>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-34>"
          },
          "x-parser-message-name": "<anonymous-message-4>"
        }
      },
      "publish": {
        "summary": "Get notified that someone left the group",
        "operationId": "notifiedLeaveGroup",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "userName": {
                "type": "integer",
                "description": "name of the user who left",
                "x-parser-schema-id": "<anonymous-schema-32>"
              },
              "chatId": {
                "type": "string",
                "description": "identifier of the group/channel",
                "x-parser-schema-id": "<anonymous-schema-33>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-31>"
          },
          "x-parser-message-name": "<anonymous-message-3>"
        }
      }
    },
    "deleteChat": {
      "description": "Channel for deleting Group/Channel.",
      "subscribe": {
        "summary": "delete Group",
        "operationId": "deleteGroup",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "chatId": {
                "type": "integer",
                "description": "identifier for group/channel",
                "x-parser-schema-id": "<anonymous-schema-39>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-38>"
          },
          "x-parser-message-name": "<anonymous-message-6>"
        }
      },
      "publish": {
        "summary": "Get notified that group got deleted",
        "operationId": "notifiedDeleteGroup",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "chatId": {
                "type": "string",
                "description": "identifier of the group/channel",
                "x-parser-schema-id": "<anonymous-schema-37>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-36>"
          },
          "x-parser-message-name": "<anonymous-message-5>"
        }
      }
    },
    "unmuteChat": {
      "description": "Channel for receiving unmutedChat.",
      "publish": {
        "operationId": "unmuteChat",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "chatId": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-41>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-40>"
          },
          "x-parser-message-name": "<anonymous-message-7>"
        }
      }
    },
    "addAdmin": {
      "description": "Channel for adding Admins to Group/Channel.",
      "subscribe": {
        "summary": "Add admin",
        "operationId": "addAdmin",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "userId": {
                "type": "integer",
                "description": "identifier for user",
                "x-parser-schema-id": "<anonymous-schema-46>"
              },
              "chatId": {
                "type": "integer",
                "description": "identifier for group/channel",
                "x-parser-schema-id": "<anonymous-schema-47>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-45>"
          },
          "x-parser-message-name": "<anonymous-message-9>"
        }
      },
      "publish": {
        "summary": "Get notified that someone became admin",
        "operationId": "notifieyAddAdmin",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "userId": {
                "type": "integer",
                "description": "name of the user who became admin",
                "x-parser-schema-id": "<anonymous-schema-43>"
              },
              "chatId": {
                "type": "string",
                "description": "identifier for group/channel",
                "x-parser-schema-id": "<anonymous-schema-44>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-42>"
          },
          "x-parser-message-name": "<anonymous-message-8>"
        }
      }
    },
    "addUser": {
      "description": "Channel for adding Users to Group/Channel.",
      "subscribe": {
        "summary": "Add User to group/channel",
        "operationId": "addUser",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "user": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-56>"
                  },
                  "userName": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-57>"
                  },
                  "profilePic": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-58>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-55>"
              },
              "chatId": {
                "type": "integer",
                "description": "identifier for group/channel",
                "x-parser-schema-id": "<anonymous-schema-59>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-54>"
          },
          "x-parser-message-name": "<anonymous-message-11>"
        }
      },
      "publish": {
        "summary": "Join Chat",
        "operationId": "notifiyUserAdded",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "user": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-50>"
                  },
                  "userName": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-51>"
                  },
                  "profilePic": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-52>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-49>"
              },
              "chatId": {
                "type": "integer",
                "description": "identifier for group/channel",
                "x-parser-schema-id": "<anonymous-schema-53>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-48>"
          },
          "x-parser-message-name": "<anonymous-message-10>"
        }
      }
    },
    "removeUser": {
      "description": "Channel for Kicking Users from Group/Channel.",
      "subscribe": {
        "summary": "Kick User from group/channel",
        "operationId": "kickUser",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "user": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-68>"
                  },
                  "userName": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-69>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-67>"
              },
              "removerUserName": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-70>"
              },
              "chatId": {
                "type": "integer",
                "description": "identifier for group/channel",
                "x-parser-schema-id": "<anonymous-schema-71>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-66>"
          },
          "x-parser-message-name": "<anonymous-message-13>"
        }
      },
      "publish": {
        "summary": "Get notified that someone left the group",
        "operationId": "notifyKickedUser",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "user": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-62>"
                  },
                  "userName": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-63>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-61>"
              },
              "removerUserName": {
                "type": "integer",
                "description": "name of the user who removed them",
                "x-parser-schema-id": "<anonymous-schema-64>"
              },
              "chatId": {
                "type": "string",
                "description": "identifier of the group/channel",
                "x-parser-schema-id": "<anonymous-schema-65>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-60>"
          },
          "x-parser-message-name": "<anonymous-message-12>"
        }
      }
    },
    "subscribe": {
      "description": "Channel for subscribing to channel.",
      "subscribe": {
        "summary": "subscribe to channel",
        "operationId": "subscribe",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "chatId": {
                "type": "integer",
                "description": "Identifier of the chat room",
                "x-parser-schema-id": "<anonymous-schema-78>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-77>"
          },
          "x-parser-message-name": "<anonymous-message-15>"
        }
      },
      "publish": {
        "summary": "user subscribed to channel",
        "operationId": "joinChannel",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "chatId": {
                "type": "integer",
                "description": "Identifier of the chat room",
                "x-parser-schema-id": "<anonymous-schema-73>"
              },
              "userId": {
                "type": "integer",
                "description": "Identifier of the user",
                "x-parser-schema-id": "<anonymous-schema-74>"
              },
              "userName": {
                "type": "string",
                "description": "Name of the user",
                "x-parser-schema-id": "<anonymous-schema-75>"
              },
              "profilePic": {
                "type": "string",
                "description": "Profile picture of the user",
                "x-parser-schema-id": "<anonymous-schema-76>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-72>"
          },
          "x-parser-message-name": "<anonymous-message-14>"
        }
      }
    },
    "comment": {
      "description": "Channel for commenting in a channel.",
      "subscribe": {
        "operationId": "comment",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "messageId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-90>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the chat room",
                "x-parser-schema-id": "<anonymous-schema-91>"
              },
              "content": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-92>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "x-parser-message-name": "<anonymous-message-17>"
        }
      },
      "publish": {
        "operationId": "receiveComment",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "commentId": {
                "type": "integer",
                "description": "Identifier of the comment",
                "x-parser-schema-id": "<anonymous-schema-80>"
              },
              "messageId": {
                "type": "integer",
                "description": "Identifier of the message",
                "x-parser-schema-id": "<anonymous-schema-81>"
              },
              "chatId": {
                "type": "integer",
                "description": "Identifier of the chat room",
                "x-parser-schema-id": "<anonymous-schema-82>"
              },
              "sender": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "description": "Identifier of the user",
                    "x-parser-schema-id": "<anonymous-schema-84>"
                  },
                  "userName": {
                    "type": "string",
                    "description": "Name of the user",
                    "x-parser-schema-id": "<anonymous-schema-85>"
                  },
                  "profilePic": {
                    "type": "string",
                    "description": "Profile picture of the user",
                    "x-parser-schema-id": "<anonymous-schema-86>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-83>"
              },
              "time": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-87>"
              },
              "content": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-88>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-79>"
          },
          "x-parser-message-name": "<anonymous-message-16>"
        }
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  
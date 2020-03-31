/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.recommend = (function() {

    /**
     * Namespace recommend.
     * @exports recommend
     * @namespace
     */
    var recommend = {};

    recommend.RecommendController = (function() {

        /**
         * Constructs a new RecommendController service.
         * @memberof recommend
         * @classdesc Represents a RecommendController
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function RecommendController(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (RecommendController.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = RecommendController;

        /**
         * Creates new RecommendController service using the specified rpc implementation.
         * @function create
         * @memberof recommend.RecommendController
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {RecommendController} RPC service. Useful where requests and/or responses are streamed.
         */
        RecommendController.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link recommend.RecommendController#getRecommendPostsId}.
         * @memberof recommend.RecommendController
         * @typedef GetRecommendPostsIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {recommend.GetRecommendPostsIdResult} [response] GetRecommendPostsIdResult
         */

        /**
         * Calls GetRecommendPostsId.
         * @function getRecommendPostsId
         * @memberof recommend.RecommendController
         * @instance
         * @param {recommend.IGetRecommendPostsIdInput} request GetRecommendPostsIdInput message or plain object
         * @param {recommend.RecommendController.GetRecommendPostsIdCallback} callback Node-style callback called with the error, if any, and GetRecommendPostsIdResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RecommendController.prototype.getRecommendPostsId = function getRecommendPostsId(request, callback) {
            return this.rpcCall(getRecommendPostsId, $root.recommend.GetRecommendPostsIdInput, $root.recommend.GetRecommendPostsIdResult, request, callback);
        }, "name", { value: "GetRecommendPostsId" });

        /**
         * Calls GetRecommendPostsId.
         * @function getRecommendPostsId
         * @memberof recommend.RecommendController
         * @instance
         * @param {recommend.IGetRecommendPostsIdInput} request GetRecommendPostsIdInput message or plain object
         * @returns {Promise<recommend.GetRecommendPostsIdResult>} Promise
         * @variation 2
         */

        return RecommendController;
    })();

    recommend.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof recommend
         * @interface IResult
         * @property {boolean|null} [success] Result success
         * @property {string|null} [reason] Result reason
         */

        /**
         * Constructs a new Result.
         * @memberof recommend
         * @classdesc Represents a Result.
         * @implements IResult
         * @constructor
         * @param {recommend.IResult=} [properties] Properties to set
         */
        function Result(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Result success.
         * @member {boolean} success
         * @memberof recommend.Result
         * @instance
         */
        Result.prototype.success = false;

        /**
         * Result reason.
         * @member {string} reason
         * @memberof recommend.Result
         * @instance
         */
        Result.prototype.reason = "";

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof recommend.Result
         * @static
         * @param {recommend.IResult=} [properties] Properties to set
         * @returns {recommend.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link recommend.Result.verify|verify} messages.
         * @function encode
         * @memberof recommend.Result
         * @static
         * @param {recommend.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link recommend.Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof recommend.Result
         * @static
         * @param {recommend.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof recommend.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {recommend.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.recommend.Result();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof recommend.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {recommend.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Result message.
         * @function verify
         * @memberof recommend.Result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof recommend.Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {recommend.Result} Result
         */
        Result.fromObject = function fromObject(object) {
            if (object instanceof $root.recommend.Result)
                return object;
            var message = new $root.recommend.Result();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof recommend.Result
         * @static
         * @param {recommend.Result} message Result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.reason = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this Result to JSON.
         * @function toJSON
         * @memberof recommend.Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Result;
    })();

    recommend.GetRecommendPostsIdInput = (function() {

        /**
         * Properties of a GetRecommendPostsIdInput.
         * @memberof recommend
         * @interface IGetRecommendPostsIdInput
         * @property {number|null} [userId] GetRecommendPostsIdInput userId
         * @property {number|null} [offset] GetRecommendPostsIdInput offset
         * @property {number|null} [number] GetRecommendPostsIdInput number
         */

        /**
         * Constructs a new GetRecommendPostsIdInput.
         * @memberof recommend
         * @classdesc Represents a GetRecommendPostsIdInput.
         * @implements IGetRecommendPostsIdInput
         * @constructor
         * @param {recommend.IGetRecommendPostsIdInput=} [properties] Properties to set
         */
        function GetRecommendPostsIdInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecommendPostsIdInput userId.
         * @member {number} userId
         * @memberof recommend.GetRecommendPostsIdInput
         * @instance
         */
        GetRecommendPostsIdInput.prototype.userId = 0;

        /**
         * GetRecommendPostsIdInput offset.
         * @member {number} offset
         * @memberof recommend.GetRecommendPostsIdInput
         * @instance
         */
        GetRecommendPostsIdInput.prototype.offset = 0;

        /**
         * GetRecommendPostsIdInput number.
         * @member {number} number
         * @memberof recommend.GetRecommendPostsIdInput
         * @instance
         */
        GetRecommendPostsIdInput.prototype.number = 0;

        /**
         * Creates a new GetRecommendPostsIdInput instance using the specified properties.
         * @function create
         * @memberof recommend.GetRecommendPostsIdInput
         * @static
         * @param {recommend.IGetRecommendPostsIdInput=} [properties] Properties to set
         * @returns {recommend.GetRecommendPostsIdInput} GetRecommendPostsIdInput instance
         */
        GetRecommendPostsIdInput.create = function create(properties) {
            return new GetRecommendPostsIdInput(properties);
        };

        /**
         * Encodes the specified GetRecommendPostsIdInput message. Does not implicitly {@link recommend.GetRecommendPostsIdInput.verify|verify} messages.
         * @function encode
         * @memberof recommend.GetRecommendPostsIdInput
         * @static
         * @param {recommend.IGetRecommendPostsIdInput} message GetRecommendPostsIdInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecommendPostsIdInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.offset != null && message.hasOwnProperty("offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
            if (message.number != null && message.hasOwnProperty("number"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
            return writer;
        };

        /**
         * Encodes the specified GetRecommendPostsIdInput message, length delimited. Does not implicitly {@link recommend.GetRecommendPostsIdInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof recommend.GetRecommendPostsIdInput
         * @static
         * @param {recommend.IGetRecommendPostsIdInput} message GetRecommendPostsIdInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecommendPostsIdInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRecommendPostsIdInput message from the specified reader or buffer.
         * @function decode
         * @memberof recommend.GetRecommendPostsIdInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {recommend.GetRecommendPostsIdInput} GetRecommendPostsIdInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecommendPostsIdInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.recommend.GetRecommendPostsIdInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.offset = reader.int32();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRecommendPostsIdInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof recommend.GetRecommendPostsIdInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {recommend.GetRecommendPostsIdInput} GetRecommendPostsIdInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecommendPostsIdInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRecommendPostsIdInput message.
         * @function verify
         * @memberof recommend.GetRecommendPostsIdInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRecommendPostsIdInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            return null;
        };

        /**
         * Creates a GetRecommendPostsIdInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof recommend.GetRecommendPostsIdInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {recommend.GetRecommendPostsIdInput} GetRecommendPostsIdInput
         */
        GetRecommendPostsIdInput.fromObject = function fromObject(object) {
            if (object instanceof $root.recommend.GetRecommendPostsIdInput)
                return object;
            var message = new $root.recommend.GetRecommendPostsIdInput();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.offset != null)
                message.offset = object.offset | 0;
            if (object.number != null)
                message.number = object.number | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetRecommendPostsIdInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof recommend.GetRecommendPostsIdInput
         * @static
         * @param {recommend.GetRecommendPostsIdInput} message GetRecommendPostsIdInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRecommendPostsIdInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.offset = 0;
                object.number = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            return object;
        };

        /**
         * Converts this GetRecommendPostsIdInput to JSON.
         * @function toJSON
         * @memberof recommend.GetRecommendPostsIdInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRecommendPostsIdInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRecommendPostsIdInput;
    })();

    recommend.GetRecommendPostsIdResult = (function() {

        /**
         * Properties of a GetRecommendPostsIdResult.
         * @memberof recommend
         * @interface IGetRecommendPostsIdResult
         * @property {recommend.IResult|null} [result] GetRecommendPostsIdResult result
         * @property {Array.<number>|null} [postIdList] GetRecommendPostsIdResult postIdList
         */

        /**
         * Constructs a new GetRecommendPostsIdResult.
         * @memberof recommend
         * @classdesc Represents a GetRecommendPostsIdResult.
         * @implements IGetRecommendPostsIdResult
         * @constructor
         * @param {recommend.IGetRecommendPostsIdResult=} [properties] Properties to set
         */
        function GetRecommendPostsIdResult(properties) {
            this.postIdList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecommendPostsIdResult result.
         * @member {recommend.IResult|null|undefined} result
         * @memberof recommend.GetRecommendPostsIdResult
         * @instance
         */
        GetRecommendPostsIdResult.prototype.result = null;

        /**
         * GetRecommendPostsIdResult postIdList.
         * @member {Array.<number>} postIdList
         * @memberof recommend.GetRecommendPostsIdResult
         * @instance
         */
        GetRecommendPostsIdResult.prototype.postIdList = $util.emptyArray;

        /**
         * Creates a new GetRecommendPostsIdResult instance using the specified properties.
         * @function create
         * @memberof recommend.GetRecommendPostsIdResult
         * @static
         * @param {recommend.IGetRecommendPostsIdResult=} [properties] Properties to set
         * @returns {recommend.GetRecommendPostsIdResult} GetRecommendPostsIdResult instance
         */
        GetRecommendPostsIdResult.create = function create(properties) {
            return new GetRecommendPostsIdResult(properties);
        };

        /**
         * Encodes the specified GetRecommendPostsIdResult message. Does not implicitly {@link recommend.GetRecommendPostsIdResult.verify|verify} messages.
         * @function encode
         * @memberof recommend.GetRecommendPostsIdResult
         * @static
         * @param {recommend.IGetRecommendPostsIdResult} message GetRecommendPostsIdResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecommendPostsIdResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.recommend.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.postIdList != null && message.postIdList.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.postIdList.length; ++i)
                    writer.int32(message.postIdList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GetRecommendPostsIdResult message, length delimited. Does not implicitly {@link recommend.GetRecommendPostsIdResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof recommend.GetRecommendPostsIdResult
         * @static
         * @param {recommend.IGetRecommendPostsIdResult} message GetRecommendPostsIdResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecommendPostsIdResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRecommendPostsIdResult message from the specified reader or buffer.
         * @function decode
         * @memberof recommend.GetRecommendPostsIdResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {recommend.GetRecommendPostsIdResult} GetRecommendPostsIdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecommendPostsIdResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.recommend.GetRecommendPostsIdResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.recommend.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.postIdList && message.postIdList.length))
                        message.postIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.postIdList.push(reader.int32());
                    } else
                        message.postIdList.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRecommendPostsIdResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof recommend.GetRecommendPostsIdResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {recommend.GetRecommendPostsIdResult} GetRecommendPostsIdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecommendPostsIdResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRecommendPostsIdResult message.
         * @function verify
         * @memberof recommend.GetRecommendPostsIdResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRecommendPostsIdResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.recommend.Result.verify(message.result);
                if (error)
                    return "result." + error;
            }
            if (message.postIdList != null && message.hasOwnProperty("postIdList")) {
                if (!Array.isArray(message.postIdList))
                    return "postIdList: array expected";
                for (var i = 0; i < message.postIdList.length; ++i)
                    if (!$util.isInteger(message.postIdList[i]))
                        return "postIdList: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a GetRecommendPostsIdResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof recommend.GetRecommendPostsIdResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {recommend.GetRecommendPostsIdResult} GetRecommendPostsIdResult
         */
        GetRecommendPostsIdResult.fromObject = function fromObject(object) {
            if (object instanceof $root.recommend.GetRecommendPostsIdResult)
                return object;
            var message = new $root.recommend.GetRecommendPostsIdResult();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".recommend.GetRecommendPostsIdResult.result: object expected");
                message.result = $root.recommend.Result.fromObject(object.result);
            }
            if (object.postIdList) {
                if (!Array.isArray(object.postIdList))
                    throw TypeError(".recommend.GetRecommendPostsIdResult.postIdList: array expected");
                message.postIdList = [];
                for (var i = 0; i < object.postIdList.length; ++i)
                    message.postIdList[i] = object.postIdList[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRecommendPostsIdResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof recommend.GetRecommendPostsIdResult
         * @static
         * @param {recommend.GetRecommendPostsIdResult} message GetRecommendPostsIdResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRecommendPostsIdResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.postIdList = [];
            if (options.defaults)
                object.result = null;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.recommend.Result.toObject(message.result, options);
            if (message.postIdList && message.postIdList.length) {
                object.postIdList = [];
                for (var j = 0; j < message.postIdList.length; ++j)
                    object.postIdList[j] = message.postIdList[j];
            }
            return object;
        };

        /**
         * Converts this GetRecommendPostsIdResult to JSON.
         * @function toJSON
         * @memberof recommend.GetRecommendPostsIdResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRecommendPostsIdResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRecommendPostsIdResult;
    })();

    return recommend;
})();

module.exports = $root;

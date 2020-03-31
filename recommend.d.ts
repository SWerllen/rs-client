import * as $protobuf from "protobufjs";
/** Namespace recommend. */
export namespace recommend {

    /** Represents a RecommendController */
    class RecommendController extends $protobuf.rpc.Service {

        /**
         * Constructs a new RecommendController service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new RecommendController service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RecommendController;

        /**
         * Calls GetRecommendPostsId.
         * @param request GetRecommendPostsIdInput message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRecommendPostsIdResult
         */
        public getRecommendPostsId(request: recommend.IGetRecommendPostsIdInput, callback: recommend.RecommendController.GetRecommendPostsIdCallback): void;

        /**
         * Calls GetRecommendPostsId.
         * @param request GetRecommendPostsIdInput message or plain object
         * @returns Promise
         */
        public getRecommendPostsId(request: recommend.IGetRecommendPostsIdInput): Promise<recommend.GetRecommendPostsIdResult>;
    }

    namespace RecommendController {

        /**
         * Callback as used by {@link recommend.RecommendController#getRecommendPostsId}.
         * @param error Error, if any
         * @param [response] GetRecommendPostsIdResult
         */
        type GetRecommendPostsIdCallback = (error: (Error|null), response?: recommend.GetRecommendPostsIdResult) => void;
    }

    /** Properties of a Result. */
    interface IResult {

        /** Result success */
        success?: (boolean|null);

        /** Result reason */
        reason?: (string|null);
    }

    /** Represents a Result. */
    class Result implements IResult {

        /**
         * Constructs a new Result.
         * @param [properties] Properties to set
         */
        constructor(properties?: recommend.IResult);

        /** Result success. */
        public success: boolean;

        /** Result reason. */
        public reason: string;

        /**
         * Creates a new Result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Result instance
         */
        public static create(properties?: recommend.IResult): recommend.Result;

        /**
         * Encodes the specified Result message. Does not implicitly {@link recommend.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: recommend.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link recommend.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: recommend.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): recommend.Result;

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): recommend.Result;

        /**
         * Verifies a Result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Result
         */
        public static fromObject(object: { [k: string]: any }): recommend.Result;

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @param message Result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: recommend.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRecommendPostsIdInput. */
    interface IGetRecommendPostsIdInput {

        /** GetRecommendPostsIdInput userId */
        userId?: (number|null);

        /** GetRecommendPostsIdInput offset */
        offset?: (number|null);

        /** GetRecommendPostsIdInput number */
        number?: (number|null);
    }

    /** Represents a GetRecommendPostsIdInput. */
    class GetRecommendPostsIdInput implements IGetRecommendPostsIdInput {

        /**
         * Constructs a new GetRecommendPostsIdInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: recommend.IGetRecommendPostsIdInput);

        /** GetRecommendPostsIdInput userId. */
        public userId: number;

        /** GetRecommendPostsIdInput offset. */
        public offset: number;

        /** GetRecommendPostsIdInput number. */
        public number: number;

        /**
         * Creates a new GetRecommendPostsIdInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecommendPostsIdInput instance
         */
        public static create(properties?: recommend.IGetRecommendPostsIdInput): recommend.GetRecommendPostsIdInput;

        /**
         * Encodes the specified GetRecommendPostsIdInput message. Does not implicitly {@link recommend.GetRecommendPostsIdInput.verify|verify} messages.
         * @param message GetRecommendPostsIdInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: recommend.IGetRecommendPostsIdInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRecommendPostsIdInput message, length delimited. Does not implicitly {@link recommend.GetRecommendPostsIdInput.verify|verify} messages.
         * @param message GetRecommendPostsIdInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: recommend.IGetRecommendPostsIdInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecommendPostsIdInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecommendPostsIdInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): recommend.GetRecommendPostsIdInput;

        /**
         * Decodes a GetRecommendPostsIdInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRecommendPostsIdInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): recommend.GetRecommendPostsIdInput;

        /**
         * Verifies a GetRecommendPostsIdInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRecommendPostsIdInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRecommendPostsIdInput
         */
        public static fromObject(object: { [k: string]: any }): recommend.GetRecommendPostsIdInput;

        /**
         * Creates a plain object from a GetRecommendPostsIdInput message. Also converts values to other types if specified.
         * @param message GetRecommendPostsIdInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: recommend.GetRecommendPostsIdInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRecommendPostsIdInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRecommendPostsIdResult. */
    interface IGetRecommendPostsIdResult {

        /** GetRecommendPostsIdResult result */
        result?: (recommend.IResult|null);

        /** GetRecommendPostsIdResult postIdList */
        postIdList?: (number[]|null);
    }

    /** Represents a GetRecommendPostsIdResult. */
    class GetRecommendPostsIdResult implements IGetRecommendPostsIdResult {

        /**
         * Constructs a new GetRecommendPostsIdResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: recommend.IGetRecommendPostsIdResult);

        /** GetRecommendPostsIdResult result. */
        public result?: (recommend.IResult|null);

        /** GetRecommendPostsIdResult postIdList. */
        public postIdList: number[];

        /**
         * Creates a new GetRecommendPostsIdResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecommendPostsIdResult instance
         */
        public static create(properties?: recommend.IGetRecommendPostsIdResult): recommend.GetRecommendPostsIdResult;

        /**
         * Encodes the specified GetRecommendPostsIdResult message. Does not implicitly {@link recommend.GetRecommendPostsIdResult.verify|verify} messages.
         * @param message GetRecommendPostsIdResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: recommend.IGetRecommendPostsIdResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRecommendPostsIdResult message, length delimited. Does not implicitly {@link recommend.GetRecommendPostsIdResult.verify|verify} messages.
         * @param message GetRecommendPostsIdResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: recommend.IGetRecommendPostsIdResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecommendPostsIdResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecommendPostsIdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): recommend.GetRecommendPostsIdResult;

        /**
         * Decodes a GetRecommendPostsIdResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRecommendPostsIdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): recommend.GetRecommendPostsIdResult;

        /**
         * Verifies a GetRecommendPostsIdResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRecommendPostsIdResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRecommendPostsIdResult
         */
        public static fromObject(object: { [k: string]: any }): recommend.GetRecommendPostsIdResult;

        /**
         * Creates a plain object from a GetRecommendPostsIdResult message. Also converts values to other types if specified.
         * @param message GetRecommendPostsIdResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: recommend.GetRecommendPostsIdResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRecommendPostsIdResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

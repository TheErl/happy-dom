import IMessagePort from "./IMessagePort.js";

/**
 * Message channel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel
 */
export default interface IMessageChannel {
	port1: IMessagePort;
	port2: IMessagePort;
}

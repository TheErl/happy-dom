import IMessageChannel from "./IMessageChannel.js";
import IMessagePort from "./IMessagePort.js";
import MessagePort from "./MessagePort.js";

/**
 * Message channel.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel
 */
export default class MessageChannel implements IMessageChannel {
	public port1: IMessagePort;
	public port2: IMessagePort;

	constructor() {
		// Создание портов в конструкторе
		this.port1 = new MessagePort();
		this.port2 = new MessagePort();
	}
}

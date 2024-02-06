import EventTarget from './EventTarget.js';
import IMessagePort from './IMessagePort.js';

/**
 * Message port.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MessagePort
 */
export default class MessagePort extends EventTarget implements IMessagePort {
	private queuedMessages: unknown[] = [];
	private isOpen: boolean = true;

	/**
	 * Sends a message from the port, and optionally, transfers ownership of objects to other browsing contexts.
	 *
	 * @param _message Message.
	 * @param _transferList Transfer list.
	 */
	public postMessage(_message: unknown, _transferList: unknown[]): void {
		if (this.isOpen) {
			// Simulate posting message
			console.log('Message posted:', _message);
		} else {
			throw new Error('Port is closed. Cannot post message.');
		}
	}

	/**
	 * Starts the sending of messages queued on the port.
	 */
	public start(): void {
		if (this.isOpen) {
			// Simulate starting sending of queued messages
			console.log('Message sending started.');
			this.queuedMessages.forEach(message => {
				console.log('Sending queued message:', message);
			});
			this.queuedMessages = [];
		} else {
			throw new Error('Port is closed. Cannot start sending messages.');
		}
	}

	/**
	 * Disconnects the port, so it is no longer active. This stops the flow of messages to that port.
	 */
	public close(): void {
		// Simulate closing the port
		console.log('Port closed.');
		this.isOpen = false;
	}
}


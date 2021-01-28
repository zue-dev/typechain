import * as CryptoJS from 'crypto-js';

class Block {
	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timeStamp: number;

	static calculateBlockHash = (
		index: number,
		previousHash: string,
		data: string,
		timeStamp: number
	): string =>
		CryptoJS.SHA256(index + previousHash + data + timeStamp).toString();

	static validateStructure = (aBlock: Block): boolean =>
		typeof aBlock.index === 'number' &&
		typeof aBlock.hash === 'string' &&
		typeof aBlock.data === 'string' &&
		typeof aBlock.previousHash === 'string' &&
		typeof aBlock.timeStamp === 'number';

	constructor(
		index: number,
		hash: string,
		previousHash: string,
		data: string,
		timeStamp: number
	) {
		this.index = index;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.timeStamp = timeStamp;
	}
}

const genesisBlock = new Block(0, '202020202020', '', 'Hello', 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data: string): Block => {
	const previousBlock: Block = getLatestBlock();
	const newIndex: number = previousBlock.index + 1;
	const newTimeStamp: number = getNewTimeStamp();
	const newHash: string = Block.calculateBlockHash(
		newIndex,
		previousBlock.hash,
		data,
		newTimeStamp
	);
	const newBlock: Block = new Block(
		newIndex,
		newHash,
		previousBlock.hash,
		data,
		newTimeStamp
	);

	return newBlock;
};

const isBlockValid = (candidate: Block, previousBlock: Block): boolean => {
	if (!Block.validateStructure(candidate)) {
		return false;
	} else if (previousBlock.index + 1 !== candidate.index) {
		return false;
	} else if (previousBlock.hash !== candidate.hash) {
		return false;
	}
};

console.log(createNewBlock('Hello'), createNewBlock('bey bey'));

export {};

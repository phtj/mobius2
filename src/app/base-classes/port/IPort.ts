import {InputPortTypes} from "./InputPortTypes";
import {OutputPortTypes} from "./OutputPortTypes";

export interface IPort{


	getId(): string;
	getType(): InputPortTypes|OutputPortTypes;

	setType(type: InputPortTypes|OutputPortTypes): void;
	setOpts(opts: any);
	getOpts(opts: any);

	isSelected(): boolean;
	isDisabled(): boolean;
	disable(): void;
	enable(): void;

	update(portData: IPort): void;

	getName(): string;
	setName(name: string): void; 

	setIsFunction(): void;
	isFunction(): boolean;

	isConnected(): boolean;
	connect(): void;
	disconnect(): void;

	getDefaultValue(): any;
	setDefaultValue(value: any): void; 
	setComputedValue(value: any): void;

	getValue(): any;

	reset(); 
}


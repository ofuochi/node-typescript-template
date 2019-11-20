import { IsEmail, IsNotEmpty, IsUrl, MaxLength } from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

import { MAX_NAME_LENGTH } from '../../user/constants';

export class CallbackUrlPropsInput {
	@ApiModelProperty({
		required: true,
		maxLength: MAX_NAME_LENGTH
	})
	@MaxLength(MAX_NAME_LENGTH)
	@IsEmail()
	email: string;
	@ApiModelProperty({
		required: true,
		maxLength: MAX_NAME_LENGTH
	})
	@MaxLength(MAX_NAME_LENGTH)
	@IsUrl()
	clientBaseUrl: string;
	@ApiModelProperty({
		required: true,
		maxLength: MAX_NAME_LENGTH
	})
	@MaxLength(MAX_NAME_LENGTH)
	@IsNotEmpty()
	verificationCodeParameterName: string;
	@ApiModelProperty({
		required: true,
		maxLength: MAX_NAME_LENGTH
	})
	@MaxLength(MAX_NAME_LENGTH)
	@IsNotEmpty()
	emailParameterName: string;
}

import { CommandModule } from 'nestjs-command';
import { TypegooseModule } from 'nestjs-typegoose';

import { Module } from '@nestjs/common';

import { AccountModule } from './account/account.module';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { TenantModule } from './tenant/tenant.module';
import { UserModule } from './user/user.module';

const typegooseConfig = TypegooseModule.forRootAsync({
	imports: [ConfigModule],
	useFactory: async (config: ConfigService) => ({
		uri: config.env.mongoDbUri,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	}),
	inject: [ConfigService]
});
@Module({
	imports: [
		AuthModule,
		ConfigModule,
		CommandModule,
		UserModule,
		TenantModule,
		typegooseConfig,
		AccountModule
	],
	providers: [AppService]
})
export class AppModule {}

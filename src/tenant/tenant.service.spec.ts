import { Test, TestingModule } from "@nestjs/testing";
import { TypegooseModule } from "nestjs-typegoose";
import { TenantRepository } from "./repository/tenant.repository";
import { TenantController } from "./tenant.controller";
import { Tenant } from "./tenant.entity";
import { TenantService } from "./tenant.service";
import { ConfigModule } from "../config/config.module";
import { ConfigService } from "../config/config.service";

describe("TenantService", () => {
	let service: TenantService;

	beforeEach(async () => {
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
		const module: TestingModule = await Test.createTestingModule({
			imports: [typegooseConfig, TypegooseModule.forFeature([Tenant])],
			exports: [TenantService, TenantRepository],
			providers: [TenantService, TenantRepository],
			controllers: [TenantController]
		}).compile();

		service = module.get<TenantService>(TenantService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});

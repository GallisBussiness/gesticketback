import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './auth/auth.middleware';
import { DecadaireModule } from './decadaire/decadaire.module';
import { FicheModule } from './fiche/fiche.module';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';
import { ProductionModule } from './production/production.module';
import { CantineModule } from './cantine/cantine.module';
import { PaymentCantineModule } from './payment-cantine/payment-cantine.module';
import { AttributionModule } from './attribution/attribution.module';
import { HyqualiteModule } from './hyqualite/hyqualite.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
        autoCreate: true,
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '24h' },
        };
      },
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot(),
    DecadaireModule,
    FicheModule,
    TicketModule,
    UserModule,
    ProductionModule,
    CantineModule,
    PaymentCantineModule,
    AttributionModule,
    HyqualiteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}

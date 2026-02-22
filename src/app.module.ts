import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://fashion-cart-sjai:%23%25Devsati&&110096@fashioncart.sq8kteg.mongodb.net/NestDB?retryWrites=true&w=majority',
    ),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

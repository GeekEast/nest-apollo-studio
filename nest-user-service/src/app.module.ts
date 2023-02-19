import { UsersModule } from './users/users/users.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServerPluginInlineTrace } from 'apollo-server-core';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: './schema.gql',
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault(),
        ApolloServerPluginInlineTrace(),
      ],
    }),
  ],
})
export class AppModule {}

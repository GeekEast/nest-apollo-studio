import { PostsModule } from './posts/posts.module';
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
    PostsModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: './schema.gql',
      playground: false,
      plugins: [
        ApolloServerPluginInlineTrace(),
        ApolloServerPluginLandingPageLocalDefault(),
      ],
    }),
  ],
})
export class AppModule {}

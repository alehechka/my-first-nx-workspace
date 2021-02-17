import { Query, Resolver } from 'type-graphql';

@Resolver()
export class TestResolver {
  @Query(() => String)
  async query() {
    return 'this is a query';
  }
}

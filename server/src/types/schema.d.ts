// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    users: Array<IUser>;
  }

  interface IUser {
    __typename: 'User';
    id: string;
    name: string;
    email: string;
  }

  interface IMutation {
    __typename: 'Mutation';
    signup: IAuthPayload | null;
    login: IAuthPayload | null;
  }

  interface ISignupOnMutationArguments {
    name: string;
    email: string;
    password: string;
  }

  interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }

  interface IAuthPayload {
    __typename: 'authPayload';
    token: string;
    user: IUser;
  }
}

// tslint:enable

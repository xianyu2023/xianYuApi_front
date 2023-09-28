declare namespace API {
  type BaseResponseboolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseListOpenApi = {
    code?: number;
    data?: OpenApi[];
    message?: string;
  };

  type BaseResponseListOpenApiVO = {
    code?: number;
    data?: OpenApiVO[];
    message?: string;
  };

  type BaseResponseListUserOpenApi = {
    code?: number;
    data?: UserOpenApi[];
    message?: string;
  };

  type BaseResponseListUserOpenApiVO = {
    code?: number;
    data?: UserOpenApiVO[];
    message?: string;
  };

  type BaseResponseListUserVO = {
    code?: number;
    data?: UserVO[];
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMapstringobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseOpenApi = {
    code?: number;
    data?: OpenApi;
    message?: string;
  };

  type BaseResponsePageOpenApi = {
    code?: number;
    data?: PageOpenApi;
    message?: string;
  };

  type BaseResponsePageUserOpenApi = {
    code?: number;
    data?: PageUserOpenApi;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponseSearchAllVO = {
    code?: number;
    data?: SearchAllVO;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserOpenApi = {
    code?: number;
    data?: UserOpenApi;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getOpenApiByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserOpenApiByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserOpenApiRelationUsingGETParams = {
    current?: number;
    id?: number;
    leftNum?: number;
    openApiId?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type listOpenApiByPageUsingGETParams = {
    current?: number;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    origin?: string;
    pageSize?: number;
    requestHeader?: string;
    responseHeader?: string;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type listOpenApiUsingGETParams = {
    current?: number;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    origin?: string;
    pageSize?: number;
    requestHeader?: string;
    responseHeader?: string;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type listUserByPageUsingGETParams = {
    createTime?: string;
    current?: number;
    gender?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type listUserOpenApiByPageUsingGETParams = {
    current?: number;
    id?: number;
    leftNum?: number;
    openApiId?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type listUserOpenApiUsingGETParams = {
    current?: number;
    id?: number;
    leftNum?: number;
    openApiId?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type listUserUsingGETParams = {
    createTime?: string;
    current?: number;
    gender?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type OpenApi = {
    createTime?: string;
    description?: string;
    id?: number;
    isDeleted?: number;
    method?: string;
    name?: string;
    origin?: string;
    path?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type OpenApiAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    url?: string;
    userId?: number;
  };

  type OpenApiInvokeRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userRequestParams?: string;
  };

  type OpenApiUpdateRequest = {
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    url?: string;
  };

  type OpenApiVO = {
    createTime?: string;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    path?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    totalNums?: number;
    updateTime?: string;
    userId?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type Pageobject = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOpenApi = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OpenApi[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOpenApiVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OpenApiVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserOpenApi = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserOpenApi[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type SearchAllRequest = {
    current?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    type?: string;
  };

  type SearchAllVO = {
    botianOpenApiVOList?: PageOpenApiVO;
    dataList?: Pageobject;
    localOpenApiVOList?: PageOpenApiVO;
  };

  type User = {
    accessKey?: string;
    createTime?: string;
    gender?: number;
    id?: number;
    isDelete?: number;
    secretKey?: string;
    status?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    gender?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserOpenApi = {
    createTime?: string;
    id?: number;
    isDeleted?: number;
    leftNum?: number;
    openApiId?: number;
    status?: number;
    totalNum?: number;
    updateTime?: string;
    userId?: number;
  };

  type UserOpenApiAddRequest = {
    leftNum?: number;
    openApiId?: number;
    totalNum?: number;
    userId?: number;
  };

  type UserOpenApiUpdateRequest = {
    id?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
  };

  type UserOpenApiVO = {
    id?: number;
    leftNum?: number;
    name?: string;
    openApiId?: number;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateRequest = {
    gender?: number;
    id?: number;
    status?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    gender?: number;
    id?: number;
    status?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };
}

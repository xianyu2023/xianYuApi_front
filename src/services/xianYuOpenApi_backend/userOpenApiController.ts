// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserOpenApi POST /api/userOpenApi/add */
export async function addUserOpenApiUsingPOST(
  body: API.UserOpenApiAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/userOpenApi/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserOpenApi POST /api/userOpenApi/delete */
export async function deleteUserOpenApiUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/userOpenApi/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserOpenApiById GET /api/userOpenApi/get */
export async function getUserOpenApiByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserOpenApiByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserOpenApi>('/api/userOpenApi/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserOpenApiRelation GET /api/userOpenApi/get/relation */
export async function getUserOpenApiRelationUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserOpenApiRelationUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/userOpenApi/get/relation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserOpenApiByUserId GET /api/userOpenApi/get/relation/userId */
export async function getUserOpenApiByUserIdUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUserOpenApiVO>('/api/userOpenApi/get/relation/userId', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listUserOpenApi GET /api/userOpenApi/list */
export async function listUserOpenApiUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserOpenApiUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserOpenApi>('/api/userOpenApi/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserOpenApiByPage GET /api/userOpenApi/list/page */
export async function listUserOpenApiByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserOpenApiByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserOpenApi>('/api/userOpenApi/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateUserOpenApi POST /api/userOpenApi/update */
export async function updateUserOpenApiUsingPOST(
  body: API.UserOpenApiUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/userOpenApi/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addOpenApi POST /api/openApi/add */
export async function addOpenApiUsingPOST(
  body: API.OpenApiAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/openApi/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteOpenApi POST /api/openApi/delete */
export async function deleteOpenApiUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/openApi/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getOpenApiById GET /api/openApi/get */
export async function getOpenApiByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOpenApiByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseOpenApi>('/api/openApi/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** invokeOpenApi POST /api/openApi/invoke */
export async function invokeOpenApiUsingPOST(
  body: API.OpenApiInvokeRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseobject>('/api/openApi/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listOpenApi GET /api/openApi/list */
export async function listOpenApiUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listOpenApiUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListOpenApi>('/api/openApi/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listOpenApiByPage GET /api/openApi/list/page */
export async function listOpenApiByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listOpenApiByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageOpenApi>('/api/openApi/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** offlineOpenApi POST /api/openApi/offline */
export async function offlineOpenApiUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/openApi/offline', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** onlineOpenApi POST /api/openApi/online */
export async function onlineOpenApiUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/openApi/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateOpenApi POST /api/openApi/update */
export async function updateOpenApiUsingPOST(
  body: API.OpenApiUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/openApi/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

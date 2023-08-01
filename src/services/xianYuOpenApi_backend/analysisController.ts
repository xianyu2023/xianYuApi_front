// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getTopOpenApiInvoke GET /api/analysis/openApi/invoke/top */
export async function getTopOpenApiInvokeUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListOpenApiVO>('/api/analysis/openApi/invoke/top', {
    method: 'GET',
    ...(options || {}),
  });
}

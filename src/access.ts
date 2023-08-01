/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * ant design pro內置的权限管理机制
 * */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser: loginUser,
    canAdmin: loginUser?.userRole === 'admin',
  };
}

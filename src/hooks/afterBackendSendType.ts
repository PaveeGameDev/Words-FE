export type AfterBackendSendType<T> = {
  data: T;
  isLoading: boolean;
  error: boolean | null;
};

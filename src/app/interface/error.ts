export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorRedponses = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};

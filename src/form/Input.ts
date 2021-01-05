export type InputState = {
  status: Status;
  message: string;
};

export enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Neutral = "Neutral",
}

import { InputState, Status } from "../form/Input";

export function validateName(name: string): InputState {
  if (hasValidCharacters(name) && hasValidLength(name)) {
    const success: InputState = { status: Status.Success, message: "" };
    return success;
  } else if (!hasValidCharacters(name)) {
    const error: InputState = {
      status: Status.Error,
      message: `Invalid characters. Name contains numbers or special characters`,
    };
    return error;
  } else if (!hasValidLength(name)) {
    const error: InputState = {
      status: Status.Error,
      message: `Invalid length`,
    };
    return error;
  }

  const error: InputState = {
    status: Status.Error,
    message: `Please try again.`,
  };
  return error;
}

function hasValidLength(name: string): boolean {
  const MIN_CHARS = 1;
  const MAX_CHARS = 35;

  if (name.length >= MIN_CHARS && name.length <= MAX_CHARS) {
    return true;
  }
  return false;
}

function hasValidCharacters(name: string) {
  const unacceptedChars = /^([_A-z|-])*$/;
  return unacceptedChars.test(name);
}

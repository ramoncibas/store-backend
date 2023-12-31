class UserError extends Error {
  private errorCode: number;
  private originalError?: any;

  constructor(message: string, error?: any, errorCode: number = 500) {
    super(message);
    this.name = 'UserError';
    this.errorCode = errorCode;
    this.originalError = error;
    this.logError(); // future implementation: Error.captureStackTrace(this, CustomerError);
  }

  private logError(): void {
    if (this.originalError) {
      // using a logging library (sentry, or something)
      console.error(`UserError: ${this.message}`, this.originalError);
    }
  }

  getErrorCode(): number {
    return this.errorCode;
  }

  toResponseObject(): any {
    return {
      status: "error",
      errorCode: this.errorCode,
      message: this.message || UserError.default(),
      data: null,
    };
  }

  static default(): UserError {
    return new UserError("Something went wrong!");
  }

  static userNotFound(): UserError {
    return new UserError("User not found!", 404);
  }

  static invalidInput(): UserError {
    return new UserError("Invalid input provided.", 400);
  }

  static unauthorized(): UserError {
    return new UserError("Unauthorized access.", 401);
  }

  static userAlreadyExists(): UserError {
    return new UserError("User already exists!", 409);
  }

  static userUpdateFailed(): UserError {
    return new UserError("Failed to update the user.", 500);
  }

  static userDeletionFailed(): UserError {
    return new UserError("Failed to delete the user.", 500);
  }
}

export default UserError;

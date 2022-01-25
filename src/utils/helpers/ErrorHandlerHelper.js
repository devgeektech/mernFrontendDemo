export default class ErrorHandlerHelper {
  rawError

  error = {
    code: 500,
    isError: true,
    timestamp: Date.now(),
    error: 'Unknown error',
    messages: [],
    data: undefined,
  }

  constructor(err) {
    this.rawError = err
    this.setError()
  }

  setError = () => {
    this.error.code =
      this.rawError && this.rawError.status
        ? this.rawError.status
        : this.error.code
    this.error.timestamp = Date.now()
    this.error.messages = []
    this.error.data = ''
    if (
      this.rawError &&
      this.rawError.data &&
      typeof this.rawError.data === 'object'
    ) {
      this.error.messages.push(
        this.rawError.data.message
          ? this.rawError.data.message
          : this.rawError.data.error
      )
      this.error.data = this.rawError.data.data
      this.error.validationErrors = this.rawError.data.errors
    } else {
      this.error.error = 'Unknown'
      this.error.messages = ['An unexpected error occured.']
    }
  }
}

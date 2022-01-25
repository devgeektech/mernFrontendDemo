export default class SuccessHandlerHelper {
  rawData

  data = {
    code: 200,
    isError: false,
    timestamp: Date.now(),
    error: undefined,
    messages: [],
  }

  constructor(data) {
    this.rawData = data
    this.setSucccess()
  }

  setSucccess = () => {
    this.data.data = this.rawData
    this.data.messages[0] = this.rawData.message
  }
}

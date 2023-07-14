export const extensionIdentifier = 'gptinterface'
export const extensionName = 'GPTInterface'

export const actions = {
  helloWorld: 'helloWorld',
  invokeAction: 'invokeAction'
}

export const getCommand = (key: keyof typeof actions) => `${extensionIdentifier}.${actions[key]}`
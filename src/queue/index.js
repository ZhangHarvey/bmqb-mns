import MNSAdapter from './adapter/mns';

const adapters = {
  'mns': MNSAdapter,
};

export default class Queue {
  constructor(adapter, config) {
    if (!adapter || !(adapter in adapters)) {
      throw new Error('invalid adapter');
    }
    return new adapters[adapter](config);
  }
}

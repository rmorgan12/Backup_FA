import BleManager from 'react-native-ble-manager';

class BluetoothManager {
  constructor() {
    BleManager.start({showAlert: false});
  }

  scan() {
    return new Promise((resolve, reject) => {
      BleManager.scan([], 5, true)
        .then(results => {
          resolve(results);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  connect(deviceId) {
    return new Promise((resolve, reject) => {
      BleManager.connect(deviceId)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  disconnect(deviceId) {
    return new Promise((resolve, reject) => {
      BleManager.disconnect(deviceId)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  write(deviceId, serviceUUID, characteristicUUID, data) {
    return new Promise((resolve, reject) => {
      BleManager.write(deviceId, serviceUUID, characteristicUUID, data)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  read(deviceId, serviceUUID, characteristicUUID) {
    return new Promise((resolve, reject) => {
      BleManager.read(deviceId, serviceUUID, characteristicUUID)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default new BluetoothManager();

# sample-mqtt-abrupt-disconnect
Code snippet ot test mqtt abrupt disconnect and will mechanism. 

## How to use

Install dependencies: 
```
npm install
```

Run the mqtt client: 
```
node index.js
```

It will stop the process midway without cleaning up the network socket properly, simulating abrupt network outage. 

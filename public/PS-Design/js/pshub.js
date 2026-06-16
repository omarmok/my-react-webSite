//"use strict"
//const token = localStorage.getItem("access_token");
//const connection = new signalR.HubConnectionBuilder()
//    .withUrl(hubUrl + "pshub", {
//        accessTokenFactory: () => token
//    })
//    .withAutomaticReconnect({
//        nextRetryDelayInMilliseconds: retrycontext => {
//            if (retrycontext.elapsedmilliseconds < 60000) {
//                return math.random() * 10000;
//            } else {
//                return null;
//            }
//        }
//    })
//    .configureLogging(signalR.LogLevel.Information)
//    .build();

//connection.serverTimeoutInMilliSeconds = 1000000000;

//async function start() {
//    try {
//        await connection.start();
//    } catch (ex) {
//    }
//}

//connection.onclose(async () => {
//    await start();
//});

//// start the connection.
//start();


function listenToHubMethod(methodname = "receivemessage", callback) {
//    connection.on(methodname, (dto) => {
//        callback(dto);
//    });
}



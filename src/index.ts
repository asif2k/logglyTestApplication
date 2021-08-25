import "./styles.css";


window.addEventListener("load", () => {
    var customer_token = "151cf97a-2811-4399-b21f-c9eeeebd2280";
    let LTracker = (window as any)._LTracker || [];
    LTracker.push({
        logglyKey: customer_token,
        sendConsoleErrors: true,
        tag: "Loggly Test Application",
    });

    document.getElementById("logSimpleText").onclick = () => {
        LTracker.push({
            'tag': 'Loggly Test Application',
            'text': 'Log simple text',
        });

        alert("Simple text was logged");
    }

    document.getElementById("logCurrentDateObject").onclick = () => {
        LTracker.push({
            'tag': 'Loggly Test Application',
            'text': 'log current date object',
            'anObject': {
                'id': 100,
                'value': (new Date())
            }
        });

        alert("Current data object was logged");
    }

    document.getElementById("triggerErrorAndLogStackTrace").onclick = () => {
        try {
            ((new Date()) as any).getDate1()
        }
        catch (e) {
            console.log(e);
            LTracker.push({
                'tag': 'Loggly Test Application',
                'text': 'Trigger Error and Log Stack Trace',
                'anObject': {
                    'id': 1024,
                    'value': e.stack
                }
            });

            alert("Stack trace object was logged");
        }

    }


    document.getElementById("logFunctionsArguments").onclick = () => {
        function testFunction(...args: any[]) {
            LTracker.push({
                'tag': 'Loggly Test Application',
                'text': 'log functions arguments array',
                'anObject': {
                    'id': 2000,
                    'value': arguments
                }
            });

            alert("Function arguments array as logged");
        }

        testFunction("arg1", ["a", "b", "c"], window.location)

    }

})
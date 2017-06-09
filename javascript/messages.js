var queryURL




$("#scheduleMessageButton").click(function(event){
    
        // alert("Data: " + data + "\nStatus: " + status);
        event.preventDefault();
        var smsMessage = $("#message-input").val();
				var dateMonth = $("#date-input").val().split("-");
				var cTime = $("#time-input").val().split(":");      
				var date = dateMonth[2];
				var month = dateMonth[1];
				var min = cTime[1];
				var hour = cTime[0];				
				queryURL = "http://localhost:8080/api/remind/4805289474/" + smsMessage + "/0/" + min + "/" + hour + "/" + date + "/" + month + "/*"
    
    // $.post(queryURL);

    $.ajax({

	    url: queryURL,
	    // data: myData,
	    type: 'POST',
	    crossDomain: true,
	    dataType: 'jsonp'
	    
	    
		});

  });


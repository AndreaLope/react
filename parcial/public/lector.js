var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 &amp;&amp; this.status == 200)
        {
            var dataArray = JSON.parse(this.responseText);

            var i, j;
            var displayData = "";

            for (i in dataArray.menu)
            {
                for (j in dataArray.menu[i].description)
                {
                    displayData += "<b>Text: </b> " + dataArray.menu[j].text + "<br>";
                    displayData += "<br><hr>";
                }
            }
        }

        document.getElementById("displayData").innerHTML = displayData;
        };
        
        xmlhttp.open("GET", "valore.json", true);
        xmlhttp.send();
//mon compteur w/h


            var i=0;
            function augmenter() {
                i++;
                document.getElementById("compteur").innerHTML = i;
            }
            setInterval("augmenter()", 1000);
       

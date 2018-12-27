$('document').ready(function(){
	// selektori
	
	// Neparni redovi tabele 
    $("tr:odd").css("background", "yellow");
  
    // Parni redovi
    $("tr:even").css("background", "orange");

    $('p').css({
		'padding': '20px',
        'font': "20px sans-serif",
        'background': 'khaki'
    });
    
    // Prvi paragraf 
    $("p:first").css("background", "red");
  
    // Poslednji paragraf 
    $("p:last").css({
        "background": "green",
        "color" : 'white'
    });
  
    /*
    console.log($("p:last").css("background"));
    console.log($("p:last").get().innerHTML);
    let tt = document.querySelector('p');
    console.log(tt +  " " + $(tt).text()); 
    */
    
    // Input elementi text u formi
    $("form :text").css("background", "purple");
  
    // Password 
    $("form :password").css("background", "blue");
  
    // Input elementi submit
    $("form :submit").css("background", "violet");
	
    
    $('table, td, tr').css({
      "border": "solid black 1px",
      "border-collapse": "collapse"
    });
    

    
	// kreiranje novih elemenata
	let t1 = "<p>Text.</p>"; // Pomocu HTML
    let t2 = $("<p></p>").html ("Text.<br />Goran");  //  jQuery
    let t3 = document.createElement("p");
    t3.innerHTML = "Text."; // DOM
	let t4 = $('<div></div>');
	t4.attr({
		"id": 'novi'
	});
	
    $('div,strong,span').css({
		'display':'block',
		"border": "solid blue 2px",
		"margin": "10px",
		'padding': '3px'
	});
	$("body").append(t4); 
    $("#novi").append(t1, t2, t3); // dodajemo nove elemente
	
	// target
	$( "body" ).click(function( event ) {
		$( "#log" ).html( "Clicked: " + event.target.nodeName );
	});
	
	// this
	/*
	$( "table tr" ).on( "click", function() {
		console.log( $( this ).text() );
		console.log("JS " + this.textContent);
	});
	*/
	
	$( "table" ).on( "click", 'tr', function() {
		console.log( $( this ).text() );
		console.log("JS " + this.textContent);
	});
	
	// predavanje parametara handler-u
	function greet( event ) {
	  alert( "Hello " + event.data.name + " "+ event.data.surname );
	}
	
	let btnNew = $('<button></button>');
	btnNew.text('Podaci');
	$('form').append(btnNew);
	var ulaz = $("input[type=text]");
	// console.log(ulaz[0] + ' ' + ulaz.length);
	let transferData = {}; 	
	transferData.name = ulaz[0].value;
	transferData.surname = ulaz[1].value;  
	
	$( "button" ).on( "click", {
			name: "Karl",
			surname:'Marx'
		}, greet );	
	
	//$( "button" ).on( "click", transferData, greet);
	$( "#clickme" ).click(function() {
	  $( "#book" ).animate({"opacity":"0.75", "left":"+=50px","height":"toggle"}, 8000, function(){ $("#novi").text("Klikni opet na Animacija");});
	});

	$('button').css({
		'display' : 'inline-block',
		'width' : '120px',
		'margin' : '5px',
 		'padding' : '5px'
	});
	
    // console.log('Prije Ajax poziva');
    let theDiv = $("<div></div>").attr("id", "theDiv").css('border', 'solid red 1px'); $('body').append(theDiv);
    let btnArr = $("button"); 
    $.each(btnArr, function(i,v){
                console.log(i + " " + btnArr[i]);
            }); 
    /*
    var ajaxCall =
    $.ajax({
        url: "/slatko.json",
        dataType:'json'
    })
    .done (function(data) {
        // alert('OK!');
        $('#theDiv').text(data[0].name + " " + data[1].name); 
    })
    .fail (function(){ alert("Error"); })
    ;
     */
    
    // ucitavanje obicnog html fajla
    /*
    $.ajax({
          url: "test.html",
          cache: false
        })
    .done(function( html ) {
            $( "#theDiv" ).append( html );
    });
      */  
    // ucitavanje xml fajla
    
    $.ajax({
        url: "katalog.xml",
        dataType:'xml'
    })
    .done (function(data) {
        // alert('OK!');
        var x = data.getElementsByTagName("CD"); 
        
        var table = ""; 
        for (i = 0; i < x.length; i++) { 
            table +=           x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            " - " +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            " <br />";
        }

        $('#theDiv').html(table); 
    })
    .fail (function(){ alert("Error"); })
    ;
    
    
    // ucitavanje text fajla
    $.ajax({
          url: "images.txt",
          cache: false
        })
    .done(function( html ) {
            $( "#theDiv" ).append( html );
    })
    .fail (function(){ alert("Error"); })
    ;
});
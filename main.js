    //Responsive
    const menu = document.querySelector('.menu');
    const btn = document.querySelector('.menu-btn');

   btn.addEventListener('click', () => {
        menu.classList.toggle('active')
    }); 

    /* document.querySelector('.menu-btn').onclick = () => {
        menu.classlist.toggle('active');    
    }
    
    window.onscroll = () => {
        menu.classlist.remove('active');
    } */


    //Dark Mode
    const icono = document.getElementById("darkMODE");
    const Main = document.getElementById("darkmode");
    const contact = document.querySelector(".contact");
    const foo = document.getElementById("foo");
    const nav = document.getElementById("nav");

    icono.addEventListener('click', () => {
        Main.classList.toggle('DARK');
        contact.classList.toggle('DARK');
        foo.classList.toggle('DARK');
        icono.classList.toggle('i');
        nav.classList.toggle('DARK');
    });

    //Cambiar Idioma
    const banderaING = document.getElementById("ingles");

    banderaING.addEventListener('click', () => {
        //titulo
        document.getElementById("title").innerHTML = "Advisor Carmen Ortiz"
        //Nav
        document.getElementById("EnglishHome").innerHTML = "Home";
        document.getElementById("EnglishProducts").innerHTML = "Products";
        document.getElementById("EnglishContact").innerHTML = "Contact";
        //Producto
        document.querySelector(".titulo").innerHTML = "Our Product: ";
        document.getElementById("EnglishAdiviser").innerHTML = "Sixteen years of experience in the real estate sector, professional with the knowledge, aptitude and skills necessary to successfully develop the following:";
        //Puntos
        document.getElementById("EnglishPoints1").innerHTML = "<span>1</span>Prospecting real estate for purchase, sale and rent.";
        document.getElementById("EnglishPoints2").innerHTML = "<span>2</span>Knowledge and application of prospecting techniques to identify real estate subject to commercialization.";
        document.getElementById("EnglishPoints3").innerHTML = "<span>3</span>Identify the viability of the sale or rental of the property.";
        document.getElementById("EnglishPoints4").innerHTML = "<span>4</span>Indicate mandatory tax rights to the purchase, sale or rent of the property.";
        document.getElementById("EnglishPoints5").innerHTML = "<span>5</span>Accomplishment of the accompaniment from its prospecting to the signing of the scriptures.";
        //Propiedades
        document.querySelector(".EnglishWeOffer").innerHTML = "We Offer: ";
        document.getElementById("EnglishProps1").innerHTML = "Mine 'El Sol' has an area of ​​4,300 hectares, located in the town of Jalapa, belonging to the municipality of Parras, State of Coahuila, Mexico and has a 50-year mining concession valid until 2063<br><a href='presentaciones/Comparto 'p.p. EL SOL' con usted-convertido (1).pdf'>read more";
        document.getElementById("EnglishProps2").innerHTML = "The San Miguel vineyard is a finely furnished, luxurious house that has its own vineyard to produce wine of the highest quality.<br><a href='presentaciones/Viñedo San Miguel.pdf'>read more";
        document.getElementById("EnglishProps3").innerHTML = "A piece of land located in the southern part of 'Isla Mujeres', Q. Roo. Mexico, Which has a total area of ​​63,000.00 m2. <br> <a href='presentaciones/TERRENO ISLA MUJERES 2019.pdf'>read more";
        document.getElementById("EnglishProps4").innerHTML = "Tequilera has an area of 17,000 m2. With a production capacity of 23,000 liters of tequila that can be increased by an additional 15,000 liters. 100% agave at 55 degrees of alcohol vol. <br> <a href='presentaciones/PRESENTACION TEQUILERA LL.pdf'> read more </a>";
        document.getElementById("EnglishProps5").innerHTML = "Mine 'La Perla' located in Zacatecas with an area of 400 hectares (including land), where you can find mostly lithium (Li) <br> <a href='presentaciones/PDF LA PERLA.pdf'> read more </a>";
        document.getElementById("EnglishProps6").innerHTML = "Lots of land of 10,000 and 14,447 m2 located at Blvd. Kukulcán Km. 14.5 Return San Miguelito Lot 51-A and 51-C, Hotel Zone, Cancun Mexico <br> <a href ='presentaciones/La Ultima Joya en el Caribe   Mexicano.pdf'> read more </a>";
        document.getElementById("EnglishProps7").innerHTML = "Hotel 'Mesones' located on Mesones street, downtown neighborhood, Cuauhtémoc CDMX mayor's office, which has a construction of 1,740.00 m2 and a plot of 525.00 m2. <br> <a href='presentaciones/HOTEL MESONES CDMX.pdf'> read more </a>";
        document.getElementById("EnglishProps8").innerHTML = "Mercury mine, is located in the State of Guerrero bordering the State of Mexico, has a total area of 200 hectares and has a mining concession until October 2056. <br> <a href='presentaciones/MINA DE MERCURIO.pdf'>read more</a>";
        document.getElementById("EnglishProps9").innerHTML = "Land located in the heart of the Riviera Maya, located at kilometer 287 of the Playa del Carmen-Tulúm highway. It has a beach front of 1,500 linear meters. <br> <a href='presentaciones/297 Has Punta Venado PDF.pdf'>read more</a>";
        document.getElementById("EnglishProps10").innerHTML = "Hotel & Suite located in the heart of Playa del Carmen, with 1 and 2 bedroom suites. <br> <a href='presentaciones/BLUE PALMS PLAYA DEL CARMEN.pdf'>read more</a>";
        document.getElementById("EnglishProps11").innerHTML = "Mine located in the limits of the State of Mexico and the State of Guerrero and having an area of 5, 47 hectares, it has three bodies of gold, silver and copper. <br> <a href='presentaciones/MINA ESTADO DE MÉXICO.pdf'>read more</a>";
        document.getElementById("EnglishProps17").innerHTML = "Apartment for rent, all equipped on the fifteenth floor, five minutes from Santa Fe, Mexico City. <br> <a href='presentaciones/Puerta Santa Lucia 2.pdf'>read more</a>";
        document.getElementById("EnglishProps12").innerHTML = "Tequila factory <br> <a href='presentaciones/tequlera2.pdf'>read more</a>";
        document.getElementById("EnglishProps13").innerHTML = "Luxury apartments. <br> <a href='presentaciones/24 depas.pdf'>read more</a>";
        document.getElementById("EnglishProps14").innerHTML = "Land of 39,036 m2 located in the Glorieta Vasco de Quiroga, Santa Fé, Mexico City. <br> <a href='presentaciones/terreno vasco.pdf'>read more</a>";
        document.getElementById("EnglishProps15").innerHTML = "Luxury apartments, located in Division Del Norte, Coyoacán, CDMX. <br> <a href='presentaciones/depas fachas.pdf'>read more</a>";
        document.getElementById("EnglishProps16").innerHTML = "Goldmine. <br> <a href='presentaciones/reservas proyexto cis.pdf'>read more</a>";
        document.getElementById("EnglishProps18").innerHTML = "Rancho Tamuin located in San Luis Potosí, prepared for livestock and agriculture. <br> <a href='presentaciones/rancho.pdf'>read more</a>";
        document.getElementById("EnglishProps19").innerHTML = "Beautiful house facing the sea with a view of Isla Mujeres has 471.74 m2 plus 20 m2 of Federal Zone and 586.33 m2 built without counting the garage. <br> <a href='presentaciones/zona cancun.pdf'>read more</a>";
        document.getElementById("EnglishProps20").innerHTML = "Property located in Tulum, Quintana Roo, Mexico. <br> <a href='presentaciones/kaybe.pdf'>read more</a>";
        document.getElementById("EnglishProps21").innerHTML = "Land of 100 hectares with excellent roads communication suitable for Residential eco tourism project and Commercial areas. <br> <a href='presentaciones/Terreno en Macahuite Pochutla Oaxaca(1)[1721].pdf'>read more</a>";
        document.getElementById("contactEnglish").innerHTML = "¡Lets Talk! ";
        document.getElementById("contactEnglish2").innerHTML = "Full Name <span>*</span>";
        document.getElementById("contactEnglish3").innerHTML = "Email <span>*</span>";
        document.getElementById("contactEnglish4").innerHTML = "Message <span>*</span>";
        document.getElementById("contactEnglish5").innerHTML = "¡Send Message!";
        banderaING.style.borderBottomColor = "#2ED82D";
    })

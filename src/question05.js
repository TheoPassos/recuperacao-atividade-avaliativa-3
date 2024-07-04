import leia, { questionFloat } from "readline-sync";

        var temperatura = questionFloat("Informe a temperatura: ");
        var question = 'Informe para qual medida de temperatura para conversao: ';

        var farenhait = (1.8 * celsius) + 32;
        var kelvin = celsius + 273.15;
        
        ("CELCIUS: " + celsius + "ºC");
        ("FARENHAIT: " + farenhait + "ºF");
        ("KELVIN: " + kelvin + "ºK");
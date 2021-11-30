//https://teachablemachine.withgoogle.com/models/LSFLXphhs/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function photo()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photograph" src="'+data_uri+'" />'
    });
}
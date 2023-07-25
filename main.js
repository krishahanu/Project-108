function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pJpE6L6DR/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
var backgroundnoice = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ '   Detected Cat - '+cat + '   Detected Lion - ' + lion + '   Detected Cow - ' + cow + '   Detected BackgroundNoice - ' + backgroundnoice;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'homepage5_stanbark.gif';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'image_processing20220103-16511-617nmh.gif';
      cat = cat + 1;
    }
    else if (results[0].label == "Roar") {
        img.src = 'lion-roar.gif';
        lion = lion + 1;
    }
    else if (results[0].label == "Mooing") {
        img.src = '1ede70233876c65dec5813a4b4ef1aff.gif';
        cow = cow + 1;
    }
    else{
      img.src = 'listen.gif';
    }
  }
}
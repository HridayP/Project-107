//https://teachablemachine.withgoogle.com/models/4FOw6ATle/

function startClassification() {
    navigator.mediaDevrgb(140, 5, 145){
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', {
        probabilityThreshold: 0.7
    }, modelReady)

}

function modelReady() {
    classifier.classify(gotResults);
}
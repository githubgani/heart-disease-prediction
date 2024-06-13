document.addEventListener('DOMContentLoaded', function() {
    const predictBtn = document.getElementById('predict-btn');
    const predictionResult = document.getElementById('prediction-result');

    predictBtn.addEventListener('click', function() {
        const patientName = document.getElementById('patient-name').value;
        const age = parseInt(document.getElementById('age').value);
        const sex = parseInt(document.getElementById('sex').value);
        const cp = parseInt(document.getElementById('cp').value);
        const trestbps = parseInt(document.getElementById('trestbps').value);
        const chol = parseInt(document.getElementById('chol').value);
        const fbs = parseInt(document.getElementById('fbs').value);
        const restecg = parseInt(document.getElementById('restecg').value);
        const thalach = parseInt(document.getElementById('thalach').value);
        const exang = parseInt(document.getElementById('exang').value);
        const oldpeak = parseFloat(document.getElementById('oldpeak').value);
        const slope = parseInt(document.getElementById('slope').value);
        const ca = parseInt(document.getElementById('ca').value);
        const thal = parseInt(document.getElementById('thal').value);

        // Perform heart disease prediction logic here
        const prediction = predictHeartDisease(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal);

        // Display prediction result
        if (prediction === 1) {
            predictionResult.textContent = `${patientName} - Prediction: Likely to have heart disease(1 --> Defective Heart).`;
            predictionResult.style.color = 'red';
        } else {
            predictionResult.textContent = `${patientName} - Prediction: Unlikely to have heart disease(0 --> Healthy Heart).`;
            predictionResult.style.color = 'green';
        }
    });

    function predictHeartDisease(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal) {
        // Example prediction logic (replace with actual prediction algorithm)
        // This is a basic example, replace with your model or algorithm
        // Example: Simple rule-based prediction (not accurate)
        if (age > 50 && sex === 1 && thalach < 150) {
            return 1; // Likely to have heart disease    
        } else {
            return 0; // Unlikely to have heart disease
        }
    }
});

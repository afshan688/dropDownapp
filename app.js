
const modelsWithFeatures = {Samsung: {
    "Galaxy S23": "120Hz AMOLED Display, Snapdragon 8 Gen 2, 5000mAh Battery",
    "Galaxy A14":  "PLS LCD Display, Exynos 850, 5000mAh Battery",
    "Galaxy Z Fold 5": "Foldable AMOLED, Snapdragon 8 Gen 2, 4400mAh Battery"
},
Apple: {
    "iPhone 15": "A16 Bionic Chip, 48MP Camera, Dynamic Island",
    "iPhone 14 Pro": "A16 Bionic Chip, ProMotion Display, Triple Camera",
    "iPhone SE": "A15 Bionic Chip, 4.7-inch Display, Compact Design"
},
Xiaomi: {
    "Redmi Note 12": "120Hz AMOLED, Snapdragon 4 Gen 1, 5000mAh Battery",
    "Mi 11X": "120Hz AMOLED, Snapdragon 870, 4520mAh Battery",
    "Poco X5": "120Hz AMOLED, Snapdragon 695, 5000mAh Battery"
}
};

const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const resultDiv = document.getElementById('result');

// Update models based on selected brand
brandSelect.addEventListener('change', function () {
    const selectedBrand = this.value;
    modelSelect.innerHTML = '<option value="">--Select Model--</option>';
    if (selectedBrand) {
        Object.keys(modelsWithFeatures[selectedBrand]).forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
        modelSelect.disabled = false;
    } else {
        modelSelect.disabled = true;
    }
});

// Display selected brand and model
document.getElementById('search').addEventListener('click', function () {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    if (brand && model) {
        const features = modelsWithFeatures[brand][model];
        resultDiv.textContent = `Selected Brand: ${brand}, Model: ${model} features ${features}`;
    } else {
        resultDiv.textContent = "Please select both brand and model.";
    }
});

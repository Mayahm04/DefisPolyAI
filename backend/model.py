from transformers import pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import joblib
import os

# -------- IMAGE MODEL --------
classifier = pipeline("image-classification", model="google/mobilenet_v2_1.0_224")

LABEL_MAP = {
    "plastic": "plastique",
    "bottle": "plastique",
    "metal": "métal",
    "glass": "verre",
    "paper": "papier",
    "cardboard": "papier",
    "organic": "organique",
}

def map_label_to_bin(label: str):
    label = label.lower()
    for key in LABEL_MAP:
        if key in label:
            return LABEL_MAP[key]
    return "autre"


def predict_image(img):
    result = classifier(img)[0]['label']
    return map_label_to_bin(result)


# -------- TEXT MODEL --------

MODEL_PATH = "saved_model.pkl"

if os.path.exists(MODEL_PATH):
    vectorizer, clf = joblib.load(MODEL_PATH)
else:
    vectorizer = TfidfVectorizer()
    clf = LogisticRegression()
    X = vectorizer.fit_transform([
        "bouteille plastique",
        "boite conserve metal",
        "journal papier",
        "pot en verre",
        "reste nourriture organique"
    ])
    y = ["plastique", "métal", "papier", "verre", "organique"]
    clf.fit(X, y)
    joblib.dump((vectorizer, clf), MODEL_PATH)


def predict_text(desc: str):
    x = vectorizer.transform([desc])
    return clf.predict(x)[0]

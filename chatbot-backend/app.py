from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
import os

app = Flask(__name__)
CORS(app)  
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
SYSTEM_PROMPT = (
    "Tu es un expert en électricité industrielle et domestique. "
    "Tu donnes toujours des explications claires, simples et compréhensibles. "
    "Tu ne dois jamais utiliser de tableaux, de listes à puces ou de symboles spéciaux. "
    "Tu expliques les choses sous forme de phrases complètes faciles à lire. "
    "Tu donnes des conseils professionnels basés sur les bonnes pratiques en électricité. "
    "Tu restes concis et tu vas directement à l'essentiel."
)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json

    if not data or "message" not in data:
        return jsonify({"error": "Le champ 'message' est requis."}), 400

    user_message = data["message"]

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": user_message},
    ]

    try:
        completion = client.chat.completions.create(
            model="openai/gpt-oss-20b",
            messages=messages,
            temperature=1,
            max_tokens=1024,
            top_p=1,
        )
        response_text = completion.choices[0].message.content

        return jsonify({"reply": response_text})

    except Exception as e:
        print("Erreur Groq API :", e)
        return jsonify({"error": "Erreur interne lors de la génération."}), 500


@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "API Flask Groq fonctionne"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5173, debug=True)

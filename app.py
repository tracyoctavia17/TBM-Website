import os
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# ── ACCURATE API CONFIG ──────────────────────────────────────────
# Uncomment these when you're ready to connect Accurate
# import requests
# ACCURATE_CLIENT_ID     = os.getenv("ACCURATE_CLIENT_ID")
# ACCURATE_CLIENT_SECRET = os.getenv("ACCURATE_CLIENT_SECRET")
# ACCURATE_ACCESS_TOKEN  = os.getenv("ACCURATE_ACCESS_TOKEN")
# ACCURATE_SESSION_ID    = os.getenv("ACCURATE_SESSION_ID")
# ACCURATE_HOST          = os.getenv("ACCURATE_HOST")


# ── ROUTES ──────────────────────────────────────────────────────
@app.route("/")
def index():
    """Serve the main page."""
    return render_template("index.html")


@app.route("/submit-order", methods=["POST"])
def submit_order():
    """
    Receives the order form from the frontend.
    Accurate integration will be added later.
    """
    order_data = request.get_json()

    if not order_data:
        return jsonify({"success": False, "error": "No data received"}), 400

    if not order_data.get("email") or not order_data.get("first_name"):
        return jsonify({"success": False, "error": "Missing required fields"}), 400

    # For now, just print the order to the terminal
    print("New order received:")
    print(f"  Name   : {order_data.get('first_name')} {order_data.get('last_name')}")
    print(f"  Email  : {order_data.get('email')}")
    print(f"  Phone  : {order_data.get('phone')}")
    print(f"  Subject: {order_data.get('subject')}")
    print(f"  Message: {order_data.get('message')}")
    print(f"  Cart   : {order_data.get('cart')}")

    return jsonify({"success": True, "message": "Order received!"})


# ── RUN ─────────────────────────────────────────────────────────
if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request, jsonify
from keycloak import KeycloakAdmin, KeycloakOpenID
import requests
import os



app = Flask(__name__)

# Keycloak Configuration
KEYCLOAK_ADMIN_URL = os.environ.get('KEYCLOAK_ADMIN_URL', 'http://kodskog-keycloak:8080/')
KEYCLOAK_OPENID_URL = os.environ.get('KEYCLOAK_OPENID_URL', 'http://kodskog-keycloak:8080/auth/')
KEYCLOAK_REALM = os.environ.get('KEYCLOAK_REALM', 'kodskog')
KEYCLOAK_CLIENT_ID = os.environ.get('KEYCLOAK_CLIENT_ID', 'kodskog')
KEYCLOAK_CLIENT_SECRET = os.environ.get('KEYCLOAK_CLIENT_SECRET', 'your-client-secret')

# Logger API URL
LOGGER_API_URL = os.environ.get('LOGGER_API_URL', 'http://traffic-logger:5000')

# Keycloak Admin Credentials
KEYCLOAK_ADMIN_USERNAME = os.environ.get('KEYCLOAK_ADMIN_USERNAME', 'admin')
KEYCLOAK_ADMIN_PASSWORD = os.environ.get('KEYCLOAK_ADMIN_PASSWORD', 'admin')

print("Environment Variables:", os.environ)

#Mock
MOCK_AUTHORIZATION_KEY = "afweiob23rfvRsd"


# Replace with the appropriate URL and port
url = "http://traffic-logger:5000/log_traffic"

# Define the payload to be sent in JSON format
payload = {
    "key1": "value1",
    "key2": "value2"
}
import time

for _ in range(5):  # retry 5 times
    try:
        response = requests.post(url, json=payload)
        print("Status Code:", response.status_code)
        print("Response Text:", response.text)
        break
    except requests.ConnectionError:
        print("Connection failed, retrying...")
        time.sleep(5)  # wait for 5 seconds before retrying

try:
    # Initialize Keycloak Admin
    keycloak_admin = KeycloakAdmin(server_url=KEYCLOAK_ADMIN_URL,
                                   username=KEYCLOAK_ADMIN_USERNAME,
                                   password=KEYCLOAK_ADMIN_PASSWORD,
                                   realm_name=KEYCLOAK_REALM,
                                   client_id=KEYCLOAK_CLIENT_ID,
                                   client_secret_key=KEYCLOAK_CLIENT_SECRET,)
except Exception as e:
    app.logger.error(f"Error initializing Keycloak Admin: {e}")

# try:
#     # Initialize Keycloak OpenID
#     keycloak_openid = KeycloakOpenID(server_url=KEYCLOAK_OPENID_URL,
#                                      client_id=KEYCLOAK_CLIENT_ID,
#                                      realm_name=KEYCLOAK_REALM,
#                                      client_secret_key=KEYCLOAK_CLIENT_SECRET)
# except Exception as e:
#     app.logger.error(f"Error initializing Keycloak OpenID: {e}")

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    # # Authenticate the user and obtain an access token
    # try:
    #     token_response = keycloak_openid.token(username, password)
    #     access_token = token_response.get('access_token')
    # except Exception as e:
    #     # app.logger.error(f"Error during authentication: {e}")
    #     return jsonify({"error": "Invalid credentials"}), 401

    # Mock authentication
    if username == "hadsag" and password == "hadsag":
        return jsonify({"access_token": MOCK_AUTHORIZATION_KEY}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401

    
    # Log the login action
    log_data = {'action': 'login', 'username': username}
    requests.post(LOGGER_API_URL, json=log_data)
    
    return jsonify({"access_token": access_token}), 200

@app.route('/verify-token', methods=['POST'])
def verify_token():
    data = request.json
    token = data.get('token')
    
    # # Verify the access token
    # try:
    #     token_info = keycloak_openid.decode_token(token, key=None, algorithms=['RS256'])
    #     user_id = token_info.get('sub')
    # except Exception as e:
    #     return jsonify({"error": "Invalid token"}), 401
    
    # # Log the token verification
    # log_data = {'action': 'verify_token', 'userId': user_id}
    # requests.post(LOGGER_API_URL, json=log_data)
    
    # return jsonify({"valid": True, "userId": user_id}), 200

    # Mock token verification
    if token == MOCK_AUTHORIZATION_KEY:
        return jsonify({"valid": True, "userId": "mock_user_id"}), 200
    else:
        return jsonify({"error": "Invalid token"}), 401



if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)

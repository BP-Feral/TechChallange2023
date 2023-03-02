from flask import Flask

def initialize_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'COOKIEMONSTER123'

    from .views import root
    from .auth import auth

    app.register_blueprint(root, url_prefix = '/')
    app.register_blueprint(auth, url_prefix = '/')

    return app
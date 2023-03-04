from website import initialize_app

app = initialize_app()
## test
if __name__ == '__main__':
    app.run(debug=True)
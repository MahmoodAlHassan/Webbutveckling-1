from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
@app.route('/home')

def home():
    return render_template('home.html')
    

@app.route('/news')
def news():
    return render_template('news.html')


@app.route('/about')
def about():
    return render_template('about.html')



@app.route('/contacts')
def contacts():
    return render_template('contacts.html')


if __name__ == '__main__':
    app.run(debug=True)
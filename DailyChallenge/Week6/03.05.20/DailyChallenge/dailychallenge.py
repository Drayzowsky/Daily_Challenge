# Daily Challenge


from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    with open("lesson1/in-this-chapter.md", "r") as c:
        chapter = c.read()
    with open("lesson1/exercise.md", "r") as e:
        exercise = e.read()
    return render_template("index.html", chapter=chapter, exercise=exercise)


if __name__ == "__main__":
    app.run(debug=True)

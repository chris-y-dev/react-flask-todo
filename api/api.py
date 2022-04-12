from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db=SQLAlchemy(app)

#creating a model (the structure of data)
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id}, {self.content}'

#to convert data into an object
def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }

#for retrieving what's on the db
@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(todo_serializer, Todo.query.all())])

#for posting form submission data and passing it onto db
@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data) #json.loads converts data into python Dictionary
    todo = Todo(content=request_data['content'])
    
    db.session.add(todo)
    db.session.commit()

    return {'201': 'todo created successfully'}

#For showing individual posts
@app.route('/api/<int:id>', methods=['GET'])
def show(id):
    return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])

#Route for deleting
@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    request_data = json.loads(request.data) #json.loads converts data into python Dictionary
    Todo.query.filter_by(id=request_data['id']).delete()
    db.session.commit()
    return {'204': 'Deleted successfully'}

if __name__ == '__main__':
    app.run(debug=True)
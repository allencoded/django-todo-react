# django-todo-react
Django Todo React Application

# Tech Used
- python v3
- [pipenv](https://github.com/pypa/pipenv)
- [Django](https://github.com/django/django) backend
- Reacts [CRA](https://github.com/facebook/create-react-app) frontend
- [Graphql](https://github.com/graphql-python/graphene-django)


The backend application has a todo model for testing purposes. The frontend at this time is just a blank CRA. Also important no security was taken to hide any secret django keys since this is just for learning anyhow.

# Start App
### Backend
Python 3 and pipenv are required. pipenv can be installed using `pip3 install pipenv` provided you have python 3 and pip setup. After that ensure you are in the project root and run...

```bash
pipenv shell
cd backend
python manage.py runserver
```

The backend application runs at:
localhost:8080

### Frontend
```bash
cd frontend
npm ci
npm start
```

The frontend application runs at:
localhost:3000


# Important Routes
http://localhost:8000/api/
The api rest route.

http://localhost:8000/graphql/
The graphql route.

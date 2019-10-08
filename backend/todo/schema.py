import graphene
from graphene_django import DjangoObjectType
from .models import Todo

class TodoType(DjangoObjectType):
    class Meta:
        model = Todo

class Query(graphene.ObjectType):
    todos = graphene.List(TodoType)

    def resolve_todos(self, info, **kwargs):
        return Todo.objects.all()
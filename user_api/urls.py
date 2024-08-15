from django.urls import path
from . import views

urlpatterns = [
    path('api/register/', views.UserRegister.as_view(), name='register'),
    path('api/login/', views.UserLogin.as_view(), name='login'),
    path('api/logout/', views.UserLogout.as_view(), name='logout'),
    path('api/user/', views.UserView.as_view(), name='user'),
]

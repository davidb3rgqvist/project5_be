from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model

# Get the custom user model if one is defined; otherwise, use the default Django user model
UserModel = get_user_model()

class UserRegisterForm(UserCreationForm):
    class Meta:
        model = UserModel  
        fields = ('email', 'username', 'password1', 'password2') 

class UserLoginForm(AuthenticationForm):

    username = forms.EmailField(label='Email')

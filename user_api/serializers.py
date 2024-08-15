from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework.exceptions import ValidationError
from .forms import UserRegisterForm, UserLoginForm

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    # Extra fields for password confirmation
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = UserModel
        fields = ['username', 'password1', 'password2']

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        user = UserModel.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password1']
        )
        return user

class UserLoginSerializer(serializers.Serializer):
    # Fields for login credentials
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        # Authenticate the user with the provided credentials
        username = data.get('username')
        password = data.get('password')

        user = authenticate(username=username, password=password)
        if user is None:
            raise serializers.ValidationError("Invalid login credentials")
        
        # Check if the user is active
        if not user.is_active:
            raise serializers.ValidationError("User is deactivated")

        return {
            'user': user
        }

class UserSerializer(serializers.ModelSerializer):
    # Serializer for returning basic user data
    class Meta:
        model = UserModel
        fields = ('username',)

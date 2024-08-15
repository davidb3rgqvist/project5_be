from django.contrib.auth import get_user_model
import re

def custom_validation(data, required_fields):
    """
    Ensure all required fields are present and passwords match.
    """
    cleaned_data = {}
    for field in required_fields:
        if field not in data or not data[field].strip():
            raise ValueError(f"{field} is required.")
        cleaned_data[field] = data[field].strip()
    
    if cleaned_data['password1'] != cleaned_data['password2']:
        raise ValueError("Passwords do not match.")
    
    return cleaned_data

def validate_username(username):
    """
    Validate the format of a username and ensure it's unique.
    """
    if not re.match(r"^[a-zA-Z0-9]{3,30}$", username):
        raise ValueError("Username must be alphanumeric and between 3 and 30 characters long.")
    
    UserModel = get_user_model()
    if UserModel.objects.filter(username=username).exists():
        raise ValueError("Username already exists.")
    
    return True

def validate_password(password):
    """
    Validate that the password is at least 8 characters long.
    """
    if len(password) < 8:
        raise ValueError("Password must be at least 8 characters long.")
    
    return True

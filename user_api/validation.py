from django.core.exceptions import ValidationError
from django.core.validators import validate_email as django_validate_email
import re

def custom_validation(data, required_fields):
    cleaned_data = {}
    for field in required_fields:
        if field not in data:
            raise ValueError(f"{field} is required.")
        cleaned_data[field] = data[field].strip()
    
    if cleaned_data['password1'] != cleaned_data['password2']:
        raise ValueError("Passwords do not match.")
    
    return cleaned_data

def validate_email(email):
    """
    Validate the format of an email address using Django's built-in validator.

    :param email: The email address to validate.
    :return: True if the email is valid, otherwise False.
    """
    try:
        django_validate_email(email)
        return True
    except ValidationError:
        return False

def validate_password(password):
    """
    Validate the strength of a password.

    :param password: The password to validate.
    :return: True if the password is valid, otherwise False.
    """
    if len(password) < 8:
        return False
    if not re.search(r"\d", password):
        return False
    if not re.search(r"[A-Z]", password):
        return False
    if not re.search(r"[a-z]", password):
        return False
    return True

def validate_username(username):
    """
    Validate the format of a username.

    :param username: The username to validate.
    :return: True if the username is valid, otherwise False.
    """
    if not re.match(r"^[a-zA-Z0-9]{3,30}$", username):
        return False
    return True

def validate_phone_number(phone_number):
    """
    Validate the format of a phone number.

    :param phone_number: The phone number to validate.
    :return: True if the phone number is valid, otherwise False.
    """
    if not re.match(r"^\+\d{10,15}$", phone_number):
        return False
    return True

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager, Group, Permission

class AppUserManager(BaseUserManager):
    # Method to create a regular user
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)  # Hashes the user's password
        user.save(using=self._db)
        return user

    # Method to create a superuser with additional privileges
    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')

        return self.create_user(username, password, **extra_fields)

class AppUser(AbstractBaseUser, PermissionsMixin):
    # Custom user model with a unique username and additional fields
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, unique=True)
    is_active = models.BooleanField(default=True)  # Indicates whether the user's account is active
    is_staff = models.BooleanField(default=False)  # Indicates whether the user can access the admin site

    # Fields for managing user groups and permissions
    groups = models.ManyToManyField(
        Group,
        related_name='appuser_groups',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='appuser_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

    #

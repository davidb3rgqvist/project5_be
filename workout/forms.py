from django import forms
from workout.models import Workout, WorkoutComment

# Form for creating or updating Workout instances
class WorkoutForm(forms.ModelForm):
    """
    Form for creating or updating Workout instances.
    """
    class Meta:
        model = Workout  # Updated model reference
        fields = ['title', 'description', 'exercises', 'routine', 'photo', 'is_public']
        widgets = {
            'description': forms.Textarea(attrs={'class': 'form-control'}),
            'exercises': forms.Textarea(attrs={'class': 'form-control'}),
            'routine': forms.Textarea(attrs={'class': 'form-control'}),
        }

# Form for creating comments on Workout instances
class WorkoutCommentForm(forms.ModelForm):
    """
    Form for creating comments on Workout instances.
    """
    class Meta:
        model = WorkoutComment  # Updated model reference
        fields = ['text']
        widgets = {
            'text': forms.Textarea(
                attrs={
                    'class': 'form-control mt-3',
                    'id': 'comment',
                    'name': 'comment',
                    'rows': 5,
                    'placeholder': 'Add a comment...'
                }
            ),
        }

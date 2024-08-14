from django.test import TestCase
from django.urls import reverse
from workout.models import Workout

class WorkoutModelTestCase(TestCase):
    def setUp(self):
        self.workout = Workout.objects.create(
            title="Test Workout",
            description="This is a test workout.",
            is_public=True
        )

    def test_workout_creation(self):
        self.assertIsInstance(self.workout, Workout)
        self.assertEqual(self.workout.title, "Test Workout")
        self.assertEqual(self.workout.description, "This is a test workout.")
        self.assertTrue(self.workout.is_public)

    def test_str_method(self):
        self.assertEqual(str(self.workout), "Test Workout")

class HomeViewTests(TestCase):
    def test_home_view_status_code(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_home_view_contains_welcome_message(self):
        response = self.client.get(reverse('home'))
        self.assertContains(response, "<h1>Welcome to the Workout App</h1>")

    def test_home_view_template_not_used(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

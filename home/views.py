from django.http import HttpResponse
from django.urls import reverse, NoReverseMatch

def home_view(request):
    try:
        # Attempt to reverse URLs for various API endpoints
        api_endpoints = [
            {'name': 'User Register', 'url': reverse('register')},
            {'name': 'User Login', 'url': reverse('login')},
            {'name': 'User Logout', 'url': reverse('logout')},
            {'name': 'User Profile', 'url': reverse('user')},
            {'name': 'Workout List', 'url': reverse('workout-list')},
            # Example of a URL that requires a dynamic argument (workout_id)
            {'name': 'Workout Comment List', 'url': reverse('workoutcomment-list', kwargs={'workout_id': 1})},
        ]
    except NoReverseMatch as e:
        # Handle case where URL names don't exist by showing an error message
        api_endpoints = [{'name': 'Error: ' + str(e), 'url': '#'}]

    # HTML content to display the welcome message and list of API endpoints
    html = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HealthHub_BE</title>
        <style>
            .welcome-message {
                font-size: 4em;
                text-align: center;
                margin-top: 5%;
            }
            .api-endpoints {
                font-size: 1.5em;
                margin-top: 2em;
                text-align: left;
                margin-left: 20%;
                margin-right: 20%;
            }
            .api-endpoints ul {
                list-style-type: none;
                padding: 0;
            }
            .api-endpoints li {
                margin: 0.5em 0;
            }
            .api-endpoints a {
                text-decoration: none;
                color: #007BFF;
            }
            .api-endpoints a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <div class="welcome-message">
            HUGE WELCOME TO HEALTHHUB_BE
        </div>
        <div class="api-endpoints">
            <h2>Available API Endpoints:</h2>
            <ul>
    """

    # Loop through API endpoints to dynamically generate list items with links
    for endpoint in api_endpoints:
        html += f'<li><a href="{endpoint["url"]}">{endpoint["name"]}</a></li>'

    html += """
            </ul>
        </div>
    </body>
    </html>
    """

    # Return the constructed HTML as an HttpResponse
    return HttpResponse(html)

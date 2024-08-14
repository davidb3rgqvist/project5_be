const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        api.get('workouts/')
            .then((response) => {
                setWorkouts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching workouts:', error);
            });
    }, []);

    return (
        <div>
            <h1>Workout Programs</h1>
            <ul>
                {workouts.map(workout => (
                    <li key={workout.id}>{workout.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Workouts;
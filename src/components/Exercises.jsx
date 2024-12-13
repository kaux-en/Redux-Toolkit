import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExercise, deleteExercise } from "../features/ExerciseLogSlice";
import { Form, Button, Container, Row, Col } from "react-bootstrap";


const ViewExercises = () => {
    const exercises = useSelector((state) => state.exercises.exercises)
    const dispatch = useDispatch();

    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addExercise({ id: Date.now(), type, duration, calories }));
        setType('');
        setDuration('');
        setCalories('');
    };

    const handleDelete = ({ id }) => {
        dispatch(deleteExercise(id))
    }

    return (
        <div>

    <Container>
        <Row className='justify-content-md-center'>
            <Col md={6}>
                <h2>Add New Exercise</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Exercise Type</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter exercise type'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Duration (minutes)</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Duration in minutes'
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Calories</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Calories burn'
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
                        />
                    </Form.Group>
                <Button variant='primary' type='submit'>Add Exercise</Button>
                </Form>
            </Col>
        </Row>
    </Container>

        <ul>
            {exercises.map((exercise) => (
                <li key={exercise.id}>
                    {exercise.type} - {exercise.duration} minutes - {exercise.calories} kcal
                    <Button onClick={handleDelete}>Delete</Button>
                </li>
            ))
            }
        </ul>
    </div>
    )
};

export default ViewExercises;

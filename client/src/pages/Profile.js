import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import WorkoutList from '../components/'

// import { useQuery, useMutation } from '@apollo/client';

import Auth from '../utils/auth';

const Profile = (props) => {
    const { username: userParam } = useParams();

    //controller please set this query up
    // const { loading, data } = useQuery()

    const user = data?.me || data?.user || {};

    //navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to='/profile/:username' />;
    }

    if (loading) {
        return <div> Loading... </div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }

    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>

                {userParam && (
                    <button className='btn ml-auto' onClick={handleClick}>
                        Add a Workout
                    </button>
                )}
            </div>

            <div className="flex-row justify-space-between mb-3">
                <div className="col-12 mb-3 col-lg-8">
                    <WorkoutList
                        workouts={user.thoughts}
                        title={`${user.username}'s workouts...`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;

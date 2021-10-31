import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => {
                return (
                    <div 
                        className="card mb-2" 
                        key={user.id}
                    >
                        <div className="card-body p-3">
                            {/* ''말고 숫자 1옆의 ``을 사용하면 아래와 같이 변수를 안에 넣을 수 있다. */}
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UserList;
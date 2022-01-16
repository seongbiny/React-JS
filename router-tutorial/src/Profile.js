// src/Profile.js

const profileData = {
    seongbiny: {
        name: '윤성빈',
        description: 'Frontend Engineer'
    },
    eunwoo: {
        name: '차은우',
        description: 'Backend Engineer'
    }
};

function Profile ({ match }){
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }
    return (
        <div>
        	{username}({profile.name}) <br />
            {profile.description}
        </div>
    )
};
export default Profile;
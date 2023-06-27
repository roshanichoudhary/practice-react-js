import classes from './Profile.module.css'

const Profile = () => {

    const user = {
        name: 'Anna',
        imgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imgSize: 90,
    }

    return (
        <>
            <h2>{user.name}</h2>
            <img className={classes.avatar} src={user.imgUrl} alt={'Photo of ' + user.name} style={{
                width: user.imgSize,
                height: user.imgSize
            }} />
        </>
    )
}

export default Profile;
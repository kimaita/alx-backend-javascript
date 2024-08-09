import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(
      (results) => {
        const names = results[0];
        const photo = results[1];
        console.log(`${photo.body} ${names.firstName} ${names.lastName}`);
      },
      () => console.log('Signup system offline'),
    );
}

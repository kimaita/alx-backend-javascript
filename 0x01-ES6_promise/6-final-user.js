import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises).then((results) => (
    Array.from(results, (res) => ({
      status: res.status,
      value: res.value || res.reason,
    }))));
}

import request from './request';

async function getMe() {
  try {
    const me = await request('hackers/me', 'GET', true);
    return me;
  } catch (error) {
    alert(error);
  }
}

async function getHackerById(id) {
  try {
    const hacker = await request(`hackers/${id}`, 'GET', true);
    return hacker;
  } catch (error) {
    alert(error);
  }
}

export default { getMe, getHackerById };
